let ByteBuffer = require('bytebuffer'),
    g_EMsg = require('./enum/EMsg'),
    g_EMsgCSGO = require('./enum/EMsgCSGO'),
    protobufs = require('./protobufs')

const VERBOSE_EMSG_LIST = [
    g_EMsg.Multi,
    g_EMsg.ClientHeartBeat,
    // g_EMsg.ClientRichPresenceRequest
];
const PROTO_MASK = 0x80000000

const parser = {
    parseMessage (message, isRequest = true) {
        let buf = ByteBuffer.wrap(message, ByteBuffer.LITTLE_ENDIAN)
        let rawEMsg = buf.readUint32(),
            isProto = !!(rawEMsg & PROTO_MASK),
            EMsg = rawEMsg & ~PROTO_MASK,
            hdrLength = buf.readUint32(),
            header = {
                EMsg,
                EMsgName: g_EMsg[EMsg]
            }

        // Not to parse Verbose EMsg
        if (VERBOSE_EMSG_LIST.includes(EMsg)) return null

        if (isProto) {
            try {
                header.proto = parser._decodeProto(protobufs.CMsgProtoBufHeader, buf.slice(buf.offset, buf.offset + hdrLength))
                buf.skip(hdrLength)
                return parser._decodeBody(header, buf.slice(), isRequest)
            } catch (e) {
                console.log(`Msg ${EMsg} Error`, e)
            }
        } else {
            buf.skip(3); // 1 byte for header size (fixed at 36), 2 bytes for header version (fixed at 2)
            header.targetJobID = buf.readUint64().toString();
            header.sourceJobID = buf.readUint64().toString();
            buf.skip(1); // 1 byte for header canary (fixed at 239)
            header.steamID = buf.readUint64().toString();
            header.sessionID = buf.readUint32();
        }
    },
    _decodeBody (header, body, isRequest) {
        if (!header) return { error: 'Failed to parse header' }
        let EMsgName = header.EMsgName,
            EMsg = header.EMsg,
            parsedBody = {}
        if (header.proto && header.proto.target_job_name) {
            parsedBody = parser._decodeUnified(header.proto.target_job_name, body, isRequest)
        } else if (protobufs[EMsg]) {
            parsedBody = parser._decodeProto(protobufs[EMsg], body)
            if (parsedBody && (EMsgName === 'ClientToGC' || EMsgName === 'ClientFromGC')) {
                parsedBody.payload = parser._decodeGCMsg(parsedBody)
            }
        } else {
            return {
                header, error: `Cannot Find ProtoBuf for ${EMsgName}`
            }
        }
        return { header, body: parsedBody }
    },
    _decodeUnified (methodName, body, isRequest) {
        let Proto = protobufs[methodName + (isRequest ? '_Request' : '_Response')]
        if (!Proto) return { error: `Proto ${methodName + (isRequest ? '_Request' : '_Response')} doesn't exist` }

        return parser._decodeProto(Proto, body)
    },
    _decodeProto (proto, encoded) {
        if (ByteBuffer.isByteBuffer(encoded)) {
            encoded = encoded.toBuffer();
        }

        let decoded = proto.decode(encoded);
        let objNoDefaults = proto.toObject(decoded, {"longs": String});
        let objWithDefaults = proto.toObject(decoded, {"defaults": true, "longs": String});
        return replaceDefaults(objNoDefaults, objWithDefaults);

        function replaceDefaults(noDefaults, withDefaults) {
            if (Array.isArray(withDefaults)) {
                return withDefaults.map((val, idx) => replaceDefaults(noDefaults[idx], val));
            }

            for (let i in withDefaults) {
                if (!withDefaults.hasOwnProperty(i)) {
                    continue;
                }

                if (withDefaults[i] && typeof withDefaults[i] === 'object' && !Buffer.isBuffer(withDefaults[i])) {
                    // Covers both object and array cases, both of which will work
                    // Won't replace empty arrays, but that's desired behavior
                    withDefaults[i] = replaceDefaults(noDefaults[i], withDefaults[i]);
                } else if (typeof noDefaults[i] === 'undefined' && isReplaceableDefaultValue(withDefaults[i])) {
                    withDefaults[i] = null;
                }
            }

            return withDefaults;
        }

        function isReplaceableDefaultValue(val) {
            if (Buffer.isBuffer(val) && val.length == 0) {
                // empty buffer is replaceable
                return true;
            }

            if (Array.isArray(val)) {
                // empty array is not replaceable (empty repeated fields)
                return false;
            }

            if (val === '0') {
                // Zero as a string is replaceable (64-bit integer)
                return true;
            }

            // Anything falsy is true
            return !val;
        }
    },
    _decodeGCMsg (message) {
        let appid = message.appid,
            payload = message.payload,
            bodyPayload = null,
            header = {},
            msgType = message.msgtype & ~PROTO_MASK;

        if (message.msgtype & PROTO_MASK) {
            let headerLength = message.payload.readInt32LE(4);
            header = parser._decodeProto(protobufs.CMsgProtoBufHeader, payload.slice(8, 8 + headerLength));
            bodyPayload = payload.slice(8 + headerLength);
        } else {
            header = ByteBuffer.wrap(payload.slice(0, 18));
            bodyPayload = payload.slice(18);
        }

        switch (appid) {
            case 730:
                // for CSGO
                let MsgName = g_EMsgCSGO[msgType]
                header['MsgName'] = MsgName
                if (protobufs['CSGO'][msgType]) {
                    let result = parser._decodeProto(protobufs['CSGO'][msgType], bodyPayload)
                    console.log(result)
                    return { header, payload: result }
                } else {
                    return { header, error: `msgType ${msgType} not defined` }
                }


        }
    }
}

module.exports = parser