/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    /**
     * ESteamDatagramMsgID enum.
     * @exports ESteamDatagramMsgID
     * @enum {number}
     * @property {number} k_ESteamDatagramMsg_RouterPingRequest=1 k_ESteamDatagramMsg_RouterPingRequest value
     * @property {number} k_ESteamDatagramMsg_RouterPingReply=2 k_ESteamDatagramMsg_RouterPingReply value
     * @property {number} k_ESteamDatagramMsg_GameserverPingRequest=3 k_ESteamDatagramMsg_GameserverPingRequest value
     * @property {number} k_ESteamDatagramMsg_GameserverPingReply=4 k_ESteamDatagramMsg_GameserverPingReply value
     * @property {number} k_ESteamDatagramMsg_GameserverSessionRequest=5 k_ESteamDatagramMsg_GameserverSessionRequest value
     * @property {number} k_ESteamDatagramMsg_GameserverSessionEstablished=6 k_ESteamDatagramMsg_GameserverSessionEstablished value
     * @property {number} k_ESteamDatagramMsg_NoSession=7 k_ESteamDatagramMsg_NoSession value
     * @property {number} k_ESteamDatagramMsg_Diagnostic=8 k_ESteamDatagramMsg_Diagnostic value
     * @property {number} k_ESteamDatagramMsg_DataClientToRouter=9 k_ESteamDatagramMsg_DataClientToRouter value
     * @property {number} k_ESteamDatagramMsg_DataRouterToServer=10 k_ESteamDatagramMsg_DataRouterToServer value
     * @property {number} k_ESteamDatagramMsg_DataServerToRouter=11 k_ESteamDatagramMsg_DataServerToRouter value
     * @property {number} k_ESteamDatagramMsg_DataRouterToClient=12 k_ESteamDatagramMsg_DataRouterToClient value
     * @property {number} k_ESteamDatagramMsg_Stats=13 k_ESteamDatagramMsg_Stats value
     * @property {number} k_ESteamDatagramMsg_ClientPingSampleRequest=14 k_ESteamDatagramMsg_ClientPingSampleRequest value
     * @property {number} k_ESteamDatagramMsg_ClientPingSampleReply=15 k_ESteamDatagramMsg_ClientPingSampleReply value
     * @property {number} k_ESteamDatagramMsg_ClientToRouterSwitchedPrimary=16 k_ESteamDatagramMsg_ClientToRouterSwitchedPrimary value
     */
    $root.ESteamDatagramMsgID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "k_ESteamDatagramMsg_RouterPingRequest"] = 1;
        values[valuesById[2] = "k_ESteamDatagramMsg_RouterPingReply"] = 2;
        values[valuesById[3] = "k_ESteamDatagramMsg_GameserverPingRequest"] = 3;
        values[valuesById[4] = "k_ESteamDatagramMsg_GameserverPingReply"] = 4;
        values[valuesById[5] = "k_ESteamDatagramMsg_GameserverSessionRequest"] = 5;
        values[valuesById[6] = "k_ESteamDatagramMsg_GameserverSessionEstablished"] = 6;
        values[valuesById[7] = "k_ESteamDatagramMsg_NoSession"] = 7;
        values[valuesById[8] = "k_ESteamDatagramMsg_Diagnostic"] = 8;
        values[valuesById[9] = "k_ESteamDatagramMsg_DataClientToRouter"] = 9;
        values[valuesById[10] = "k_ESteamDatagramMsg_DataRouterToServer"] = 10;
        values[valuesById[11] = "k_ESteamDatagramMsg_DataServerToRouter"] = 11;
        values[valuesById[12] = "k_ESteamDatagramMsg_DataRouterToClient"] = 12;
        values[valuesById[13] = "k_ESteamDatagramMsg_Stats"] = 13;
        values[valuesById[14] = "k_ESteamDatagramMsg_ClientPingSampleRequest"] = 14;
        values[valuesById[15] = "k_ESteamDatagramMsg_ClientPingSampleReply"] = 15;
        values[valuesById[16] = "k_ESteamDatagramMsg_ClientToRouterSwitchedPrimary"] = 16;
        return values;
    })();
    
    $root.CMsgSteamDatagramRouterPingReply = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramRouterPingReply.
         * @exports ICMsgSteamDatagramRouterPingReply
         * @interface ICMsgSteamDatagramRouterPingReply
         * @property {number|null} [client_timestamp] CMsgSteamDatagramRouterPingReply client_timestamp
         * @property {Array.<number>|null} [latency_datacenter_ids] CMsgSteamDatagramRouterPingReply latency_datacenter_ids
         * @property {Array.<number>|null} [latency_ping_ms] CMsgSteamDatagramRouterPingReply latency_ping_ms
         * @property {number|null} [your_public_ip] CMsgSteamDatagramRouterPingReply your_public_ip
         * @property {number|null} [server_time] CMsgSteamDatagramRouterPingReply server_time
         * @property {number|Long|null} [challenge] CMsgSteamDatagramRouterPingReply challenge
         * @property {number|null} [seconds_until_shutdown] CMsgSteamDatagramRouterPingReply seconds_until_shutdown
         * @property {number|null} [client_cookie] CMsgSteamDatagramRouterPingReply client_cookie
         */
    
        /**
         * Constructs a new CMsgSteamDatagramRouterPingReply.
         * @exports CMsgSteamDatagramRouterPingReply
         * @classdesc Represents a CMsgSteamDatagramRouterPingReply.
         * @implements ICMsgSteamDatagramRouterPingReply
         * @constructor
         * @param {ICMsgSteamDatagramRouterPingReply=} [properties] Properties to set
         */
        function CMsgSteamDatagramRouterPingReply(properties) {
            this.latency_datacenter_ids = [];
            this.latency_ping_ms = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramRouterPingReply client_timestamp.
         * @member {number} client_timestamp
         * @memberof CMsgSteamDatagramRouterPingReply
         * @instance
         */
        CMsgSteamDatagramRouterPingReply.prototype.client_timestamp = 0;
    
        /**
         * CMsgSteamDatagramRouterPingReply latency_datacenter_ids.
         * @member {Array.<number>} latency_datacenter_ids
         * @memberof CMsgSteamDatagramRouterPingReply
         * @instance
         */
        CMsgSteamDatagramRouterPingReply.prototype.latency_datacenter_ids = $util.emptyArray;
    
        /**
         * CMsgSteamDatagramRouterPingReply latency_ping_ms.
         * @member {Array.<number>} latency_ping_ms
         * @memberof CMsgSteamDatagramRouterPingReply
         * @instance
         */
        CMsgSteamDatagramRouterPingReply.prototype.latency_ping_ms = $util.emptyArray;
    
        /**
         * CMsgSteamDatagramRouterPingReply your_public_ip.
         * @member {number} your_public_ip
         * @memberof CMsgSteamDatagramRouterPingReply
         * @instance
         */
        CMsgSteamDatagramRouterPingReply.prototype.your_public_ip = 0;
    
        /**
         * CMsgSteamDatagramRouterPingReply server_time.
         * @member {number} server_time
         * @memberof CMsgSteamDatagramRouterPingReply
         * @instance
         */
        CMsgSteamDatagramRouterPingReply.prototype.server_time = 0;
    
        /**
         * CMsgSteamDatagramRouterPingReply challenge.
         * @member {number|Long} challenge
         * @memberof CMsgSteamDatagramRouterPingReply
         * @instance
         */
        CMsgSteamDatagramRouterPingReply.prototype.challenge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramRouterPingReply seconds_until_shutdown.
         * @member {number} seconds_until_shutdown
         * @memberof CMsgSteamDatagramRouterPingReply
         * @instance
         */
        CMsgSteamDatagramRouterPingReply.prototype.seconds_until_shutdown = 0;
    
        /**
         * CMsgSteamDatagramRouterPingReply client_cookie.
         * @member {number} client_cookie
         * @memberof CMsgSteamDatagramRouterPingReply
         * @instance
         */
        CMsgSteamDatagramRouterPingReply.prototype.client_cookie = 0;
    
        /**
         * Creates a new CMsgSteamDatagramRouterPingReply instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramRouterPingReply
         * @static
         * @param {ICMsgSteamDatagramRouterPingReply=} [properties] Properties to set
         * @returns {CMsgSteamDatagramRouterPingReply} CMsgSteamDatagramRouterPingReply instance
         */
        CMsgSteamDatagramRouterPingReply.create = function create(properties) {
            return new CMsgSteamDatagramRouterPingReply(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramRouterPingReply message. Does not implicitly {@link CMsgSteamDatagramRouterPingReply.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramRouterPingReply
         * @static
         * @param {ICMsgSteamDatagramRouterPingReply} message CMsgSteamDatagramRouterPingReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramRouterPingReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.client_timestamp != null && Object.hasOwnProperty.call(message, "client_timestamp"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.client_timestamp);
            if (message.latency_datacenter_ids != null && message.latency_datacenter_ids.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.latency_datacenter_ids.length; ++i)
                    writer.fixed32(message.latency_datacenter_ids[i]);
                writer.ldelim();
            }
            if (message.latency_ping_ms != null && message.latency_ping_ms.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.latency_ping_ms.length; ++i)
                    writer.uint32(message.latency_ping_ms[i]);
                writer.ldelim();
            }
            if (message.your_public_ip != null && Object.hasOwnProperty.call(message, "your_public_ip"))
                writer.uint32(/* id 4, wireType 5 =*/37).fixed32(message.your_public_ip);
            if (message.server_time != null && Object.hasOwnProperty.call(message, "server_time"))
                writer.uint32(/* id 5, wireType 5 =*/45).fixed32(message.server_time);
            if (message.challenge != null && Object.hasOwnProperty.call(message, "challenge"))
                writer.uint32(/* id 6, wireType 1 =*/49).fixed64(message.challenge);
            if (message.seconds_until_shutdown != null && Object.hasOwnProperty.call(message, "seconds_until_shutdown"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.seconds_until_shutdown);
            if (message.client_cookie != null && Object.hasOwnProperty.call(message, "client_cookie"))
                writer.uint32(/* id 8, wireType 5 =*/69).fixed32(message.client_cookie);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramRouterPingReply message, length delimited. Does not implicitly {@link CMsgSteamDatagramRouterPingReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramRouterPingReply
         * @static
         * @param {ICMsgSteamDatagramRouterPingReply} message CMsgSteamDatagramRouterPingReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramRouterPingReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramRouterPingReply message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramRouterPingReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramRouterPingReply} CMsgSteamDatagramRouterPingReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramRouterPingReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramRouterPingReply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.client_timestamp = reader.fixed32();
                    break;
                case 2:
                    if (!(message.latency_datacenter_ids && message.latency_datacenter_ids.length))
                        message.latency_datacenter_ids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.latency_datacenter_ids.push(reader.fixed32());
                    } else
                        message.latency_datacenter_ids.push(reader.fixed32());
                    break;
                case 3:
                    if (!(message.latency_ping_ms && message.latency_ping_ms.length))
                        message.latency_ping_ms = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.latency_ping_ms.push(reader.uint32());
                    } else
                        message.latency_ping_ms.push(reader.uint32());
                    break;
                case 4:
                    message.your_public_ip = reader.fixed32();
                    break;
                case 5:
                    message.server_time = reader.fixed32();
                    break;
                case 6:
                    message.challenge = reader.fixed64();
                    break;
                case 7:
                    message.seconds_until_shutdown = reader.uint32();
                    break;
                case 8:
                    message.client_cookie = reader.fixed32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramRouterPingReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramRouterPingReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramRouterPingReply} CMsgSteamDatagramRouterPingReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramRouterPingReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramRouterPingReply message.
         * @function verify
         * @memberof CMsgSteamDatagramRouterPingReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramRouterPingReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.client_timestamp != null && message.hasOwnProperty("client_timestamp"))
                if (!$util.isInteger(message.client_timestamp))
                    return "client_timestamp: integer expected";
            if (message.latency_datacenter_ids != null && message.hasOwnProperty("latency_datacenter_ids")) {
                if (!Array.isArray(message.latency_datacenter_ids))
                    return "latency_datacenter_ids: array expected";
                for (var i = 0; i < message.latency_datacenter_ids.length; ++i)
                    if (!$util.isInteger(message.latency_datacenter_ids[i]))
                        return "latency_datacenter_ids: integer[] expected";
            }
            if (message.latency_ping_ms != null && message.hasOwnProperty("latency_ping_ms")) {
                if (!Array.isArray(message.latency_ping_ms))
                    return "latency_ping_ms: array expected";
                for (var i = 0; i < message.latency_ping_ms.length; ++i)
                    if (!$util.isInteger(message.latency_ping_ms[i]))
                        return "latency_ping_ms: integer[] expected";
            }
            if (message.your_public_ip != null && message.hasOwnProperty("your_public_ip"))
                if (!$util.isInteger(message.your_public_ip))
                    return "your_public_ip: integer expected";
            if (message.server_time != null && message.hasOwnProperty("server_time"))
                if (!$util.isInteger(message.server_time))
                    return "server_time: integer expected";
            if (message.challenge != null && message.hasOwnProperty("challenge"))
                if (!$util.isInteger(message.challenge) && !(message.challenge && $util.isInteger(message.challenge.low) && $util.isInteger(message.challenge.high)))
                    return "challenge: integer|Long expected";
            if (message.seconds_until_shutdown != null && message.hasOwnProperty("seconds_until_shutdown"))
                if (!$util.isInteger(message.seconds_until_shutdown))
                    return "seconds_until_shutdown: integer expected";
            if (message.client_cookie != null && message.hasOwnProperty("client_cookie"))
                if (!$util.isInteger(message.client_cookie))
                    return "client_cookie: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramRouterPingReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramRouterPingReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramRouterPingReply} CMsgSteamDatagramRouterPingReply
         */
        CMsgSteamDatagramRouterPingReply.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramRouterPingReply)
                return object;
            var message = new $root.CMsgSteamDatagramRouterPingReply();
            if (object.client_timestamp != null)
                message.client_timestamp = object.client_timestamp >>> 0;
            if (object.latency_datacenter_ids) {
                if (!Array.isArray(object.latency_datacenter_ids))
                    throw TypeError(".CMsgSteamDatagramRouterPingReply.latency_datacenter_ids: array expected");
                message.latency_datacenter_ids = [];
                for (var i = 0; i < object.latency_datacenter_ids.length; ++i)
                    message.latency_datacenter_ids[i] = object.latency_datacenter_ids[i] >>> 0;
            }
            if (object.latency_ping_ms) {
                if (!Array.isArray(object.latency_ping_ms))
                    throw TypeError(".CMsgSteamDatagramRouterPingReply.latency_ping_ms: array expected");
                message.latency_ping_ms = [];
                for (var i = 0; i < object.latency_ping_ms.length; ++i)
                    message.latency_ping_ms[i] = object.latency_ping_ms[i] >>> 0;
            }
            if (object.your_public_ip != null)
                message.your_public_ip = object.your_public_ip >>> 0;
            if (object.server_time != null)
                message.server_time = object.server_time >>> 0;
            if (object.challenge != null)
                if ($util.Long)
                    (message.challenge = $util.Long.fromValue(object.challenge)).unsigned = false;
                else if (typeof object.challenge === "string")
                    message.challenge = parseInt(object.challenge, 10);
                else if (typeof object.challenge === "number")
                    message.challenge = object.challenge;
                else if (typeof object.challenge === "object")
                    message.challenge = new $util.LongBits(object.challenge.low >>> 0, object.challenge.high >>> 0).toNumber();
            if (object.seconds_until_shutdown != null)
                message.seconds_until_shutdown = object.seconds_until_shutdown >>> 0;
            if (object.client_cookie != null)
                message.client_cookie = object.client_cookie >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramRouterPingReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramRouterPingReply
         * @static
         * @param {CMsgSteamDatagramRouterPingReply} message CMsgSteamDatagramRouterPingReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramRouterPingReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.latency_datacenter_ids = [];
                object.latency_ping_ms = [];
            }
            if (options.defaults) {
                object.client_timestamp = 0;
                object.your_public_ip = 0;
                object.server_time = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.challenge = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.challenge = options.longs === String ? "0" : 0;
                object.seconds_until_shutdown = 0;
                object.client_cookie = 0;
            }
            if (message.client_timestamp != null && message.hasOwnProperty("client_timestamp"))
                object.client_timestamp = message.client_timestamp;
            if (message.latency_datacenter_ids && message.latency_datacenter_ids.length) {
                object.latency_datacenter_ids = [];
                for (var j = 0; j < message.latency_datacenter_ids.length; ++j)
                    object.latency_datacenter_ids[j] = message.latency_datacenter_ids[j];
            }
            if (message.latency_ping_ms && message.latency_ping_ms.length) {
                object.latency_ping_ms = [];
                for (var j = 0; j < message.latency_ping_ms.length; ++j)
                    object.latency_ping_ms[j] = message.latency_ping_ms[j];
            }
            if (message.your_public_ip != null && message.hasOwnProperty("your_public_ip"))
                object.your_public_ip = message.your_public_ip;
            if (message.server_time != null && message.hasOwnProperty("server_time"))
                object.server_time = message.server_time;
            if (message.challenge != null && message.hasOwnProperty("challenge"))
                if (typeof message.challenge === "number")
                    object.challenge = options.longs === String ? String(message.challenge) : message.challenge;
                else
                    object.challenge = options.longs === String ? $util.Long.prototype.toString.call(message.challenge) : options.longs === Number ? new $util.LongBits(message.challenge.low >>> 0, message.challenge.high >>> 0).toNumber() : message.challenge;
            if (message.seconds_until_shutdown != null && message.hasOwnProperty("seconds_until_shutdown"))
                object.seconds_until_shutdown = message.seconds_until_shutdown;
            if (message.client_cookie != null && message.hasOwnProperty("client_cookie"))
                object.client_cookie = message.client_cookie;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramRouterPingReply to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramRouterPingReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramRouterPingReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramRouterPingReply;
    })();
    
    $root.CMsgSteamDatagramGameserverPing = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramGameserverPing.
         * @exports ICMsgSteamDatagramGameserverPing
         * @interface ICMsgSteamDatagramGameserverPing
         * @property {number|null} [client_session] CMsgSteamDatagramGameserverPing client_session
         * @property {number|Long|null} [client_steam_id] CMsgSteamDatagramGameserverPing client_steam_id
         * @property {number|null} [client_timestamp] CMsgSteamDatagramGameserverPing client_timestamp
         * @property {number|null} [router_timestamp] CMsgSteamDatagramGameserverPing router_timestamp
         * @property {number|null} [router_gameserver_latency] CMsgSteamDatagramGameserverPing router_gameserver_latency
         * @property {number|null} [seq_number_router] CMsgSteamDatagramGameserverPing seq_number_router
         * @property {number|null} [seq_number_e2e] CMsgSteamDatagramGameserverPing seq_number_e2e
         */
    
        /**
         * Constructs a new CMsgSteamDatagramGameserverPing.
         * @exports CMsgSteamDatagramGameserverPing
         * @classdesc Represents a CMsgSteamDatagramGameserverPing.
         * @implements ICMsgSteamDatagramGameserverPing
         * @constructor
         * @param {ICMsgSteamDatagramGameserverPing=} [properties] Properties to set
         */
        function CMsgSteamDatagramGameserverPing(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramGameserverPing client_session.
         * @member {number} client_session
         * @memberof CMsgSteamDatagramGameserverPing
         * @instance
         */
        CMsgSteamDatagramGameserverPing.prototype.client_session = 0;
    
        /**
         * CMsgSteamDatagramGameserverPing client_steam_id.
         * @member {number|Long} client_steam_id
         * @memberof CMsgSteamDatagramGameserverPing
         * @instance
         */
        CMsgSteamDatagramGameserverPing.prototype.client_steam_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramGameserverPing client_timestamp.
         * @member {number} client_timestamp
         * @memberof CMsgSteamDatagramGameserverPing
         * @instance
         */
        CMsgSteamDatagramGameserverPing.prototype.client_timestamp = 0;
    
        /**
         * CMsgSteamDatagramGameserverPing router_timestamp.
         * @member {number} router_timestamp
         * @memberof CMsgSteamDatagramGameserverPing
         * @instance
         */
        CMsgSteamDatagramGameserverPing.prototype.router_timestamp = 0;
    
        /**
         * CMsgSteamDatagramGameserverPing router_gameserver_latency.
         * @member {number} router_gameserver_latency
         * @memberof CMsgSteamDatagramGameserverPing
         * @instance
         */
        CMsgSteamDatagramGameserverPing.prototype.router_gameserver_latency = 0;
    
        /**
         * CMsgSteamDatagramGameserverPing seq_number_router.
         * @member {number} seq_number_router
         * @memberof CMsgSteamDatagramGameserverPing
         * @instance
         */
        CMsgSteamDatagramGameserverPing.prototype.seq_number_router = 0;
    
        /**
         * CMsgSteamDatagramGameserverPing seq_number_e2e.
         * @member {number} seq_number_e2e
         * @memberof CMsgSteamDatagramGameserverPing
         * @instance
         */
        CMsgSteamDatagramGameserverPing.prototype.seq_number_e2e = 0;
    
        /**
         * Creates a new CMsgSteamDatagramGameserverPing instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramGameserverPing
         * @static
         * @param {ICMsgSteamDatagramGameserverPing=} [properties] Properties to set
         * @returns {CMsgSteamDatagramGameserverPing} CMsgSteamDatagramGameserverPing instance
         */
        CMsgSteamDatagramGameserverPing.create = function create(properties) {
            return new CMsgSteamDatagramGameserverPing(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramGameserverPing message. Does not implicitly {@link CMsgSteamDatagramGameserverPing.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramGameserverPing
         * @static
         * @param {ICMsgSteamDatagramGameserverPing} message CMsgSteamDatagramGameserverPing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramGameserverPing.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.client_session != null && Object.hasOwnProperty.call(message, "client_session"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.client_session);
            if (message.client_steam_id != null && Object.hasOwnProperty.call(message, "client_steam_id"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.client_steam_id);
            if (message.client_timestamp != null && Object.hasOwnProperty.call(message, "client_timestamp"))
                writer.uint32(/* id 3, wireType 5 =*/29).fixed32(message.client_timestamp);
            if (message.router_timestamp != null && Object.hasOwnProperty.call(message, "router_timestamp"))
                writer.uint32(/* id 4, wireType 5 =*/37).fixed32(message.router_timestamp);
            if (message.router_gameserver_latency != null && Object.hasOwnProperty.call(message, "router_gameserver_latency"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.router_gameserver_latency);
            if (message.seq_number_router != null && Object.hasOwnProperty.call(message, "seq_number_router"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.seq_number_router);
            if (message.seq_number_e2e != null && Object.hasOwnProperty.call(message, "seq_number_e2e"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.seq_number_e2e);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramGameserverPing message, length delimited. Does not implicitly {@link CMsgSteamDatagramGameserverPing.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramGameserverPing
         * @static
         * @param {ICMsgSteamDatagramGameserverPing} message CMsgSteamDatagramGameserverPing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramGameserverPing.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramGameserverPing message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramGameserverPing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramGameserverPing} CMsgSteamDatagramGameserverPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramGameserverPing.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramGameserverPing();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.client_session = reader.uint32();
                    break;
                case 2:
                    message.client_steam_id = reader.fixed64();
                    break;
                case 3:
                    message.client_timestamp = reader.fixed32();
                    break;
                case 4:
                    message.router_timestamp = reader.fixed32();
                    break;
                case 5:
                    message.router_gameserver_latency = reader.uint32();
                    break;
                case 6:
                    message.seq_number_router = reader.uint32();
                    break;
                case 7:
                    message.seq_number_e2e = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramGameserverPing message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramGameserverPing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramGameserverPing} CMsgSteamDatagramGameserverPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramGameserverPing.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramGameserverPing message.
         * @function verify
         * @memberof CMsgSteamDatagramGameserverPing
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramGameserverPing.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.client_session != null && message.hasOwnProperty("client_session"))
                if (!$util.isInteger(message.client_session))
                    return "client_session: integer expected";
            if (message.client_steam_id != null && message.hasOwnProperty("client_steam_id"))
                if (!$util.isInteger(message.client_steam_id) && !(message.client_steam_id && $util.isInteger(message.client_steam_id.low) && $util.isInteger(message.client_steam_id.high)))
                    return "client_steam_id: integer|Long expected";
            if (message.client_timestamp != null && message.hasOwnProperty("client_timestamp"))
                if (!$util.isInteger(message.client_timestamp))
                    return "client_timestamp: integer expected";
            if (message.router_timestamp != null && message.hasOwnProperty("router_timestamp"))
                if (!$util.isInteger(message.router_timestamp))
                    return "router_timestamp: integer expected";
            if (message.router_gameserver_latency != null && message.hasOwnProperty("router_gameserver_latency"))
                if (!$util.isInteger(message.router_gameserver_latency))
                    return "router_gameserver_latency: integer expected";
            if (message.seq_number_router != null && message.hasOwnProperty("seq_number_router"))
                if (!$util.isInteger(message.seq_number_router))
                    return "seq_number_router: integer expected";
            if (message.seq_number_e2e != null && message.hasOwnProperty("seq_number_e2e"))
                if (!$util.isInteger(message.seq_number_e2e))
                    return "seq_number_e2e: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramGameserverPing message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramGameserverPing
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramGameserverPing} CMsgSteamDatagramGameserverPing
         */
        CMsgSteamDatagramGameserverPing.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramGameserverPing)
                return object;
            var message = new $root.CMsgSteamDatagramGameserverPing();
            if (object.client_session != null)
                message.client_session = object.client_session >>> 0;
            if (object.client_steam_id != null)
                if ($util.Long)
                    (message.client_steam_id = $util.Long.fromValue(object.client_steam_id)).unsigned = false;
                else if (typeof object.client_steam_id === "string")
                    message.client_steam_id = parseInt(object.client_steam_id, 10);
                else if (typeof object.client_steam_id === "number")
                    message.client_steam_id = object.client_steam_id;
                else if (typeof object.client_steam_id === "object")
                    message.client_steam_id = new $util.LongBits(object.client_steam_id.low >>> 0, object.client_steam_id.high >>> 0).toNumber();
            if (object.client_timestamp != null)
                message.client_timestamp = object.client_timestamp >>> 0;
            if (object.router_timestamp != null)
                message.router_timestamp = object.router_timestamp >>> 0;
            if (object.router_gameserver_latency != null)
                message.router_gameserver_latency = object.router_gameserver_latency >>> 0;
            if (object.seq_number_router != null)
                message.seq_number_router = object.seq_number_router >>> 0;
            if (object.seq_number_e2e != null)
                message.seq_number_e2e = object.seq_number_e2e >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramGameserverPing message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramGameserverPing
         * @static
         * @param {CMsgSteamDatagramGameserverPing} message CMsgSteamDatagramGameserverPing
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramGameserverPing.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.client_session = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.client_steam_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.client_steam_id = options.longs === String ? "0" : 0;
                object.client_timestamp = 0;
                object.router_timestamp = 0;
                object.router_gameserver_latency = 0;
                object.seq_number_router = 0;
                object.seq_number_e2e = 0;
            }
            if (message.client_session != null && message.hasOwnProperty("client_session"))
                object.client_session = message.client_session;
            if (message.client_steam_id != null && message.hasOwnProperty("client_steam_id"))
                if (typeof message.client_steam_id === "number")
                    object.client_steam_id = options.longs === String ? String(message.client_steam_id) : message.client_steam_id;
                else
                    object.client_steam_id = options.longs === String ? $util.Long.prototype.toString.call(message.client_steam_id) : options.longs === Number ? new $util.LongBits(message.client_steam_id.low >>> 0, message.client_steam_id.high >>> 0).toNumber() : message.client_steam_id;
            if (message.client_timestamp != null && message.hasOwnProperty("client_timestamp"))
                object.client_timestamp = message.client_timestamp;
            if (message.router_timestamp != null && message.hasOwnProperty("router_timestamp"))
                object.router_timestamp = message.router_timestamp;
            if (message.router_gameserver_latency != null && message.hasOwnProperty("router_gameserver_latency"))
                object.router_gameserver_latency = message.router_gameserver_latency;
            if (message.seq_number_router != null && message.hasOwnProperty("seq_number_router"))
                object.seq_number_router = message.seq_number_router;
            if (message.seq_number_e2e != null && message.hasOwnProperty("seq_number_e2e"))
                object.seq_number_e2e = message.seq_number_e2e;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramGameserverPing to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramGameserverPing
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramGameserverPing.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramGameserverPing;
    })();
    
    $root.CMsgSteamDatagramGameServerAuthTicket = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramGameServerAuthTicket.
         * @exports ICMsgSteamDatagramGameServerAuthTicket
         * @interface ICMsgSteamDatagramGameServerAuthTicket
         * @property {number|null} [time_expiry] CMsgSteamDatagramGameServerAuthTicket time_expiry
         * @property {number|Long|null} [authorized_steam_id] CMsgSteamDatagramGameServerAuthTicket authorized_steam_id
         * @property {number|null} [authorized_public_ip] CMsgSteamDatagramGameServerAuthTicket authorized_public_ip
         * @property {number|Long|null} [gameserver_steam_id] CMsgSteamDatagramGameServerAuthTicket gameserver_steam_id
         * @property {number|Long|null} [gameserver_net_id] CMsgSteamDatagramGameServerAuthTicket gameserver_net_id
         * @property {Uint8Array|null} [signature] CMsgSteamDatagramGameServerAuthTicket signature
         * @property {number|null} [app_id] CMsgSteamDatagramGameServerAuthTicket app_id
         * @property {Array.<CMsgSteamDatagramGameServerAuthTicket.IExtraField>|null} [extra_fields] CMsgSteamDatagramGameServerAuthTicket extra_fields
         */
    
        /**
         * Constructs a new CMsgSteamDatagramGameServerAuthTicket.
         * @exports CMsgSteamDatagramGameServerAuthTicket
         * @classdesc Represents a CMsgSteamDatagramGameServerAuthTicket.
         * @implements ICMsgSteamDatagramGameServerAuthTicket
         * @constructor
         * @param {ICMsgSteamDatagramGameServerAuthTicket=} [properties] Properties to set
         */
        function CMsgSteamDatagramGameServerAuthTicket(properties) {
            this.extra_fields = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramGameServerAuthTicket time_expiry.
         * @member {number} time_expiry
         * @memberof CMsgSteamDatagramGameServerAuthTicket
         * @instance
         */
        CMsgSteamDatagramGameServerAuthTicket.prototype.time_expiry = 0;
    
        /**
         * CMsgSteamDatagramGameServerAuthTicket authorized_steam_id.
         * @member {number|Long} authorized_steam_id
         * @memberof CMsgSteamDatagramGameServerAuthTicket
         * @instance
         */
        CMsgSteamDatagramGameServerAuthTicket.prototype.authorized_steam_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramGameServerAuthTicket authorized_public_ip.
         * @member {number} authorized_public_ip
         * @memberof CMsgSteamDatagramGameServerAuthTicket
         * @instance
         */
        CMsgSteamDatagramGameServerAuthTicket.prototype.authorized_public_ip = 0;
    
        /**
         * CMsgSteamDatagramGameServerAuthTicket gameserver_steam_id.
         * @member {number|Long} gameserver_steam_id
         * @memberof CMsgSteamDatagramGameServerAuthTicket
         * @instance
         */
        CMsgSteamDatagramGameServerAuthTicket.prototype.gameserver_steam_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramGameServerAuthTicket gameserver_net_id.
         * @member {number|Long} gameserver_net_id
         * @memberof CMsgSteamDatagramGameServerAuthTicket
         * @instance
         */
        CMsgSteamDatagramGameServerAuthTicket.prototype.gameserver_net_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramGameServerAuthTicket signature.
         * @member {Uint8Array} signature
         * @memberof CMsgSteamDatagramGameServerAuthTicket
         * @instance
         */
        CMsgSteamDatagramGameServerAuthTicket.prototype.signature = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramGameServerAuthTicket app_id.
         * @member {number} app_id
         * @memberof CMsgSteamDatagramGameServerAuthTicket
         * @instance
         */
        CMsgSteamDatagramGameServerAuthTicket.prototype.app_id = 0;
    
        /**
         * CMsgSteamDatagramGameServerAuthTicket extra_fields.
         * @member {Array.<CMsgSteamDatagramGameServerAuthTicket.IExtraField>} extra_fields
         * @memberof CMsgSteamDatagramGameServerAuthTicket
         * @instance
         */
        CMsgSteamDatagramGameServerAuthTicket.prototype.extra_fields = $util.emptyArray;
    
        /**
         * Creates a new CMsgSteamDatagramGameServerAuthTicket instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramGameServerAuthTicket
         * @static
         * @param {ICMsgSteamDatagramGameServerAuthTicket=} [properties] Properties to set
         * @returns {CMsgSteamDatagramGameServerAuthTicket} CMsgSteamDatagramGameServerAuthTicket instance
         */
        CMsgSteamDatagramGameServerAuthTicket.create = function create(properties) {
            return new CMsgSteamDatagramGameServerAuthTicket(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramGameServerAuthTicket message. Does not implicitly {@link CMsgSteamDatagramGameServerAuthTicket.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramGameServerAuthTicket
         * @static
         * @param {ICMsgSteamDatagramGameServerAuthTicket} message CMsgSteamDatagramGameServerAuthTicket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramGameServerAuthTicket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.time_expiry != null && Object.hasOwnProperty.call(message, "time_expiry"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.time_expiry);
            if (message.authorized_steam_id != null && Object.hasOwnProperty.call(message, "authorized_steam_id"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.authorized_steam_id);
            if (message.authorized_public_ip != null && Object.hasOwnProperty.call(message, "authorized_public_ip"))
                writer.uint32(/* id 3, wireType 5 =*/29).fixed32(message.authorized_public_ip);
            if (message.gameserver_steam_id != null && Object.hasOwnProperty.call(message, "gameserver_steam_id"))
                writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.gameserver_steam_id);
            if (message.gameserver_net_id != null && Object.hasOwnProperty.call(message, "gameserver_net_id"))
                writer.uint32(/* id 5, wireType 1 =*/41).fixed64(message.gameserver_net_id);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.signature);
            if (message.app_id != null && Object.hasOwnProperty.call(message, "app_id"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.app_id);
            if (message.extra_fields != null && message.extra_fields.length)
                for (var i = 0; i < message.extra_fields.length; ++i)
                    $root.CMsgSteamDatagramGameServerAuthTicket.ExtraField.encode(message.extra_fields[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramGameServerAuthTicket message, length delimited. Does not implicitly {@link CMsgSteamDatagramGameServerAuthTicket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramGameServerAuthTicket
         * @static
         * @param {ICMsgSteamDatagramGameServerAuthTicket} message CMsgSteamDatagramGameServerAuthTicket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramGameServerAuthTicket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramGameServerAuthTicket message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramGameServerAuthTicket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramGameServerAuthTicket} CMsgSteamDatagramGameServerAuthTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramGameServerAuthTicket.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramGameServerAuthTicket();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.time_expiry = reader.fixed32();
                    break;
                case 2:
                    message.authorized_steam_id = reader.fixed64();
                    break;
                case 3:
                    message.authorized_public_ip = reader.fixed32();
                    break;
                case 4:
                    message.gameserver_steam_id = reader.fixed64();
                    break;
                case 5:
                    message.gameserver_net_id = reader.fixed64();
                    break;
                case 6:
                    message.signature = reader.bytes();
                    break;
                case 7:
                    message.app_id = reader.uint32();
                    break;
                case 8:
                    if (!(message.extra_fields && message.extra_fields.length))
                        message.extra_fields = [];
                    message.extra_fields.push($root.CMsgSteamDatagramGameServerAuthTicket.ExtraField.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramGameServerAuthTicket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramGameServerAuthTicket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramGameServerAuthTicket} CMsgSteamDatagramGameServerAuthTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramGameServerAuthTicket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramGameServerAuthTicket message.
         * @function verify
         * @memberof CMsgSteamDatagramGameServerAuthTicket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramGameServerAuthTicket.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.time_expiry != null && message.hasOwnProperty("time_expiry"))
                if (!$util.isInteger(message.time_expiry))
                    return "time_expiry: integer expected";
            if (message.authorized_steam_id != null && message.hasOwnProperty("authorized_steam_id"))
                if (!$util.isInteger(message.authorized_steam_id) && !(message.authorized_steam_id && $util.isInteger(message.authorized_steam_id.low) && $util.isInteger(message.authorized_steam_id.high)))
                    return "authorized_steam_id: integer|Long expected";
            if (message.authorized_public_ip != null && message.hasOwnProperty("authorized_public_ip"))
                if (!$util.isInteger(message.authorized_public_ip))
                    return "authorized_public_ip: integer expected";
            if (message.gameserver_steam_id != null && message.hasOwnProperty("gameserver_steam_id"))
                if (!$util.isInteger(message.gameserver_steam_id) && !(message.gameserver_steam_id && $util.isInteger(message.gameserver_steam_id.low) && $util.isInteger(message.gameserver_steam_id.high)))
                    return "gameserver_steam_id: integer|Long expected";
            if (message.gameserver_net_id != null && message.hasOwnProperty("gameserver_net_id"))
                if (!$util.isInteger(message.gameserver_net_id) && !(message.gameserver_net_id && $util.isInteger(message.gameserver_net_id.low) && $util.isInteger(message.gameserver_net_id.high)))
                    return "gameserver_net_id: integer|Long expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                if (!$util.isInteger(message.app_id))
                    return "app_id: integer expected";
            if (message.extra_fields != null && message.hasOwnProperty("extra_fields")) {
                if (!Array.isArray(message.extra_fields))
                    return "extra_fields: array expected";
                for (var i = 0; i < message.extra_fields.length; ++i) {
                    var error = $root.CMsgSteamDatagramGameServerAuthTicket.ExtraField.verify(message.extra_fields[i]);
                    if (error)
                        return "extra_fields." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramGameServerAuthTicket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramGameServerAuthTicket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramGameServerAuthTicket} CMsgSteamDatagramGameServerAuthTicket
         */
        CMsgSteamDatagramGameServerAuthTicket.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramGameServerAuthTicket)
                return object;
            var message = new $root.CMsgSteamDatagramGameServerAuthTicket();
            if (object.time_expiry != null)
                message.time_expiry = object.time_expiry >>> 0;
            if (object.authorized_steam_id != null)
                if ($util.Long)
                    (message.authorized_steam_id = $util.Long.fromValue(object.authorized_steam_id)).unsigned = false;
                else if (typeof object.authorized_steam_id === "string")
                    message.authorized_steam_id = parseInt(object.authorized_steam_id, 10);
                else if (typeof object.authorized_steam_id === "number")
                    message.authorized_steam_id = object.authorized_steam_id;
                else if (typeof object.authorized_steam_id === "object")
                    message.authorized_steam_id = new $util.LongBits(object.authorized_steam_id.low >>> 0, object.authorized_steam_id.high >>> 0).toNumber();
            if (object.authorized_public_ip != null)
                message.authorized_public_ip = object.authorized_public_ip >>> 0;
            if (object.gameserver_steam_id != null)
                if ($util.Long)
                    (message.gameserver_steam_id = $util.Long.fromValue(object.gameserver_steam_id)).unsigned = false;
                else if (typeof object.gameserver_steam_id === "string")
                    message.gameserver_steam_id = parseInt(object.gameserver_steam_id, 10);
                else if (typeof object.gameserver_steam_id === "number")
                    message.gameserver_steam_id = object.gameserver_steam_id;
                else if (typeof object.gameserver_steam_id === "object")
                    message.gameserver_steam_id = new $util.LongBits(object.gameserver_steam_id.low >>> 0, object.gameserver_steam_id.high >>> 0).toNumber();
            if (object.gameserver_net_id != null)
                if ($util.Long)
                    (message.gameserver_net_id = $util.Long.fromValue(object.gameserver_net_id)).unsigned = false;
                else if (typeof object.gameserver_net_id === "string")
                    message.gameserver_net_id = parseInt(object.gameserver_net_id, 10);
                else if (typeof object.gameserver_net_id === "number")
                    message.gameserver_net_id = object.gameserver_net_id;
                else if (typeof object.gameserver_net_id === "object")
                    message.gameserver_net_id = new $util.LongBits(object.gameserver_net_id.low >>> 0, object.gameserver_net_id.high >>> 0).toNumber();
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            if (object.app_id != null)
                message.app_id = object.app_id >>> 0;
            if (object.extra_fields) {
                if (!Array.isArray(object.extra_fields))
                    throw TypeError(".CMsgSteamDatagramGameServerAuthTicket.extra_fields: array expected");
                message.extra_fields = [];
                for (var i = 0; i < object.extra_fields.length; ++i) {
                    if (typeof object.extra_fields[i] !== "object")
                        throw TypeError(".CMsgSteamDatagramGameServerAuthTicket.extra_fields: object expected");
                    message.extra_fields[i] = $root.CMsgSteamDatagramGameServerAuthTicket.ExtraField.fromObject(object.extra_fields[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramGameServerAuthTicket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramGameServerAuthTicket
         * @static
         * @param {CMsgSteamDatagramGameServerAuthTicket} message CMsgSteamDatagramGameServerAuthTicket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramGameServerAuthTicket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.extra_fields = [];
            if (options.defaults) {
                object.time_expiry = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.authorized_steam_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.authorized_steam_id = options.longs === String ? "0" : 0;
                object.authorized_public_ip = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gameserver_steam_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gameserver_steam_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gameserver_net_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gameserver_net_id = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
                object.app_id = 0;
            }
            if (message.time_expiry != null && message.hasOwnProperty("time_expiry"))
                object.time_expiry = message.time_expiry;
            if (message.authorized_steam_id != null && message.hasOwnProperty("authorized_steam_id"))
                if (typeof message.authorized_steam_id === "number")
                    object.authorized_steam_id = options.longs === String ? String(message.authorized_steam_id) : message.authorized_steam_id;
                else
                    object.authorized_steam_id = options.longs === String ? $util.Long.prototype.toString.call(message.authorized_steam_id) : options.longs === Number ? new $util.LongBits(message.authorized_steam_id.low >>> 0, message.authorized_steam_id.high >>> 0).toNumber() : message.authorized_steam_id;
            if (message.authorized_public_ip != null && message.hasOwnProperty("authorized_public_ip"))
                object.authorized_public_ip = message.authorized_public_ip;
            if (message.gameserver_steam_id != null && message.hasOwnProperty("gameserver_steam_id"))
                if (typeof message.gameserver_steam_id === "number")
                    object.gameserver_steam_id = options.longs === String ? String(message.gameserver_steam_id) : message.gameserver_steam_id;
                else
                    object.gameserver_steam_id = options.longs === String ? $util.Long.prototype.toString.call(message.gameserver_steam_id) : options.longs === Number ? new $util.LongBits(message.gameserver_steam_id.low >>> 0, message.gameserver_steam_id.high >>> 0).toNumber() : message.gameserver_steam_id;
            if (message.gameserver_net_id != null && message.hasOwnProperty("gameserver_net_id"))
                if (typeof message.gameserver_net_id === "number")
                    object.gameserver_net_id = options.longs === String ? String(message.gameserver_net_id) : message.gameserver_net_id;
                else
                    object.gameserver_net_id = options.longs === String ? $util.Long.prototype.toString.call(message.gameserver_net_id) : options.longs === Number ? new $util.LongBits(message.gameserver_net_id.low >>> 0, message.gameserver_net_id.high >>> 0).toNumber() : message.gameserver_net_id;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                object.app_id = message.app_id;
            if (message.extra_fields && message.extra_fields.length) {
                object.extra_fields = [];
                for (var j = 0; j < message.extra_fields.length; ++j)
                    object.extra_fields[j] = $root.CMsgSteamDatagramGameServerAuthTicket.ExtraField.toObject(message.extra_fields[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramGameServerAuthTicket to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramGameServerAuthTicket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramGameServerAuthTicket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgSteamDatagramGameServerAuthTicket.ExtraField = (function() {
    
            /**
             * Properties of an ExtraField.
             * @memberof CMsgSteamDatagramGameServerAuthTicket
             * @interface IExtraField
             * @property {string|null} [name] ExtraField name
             * @property {string|null} [string_value] ExtraField string_value
             * @property {number|null} [int32_value] ExtraField int32_value
             * @property {number|null} [fixed32_value] ExtraField fixed32_value
             * @property {number|Long|null} [fixed64_value] ExtraField fixed64_value
             */
    
            /**
             * Constructs a new ExtraField.
             * @memberof CMsgSteamDatagramGameServerAuthTicket
             * @classdesc Represents an ExtraField.
             * @implements IExtraField
             * @constructor
             * @param {CMsgSteamDatagramGameServerAuthTicket.IExtraField=} [properties] Properties to set
             */
            function ExtraField(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ExtraField name.
             * @member {string} name
             * @memberof CMsgSteamDatagramGameServerAuthTicket.ExtraField
             * @instance
             */
            ExtraField.prototype.name = "";
    
            /**
             * ExtraField string_value.
             * @member {string} string_value
             * @memberof CMsgSteamDatagramGameServerAuthTicket.ExtraField
             * @instance
             */
            ExtraField.prototype.string_value = "";
    
            /**
             * ExtraField int32_value.
             * @member {number} int32_value
             * @memberof CMsgSteamDatagramGameServerAuthTicket.ExtraField
             * @instance
             */
            ExtraField.prototype.int32_value = 0;
    
            /**
             * ExtraField fixed32_value.
             * @member {number} fixed32_value
             * @memberof CMsgSteamDatagramGameServerAuthTicket.ExtraField
             * @instance
             */
            ExtraField.prototype.fixed32_value = 0;
    
            /**
             * ExtraField fixed64_value.
             * @member {number|Long} fixed64_value
             * @memberof CMsgSteamDatagramGameServerAuthTicket.ExtraField
             * @instance
             */
            ExtraField.prototype.fixed64_value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Creates a new ExtraField instance using the specified properties.
             * @function create
             * @memberof CMsgSteamDatagramGameServerAuthTicket.ExtraField
             * @static
             * @param {CMsgSteamDatagramGameServerAuthTicket.IExtraField=} [properties] Properties to set
             * @returns {CMsgSteamDatagramGameServerAuthTicket.ExtraField} ExtraField instance
             */
            ExtraField.create = function create(properties) {
                return new ExtraField(properties);
            };
    
            /**
             * Encodes the specified ExtraField message. Does not implicitly {@link CMsgSteamDatagramGameServerAuthTicket.ExtraField.verify|verify} messages.
             * @function encode
             * @memberof CMsgSteamDatagramGameServerAuthTicket.ExtraField
             * @static
             * @param {CMsgSteamDatagramGameServerAuthTicket.IExtraField} message ExtraField message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtraField.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.string_value != null && Object.hasOwnProperty.call(message, "string_value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.string_value);
                if (message.int32_value != null && Object.hasOwnProperty.call(message, "int32_value"))
                    writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.int32_value);
                if (message.fixed32_value != null && Object.hasOwnProperty.call(message, "fixed32_value"))
                    writer.uint32(/* id 4, wireType 5 =*/37).fixed32(message.fixed32_value);
                if (message.fixed64_value != null && Object.hasOwnProperty.call(message, "fixed64_value"))
                    writer.uint32(/* id 5, wireType 1 =*/41).fixed64(message.fixed64_value);
                return writer;
            };
    
            /**
             * Encodes the specified ExtraField message, length delimited. Does not implicitly {@link CMsgSteamDatagramGameServerAuthTicket.ExtraField.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgSteamDatagramGameServerAuthTicket.ExtraField
             * @static
             * @param {CMsgSteamDatagramGameServerAuthTicket.IExtraField} message ExtraField message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtraField.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an ExtraField message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgSteamDatagramGameServerAuthTicket.ExtraField
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgSteamDatagramGameServerAuthTicket.ExtraField} ExtraField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtraField.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramGameServerAuthTicket.ExtraField();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.string_value = reader.string();
                        break;
                    case 3:
                        message.int32_value = reader.sint32();
                        break;
                    case 4:
                        message.fixed32_value = reader.fixed32();
                        break;
                    case 5:
                        message.fixed64_value = reader.fixed64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an ExtraField message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgSteamDatagramGameServerAuthTicket.ExtraField
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgSteamDatagramGameServerAuthTicket.ExtraField} ExtraField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtraField.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an ExtraField message.
             * @function verify
             * @memberof CMsgSteamDatagramGameServerAuthTicket.ExtraField
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExtraField.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.string_value != null && message.hasOwnProperty("string_value"))
                    if (!$util.isString(message.string_value))
                        return "string_value: string expected";
                if (message.int32_value != null && message.hasOwnProperty("int32_value"))
                    if (!$util.isInteger(message.int32_value))
                        return "int32_value: integer expected";
                if (message.fixed32_value != null && message.hasOwnProperty("fixed32_value"))
                    if (!$util.isInteger(message.fixed32_value))
                        return "fixed32_value: integer expected";
                if (message.fixed64_value != null && message.hasOwnProperty("fixed64_value"))
                    if (!$util.isInteger(message.fixed64_value) && !(message.fixed64_value && $util.isInteger(message.fixed64_value.low) && $util.isInteger(message.fixed64_value.high)))
                        return "fixed64_value: integer|Long expected";
                return null;
            };
    
            /**
             * Creates an ExtraField message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgSteamDatagramGameServerAuthTicket.ExtraField
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgSteamDatagramGameServerAuthTicket.ExtraField} ExtraField
             */
            ExtraField.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgSteamDatagramGameServerAuthTicket.ExtraField)
                    return object;
                var message = new $root.CMsgSteamDatagramGameServerAuthTicket.ExtraField();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.string_value != null)
                    message.string_value = String(object.string_value);
                if (object.int32_value != null)
                    message.int32_value = object.int32_value | 0;
                if (object.fixed32_value != null)
                    message.fixed32_value = object.fixed32_value >>> 0;
                if (object.fixed64_value != null)
                    if ($util.Long)
                        (message.fixed64_value = $util.Long.fromValue(object.fixed64_value)).unsigned = false;
                    else if (typeof object.fixed64_value === "string")
                        message.fixed64_value = parseInt(object.fixed64_value, 10);
                    else if (typeof object.fixed64_value === "number")
                        message.fixed64_value = object.fixed64_value;
                    else if (typeof object.fixed64_value === "object")
                        message.fixed64_value = new $util.LongBits(object.fixed64_value.low >>> 0, object.fixed64_value.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from an ExtraField message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgSteamDatagramGameServerAuthTicket.ExtraField
             * @static
             * @param {CMsgSteamDatagramGameServerAuthTicket.ExtraField} message ExtraField
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExtraField.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.string_value = "";
                    object.int32_value = 0;
                    object.fixed32_value = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.fixed64_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.fixed64_value = options.longs === String ? "0" : 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.string_value != null && message.hasOwnProperty("string_value"))
                    object.string_value = message.string_value;
                if (message.int32_value != null && message.hasOwnProperty("int32_value"))
                    object.int32_value = message.int32_value;
                if (message.fixed32_value != null && message.hasOwnProperty("fixed32_value"))
                    object.fixed32_value = message.fixed32_value;
                if (message.fixed64_value != null && message.hasOwnProperty("fixed64_value"))
                    if (typeof message.fixed64_value === "number")
                        object.fixed64_value = options.longs === String ? String(message.fixed64_value) : message.fixed64_value;
                    else
                        object.fixed64_value = options.longs === String ? $util.Long.prototype.toString.call(message.fixed64_value) : options.longs === Number ? new $util.LongBits(message.fixed64_value.low >>> 0, message.fixed64_value.high >>> 0).toNumber() : message.fixed64_value;
                return object;
            };
    
            /**
             * Converts this ExtraField to JSON.
             * @function toJSON
             * @memberof CMsgSteamDatagramGameServerAuthTicket.ExtraField
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExtraField.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ExtraField;
        })();
    
        return CMsgSteamDatagramGameServerAuthTicket;
    })();
    
    $root.CMsgSteamDatagramGameserverSessionRequest = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramGameserverSessionRequest.
         * @exports ICMsgSteamDatagramGameserverSessionRequest
         * @interface ICMsgSteamDatagramGameserverSessionRequest
         * @property {ICMsgSteamDatagramGameServerAuthTicket|null} [ticket] CMsgSteamDatagramGameserverSessionRequest ticket
         * @property {number|null} [challenge_time] CMsgSteamDatagramGameserverSessionRequest challenge_time
         * @property {number|Long|null} [challenge] CMsgSteamDatagramGameserverSessionRequest challenge
         * @property {number|null} [client_cookie] CMsgSteamDatagramGameserverSessionRequest client_cookie
         */
    
        /**
         * Constructs a new CMsgSteamDatagramGameserverSessionRequest.
         * @exports CMsgSteamDatagramGameserverSessionRequest
         * @classdesc Represents a CMsgSteamDatagramGameserverSessionRequest.
         * @implements ICMsgSteamDatagramGameserverSessionRequest
         * @constructor
         * @param {ICMsgSteamDatagramGameserverSessionRequest=} [properties] Properties to set
         */
        function CMsgSteamDatagramGameserverSessionRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramGameserverSessionRequest ticket.
         * @member {ICMsgSteamDatagramGameServerAuthTicket|null|undefined} ticket
         * @memberof CMsgSteamDatagramGameserverSessionRequest
         * @instance
         */
        CMsgSteamDatagramGameserverSessionRequest.prototype.ticket = null;
    
        /**
         * CMsgSteamDatagramGameserverSessionRequest challenge_time.
         * @member {number} challenge_time
         * @memberof CMsgSteamDatagramGameserverSessionRequest
         * @instance
         */
        CMsgSteamDatagramGameserverSessionRequest.prototype.challenge_time = 0;
    
        /**
         * CMsgSteamDatagramGameserverSessionRequest challenge.
         * @member {number|Long} challenge
         * @memberof CMsgSteamDatagramGameserverSessionRequest
         * @instance
         */
        CMsgSteamDatagramGameserverSessionRequest.prototype.challenge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramGameserverSessionRequest client_cookie.
         * @member {number} client_cookie
         * @memberof CMsgSteamDatagramGameserverSessionRequest
         * @instance
         */
        CMsgSteamDatagramGameserverSessionRequest.prototype.client_cookie = 0;
    
        /**
         * Creates a new CMsgSteamDatagramGameserverSessionRequest instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramGameserverSessionRequest
         * @static
         * @param {ICMsgSteamDatagramGameserverSessionRequest=} [properties] Properties to set
         * @returns {CMsgSteamDatagramGameserverSessionRequest} CMsgSteamDatagramGameserverSessionRequest instance
         */
        CMsgSteamDatagramGameserverSessionRequest.create = function create(properties) {
            return new CMsgSteamDatagramGameserverSessionRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramGameserverSessionRequest message. Does not implicitly {@link CMsgSteamDatagramGameserverSessionRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramGameserverSessionRequest
         * @static
         * @param {ICMsgSteamDatagramGameserverSessionRequest} message CMsgSteamDatagramGameserverSessionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramGameserverSessionRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ticket != null && Object.hasOwnProperty.call(message, "ticket"))
                $root.CMsgSteamDatagramGameServerAuthTicket.encode(message.ticket, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.challenge_time != null && Object.hasOwnProperty.call(message, "challenge_time"))
                writer.uint32(/* id 3, wireType 5 =*/29).fixed32(message.challenge_time);
            if (message.challenge != null && Object.hasOwnProperty.call(message, "challenge"))
                writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.challenge);
            if (message.client_cookie != null && Object.hasOwnProperty.call(message, "client_cookie"))
                writer.uint32(/* id 5, wireType 5 =*/45).fixed32(message.client_cookie);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramGameserverSessionRequest message, length delimited. Does not implicitly {@link CMsgSteamDatagramGameserverSessionRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramGameserverSessionRequest
         * @static
         * @param {ICMsgSteamDatagramGameserverSessionRequest} message CMsgSteamDatagramGameserverSessionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramGameserverSessionRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramGameserverSessionRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramGameserverSessionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramGameserverSessionRequest} CMsgSteamDatagramGameserverSessionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramGameserverSessionRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramGameserverSessionRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ticket = $root.CMsgSteamDatagramGameServerAuthTicket.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.challenge_time = reader.fixed32();
                    break;
                case 4:
                    message.challenge = reader.fixed64();
                    break;
                case 5:
                    message.client_cookie = reader.fixed32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramGameserverSessionRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramGameserverSessionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramGameserverSessionRequest} CMsgSteamDatagramGameserverSessionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramGameserverSessionRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramGameserverSessionRequest message.
         * @function verify
         * @memberof CMsgSteamDatagramGameserverSessionRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramGameserverSessionRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ticket != null && message.hasOwnProperty("ticket")) {
                var error = $root.CMsgSteamDatagramGameServerAuthTicket.verify(message.ticket);
                if (error)
                    return "ticket." + error;
            }
            if (message.challenge_time != null && message.hasOwnProperty("challenge_time"))
                if (!$util.isInteger(message.challenge_time))
                    return "challenge_time: integer expected";
            if (message.challenge != null && message.hasOwnProperty("challenge"))
                if (!$util.isInteger(message.challenge) && !(message.challenge && $util.isInteger(message.challenge.low) && $util.isInteger(message.challenge.high)))
                    return "challenge: integer|Long expected";
            if (message.client_cookie != null && message.hasOwnProperty("client_cookie"))
                if (!$util.isInteger(message.client_cookie))
                    return "client_cookie: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramGameserverSessionRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramGameserverSessionRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramGameserverSessionRequest} CMsgSteamDatagramGameserverSessionRequest
         */
        CMsgSteamDatagramGameserverSessionRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramGameserverSessionRequest)
                return object;
            var message = new $root.CMsgSteamDatagramGameserverSessionRequest();
            if (object.ticket != null) {
                if (typeof object.ticket !== "object")
                    throw TypeError(".CMsgSteamDatagramGameserverSessionRequest.ticket: object expected");
                message.ticket = $root.CMsgSteamDatagramGameServerAuthTicket.fromObject(object.ticket);
            }
            if (object.challenge_time != null)
                message.challenge_time = object.challenge_time >>> 0;
            if (object.challenge != null)
                if ($util.Long)
                    (message.challenge = $util.Long.fromValue(object.challenge)).unsigned = false;
                else if (typeof object.challenge === "string")
                    message.challenge = parseInt(object.challenge, 10);
                else if (typeof object.challenge === "number")
                    message.challenge = object.challenge;
                else if (typeof object.challenge === "object")
                    message.challenge = new $util.LongBits(object.challenge.low >>> 0, object.challenge.high >>> 0).toNumber();
            if (object.client_cookie != null)
                message.client_cookie = object.client_cookie >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramGameserverSessionRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramGameserverSessionRequest
         * @static
         * @param {CMsgSteamDatagramGameserverSessionRequest} message CMsgSteamDatagramGameserverSessionRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramGameserverSessionRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ticket = null;
                object.challenge_time = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.challenge = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.challenge = options.longs === String ? "0" : 0;
                object.client_cookie = 0;
            }
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                object.ticket = $root.CMsgSteamDatagramGameServerAuthTicket.toObject(message.ticket, options);
            if (message.challenge_time != null && message.hasOwnProperty("challenge_time"))
                object.challenge_time = message.challenge_time;
            if (message.challenge != null && message.hasOwnProperty("challenge"))
                if (typeof message.challenge === "number")
                    object.challenge = options.longs === String ? String(message.challenge) : message.challenge;
                else
                    object.challenge = options.longs === String ? $util.Long.prototype.toString.call(message.challenge) : options.longs === Number ? new $util.LongBits(message.challenge.low >>> 0, message.challenge.high >>> 0).toNumber() : message.challenge;
            if (message.client_cookie != null && message.hasOwnProperty("client_cookie"))
                object.client_cookie = message.client_cookie;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramGameserverSessionRequest to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramGameserverSessionRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramGameserverSessionRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramGameserverSessionRequest;
    })();
    
    $root.CMsgSteamDatagramGameserverSessionEstablished = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramGameserverSessionEstablished.
         * @exports ICMsgSteamDatagramGameserverSessionEstablished
         * @interface ICMsgSteamDatagramGameserverSessionEstablished
         * @property {number|null} [client_cookie] CMsgSteamDatagramGameserverSessionEstablished client_cookie
         * @property {number|Long|null} [gameserver_steam_id] CMsgSteamDatagramGameserverSessionEstablished gameserver_steam_id
         * @property {number|null} [seconds_until_shutdown] CMsgSteamDatagramGameserverSessionEstablished seconds_until_shutdown
         */
    
        /**
         * Constructs a new CMsgSteamDatagramGameserverSessionEstablished.
         * @exports CMsgSteamDatagramGameserverSessionEstablished
         * @classdesc Represents a CMsgSteamDatagramGameserverSessionEstablished.
         * @implements ICMsgSteamDatagramGameserverSessionEstablished
         * @constructor
         * @param {ICMsgSteamDatagramGameserverSessionEstablished=} [properties] Properties to set
         */
        function CMsgSteamDatagramGameserverSessionEstablished(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramGameserverSessionEstablished client_cookie.
         * @member {number} client_cookie
         * @memberof CMsgSteamDatagramGameserverSessionEstablished
         * @instance
         */
        CMsgSteamDatagramGameserverSessionEstablished.prototype.client_cookie = 0;
    
        /**
         * CMsgSteamDatagramGameserverSessionEstablished gameserver_steam_id.
         * @member {number|Long} gameserver_steam_id
         * @memberof CMsgSteamDatagramGameserverSessionEstablished
         * @instance
         */
        CMsgSteamDatagramGameserverSessionEstablished.prototype.gameserver_steam_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramGameserverSessionEstablished seconds_until_shutdown.
         * @member {number} seconds_until_shutdown
         * @memberof CMsgSteamDatagramGameserverSessionEstablished
         * @instance
         */
        CMsgSteamDatagramGameserverSessionEstablished.prototype.seconds_until_shutdown = 0;
    
        /**
         * Creates a new CMsgSteamDatagramGameserverSessionEstablished instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramGameserverSessionEstablished
         * @static
         * @param {ICMsgSteamDatagramGameserverSessionEstablished=} [properties] Properties to set
         * @returns {CMsgSteamDatagramGameserverSessionEstablished} CMsgSteamDatagramGameserverSessionEstablished instance
         */
        CMsgSteamDatagramGameserverSessionEstablished.create = function create(properties) {
            return new CMsgSteamDatagramGameserverSessionEstablished(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramGameserverSessionEstablished message. Does not implicitly {@link CMsgSteamDatagramGameserverSessionEstablished.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramGameserverSessionEstablished
         * @static
         * @param {ICMsgSteamDatagramGameserverSessionEstablished} message CMsgSteamDatagramGameserverSessionEstablished message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramGameserverSessionEstablished.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.client_cookie != null && Object.hasOwnProperty.call(message, "client_cookie"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.client_cookie);
            if (message.gameserver_steam_id != null && Object.hasOwnProperty.call(message, "gameserver_steam_id"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.gameserver_steam_id);
            if (message.seconds_until_shutdown != null && Object.hasOwnProperty.call(message, "seconds_until_shutdown"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.seconds_until_shutdown);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramGameserverSessionEstablished message, length delimited. Does not implicitly {@link CMsgSteamDatagramGameserverSessionEstablished.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramGameserverSessionEstablished
         * @static
         * @param {ICMsgSteamDatagramGameserverSessionEstablished} message CMsgSteamDatagramGameserverSessionEstablished message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramGameserverSessionEstablished.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramGameserverSessionEstablished message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramGameserverSessionEstablished
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramGameserverSessionEstablished} CMsgSteamDatagramGameserverSessionEstablished
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramGameserverSessionEstablished.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramGameserverSessionEstablished();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.client_cookie = reader.fixed32();
                    break;
                case 3:
                    message.gameserver_steam_id = reader.fixed64();
                    break;
                case 4:
                    message.seconds_until_shutdown = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramGameserverSessionEstablished message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramGameserverSessionEstablished
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramGameserverSessionEstablished} CMsgSteamDatagramGameserverSessionEstablished
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramGameserverSessionEstablished.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramGameserverSessionEstablished message.
         * @function verify
         * @memberof CMsgSteamDatagramGameserverSessionEstablished
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramGameserverSessionEstablished.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.client_cookie != null && message.hasOwnProperty("client_cookie"))
                if (!$util.isInteger(message.client_cookie))
                    return "client_cookie: integer expected";
            if (message.gameserver_steam_id != null && message.hasOwnProperty("gameserver_steam_id"))
                if (!$util.isInteger(message.gameserver_steam_id) && !(message.gameserver_steam_id && $util.isInteger(message.gameserver_steam_id.low) && $util.isInteger(message.gameserver_steam_id.high)))
                    return "gameserver_steam_id: integer|Long expected";
            if (message.seconds_until_shutdown != null && message.hasOwnProperty("seconds_until_shutdown"))
                if (!$util.isInteger(message.seconds_until_shutdown))
                    return "seconds_until_shutdown: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramGameserverSessionEstablished message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramGameserverSessionEstablished
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramGameserverSessionEstablished} CMsgSteamDatagramGameserverSessionEstablished
         */
        CMsgSteamDatagramGameserverSessionEstablished.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramGameserverSessionEstablished)
                return object;
            var message = new $root.CMsgSteamDatagramGameserverSessionEstablished();
            if (object.client_cookie != null)
                message.client_cookie = object.client_cookie >>> 0;
            if (object.gameserver_steam_id != null)
                if ($util.Long)
                    (message.gameserver_steam_id = $util.Long.fromValue(object.gameserver_steam_id)).unsigned = false;
                else if (typeof object.gameserver_steam_id === "string")
                    message.gameserver_steam_id = parseInt(object.gameserver_steam_id, 10);
                else if (typeof object.gameserver_steam_id === "number")
                    message.gameserver_steam_id = object.gameserver_steam_id;
                else if (typeof object.gameserver_steam_id === "object")
                    message.gameserver_steam_id = new $util.LongBits(object.gameserver_steam_id.low >>> 0, object.gameserver_steam_id.high >>> 0).toNumber();
            if (object.seconds_until_shutdown != null)
                message.seconds_until_shutdown = object.seconds_until_shutdown >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramGameserverSessionEstablished message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramGameserverSessionEstablished
         * @static
         * @param {CMsgSteamDatagramGameserverSessionEstablished} message CMsgSteamDatagramGameserverSessionEstablished
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramGameserverSessionEstablished.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.client_cookie = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gameserver_steam_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gameserver_steam_id = options.longs === String ? "0" : 0;
                object.seconds_until_shutdown = 0;
            }
            if (message.client_cookie != null && message.hasOwnProperty("client_cookie"))
                object.client_cookie = message.client_cookie;
            if (message.gameserver_steam_id != null && message.hasOwnProperty("gameserver_steam_id"))
                if (typeof message.gameserver_steam_id === "number")
                    object.gameserver_steam_id = options.longs === String ? String(message.gameserver_steam_id) : message.gameserver_steam_id;
                else
                    object.gameserver_steam_id = options.longs === String ? $util.Long.prototype.toString.call(message.gameserver_steam_id) : options.longs === Number ? new $util.LongBits(message.gameserver_steam_id.low >>> 0, message.gameserver_steam_id.high >>> 0).toNumber() : message.gameserver_steam_id;
            if (message.seconds_until_shutdown != null && message.hasOwnProperty("seconds_until_shutdown"))
                object.seconds_until_shutdown = message.seconds_until_shutdown;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramGameserverSessionEstablished to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramGameserverSessionEstablished
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramGameserverSessionEstablished.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramGameserverSessionEstablished;
    })();
    
    $root.CMsgSteamDatagramNoSession = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramNoSession.
         * @exports ICMsgSteamDatagramNoSession
         * @interface ICMsgSteamDatagramNoSession
         * @property {number|null} [client_cookie] CMsgSteamDatagramNoSession client_cookie
         * @property {number|null} [your_public_ip] CMsgSteamDatagramNoSession your_public_ip
         * @property {number|null} [server_time] CMsgSteamDatagramNoSession server_time
         * @property {number|Long|null} [challenge] CMsgSteamDatagramNoSession challenge
         * @property {number|null} [seconds_until_shutdown] CMsgSteamDatagramNoSession seconds_until_shutdown
         */
    
        /**
         * Constructs a new CMsgSteamDatagramNoSession.
         * @exports CMsgSteamDatagramNoSession
         * @classdesc Represents a CMsgSteamDatagramNoSession.
         * @implements ICMsgSteamDatagramNoSession
         * @constructor
         * @param {ICMsgSteamDatagramNoSession=} [properties] Properties to set
         */
        function CMsgSteamDatagramNoSession(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramNoSession client_cookie.
         * @member {number} client_cookie
         * @memberof CMsgSteamDatagramNoSession
         * @instance
         */
        CMsgSteamDatagramNoSession.prototype.client_cookie = 0;
    
        /**
         * CMsgSteamDatagramNoSession your_public_ip.
         * @member {number} your_public_ip
         * @memberof CMsgSteamDatagramNoSession
         * @instance
         */
        CMsgSteamDatagramNoSession.prototype.your_public_ip = 0;
    
        /**
         * CMsgSteamDatagramNoSession server_time.
         * @member {number} server_time
         * @memberof CMsgSteamDatagramNoSession
         * @instance
         */
        CMsgSteamDatagramNoSession.prototype.server_time = 0;
    
        /**
         * CMsgSteamDatagramNoSession challenge.
         * @member {number|Long} challenge
         * @memberof CMsgSteamDatagramNoSession
         * @instance
         */
        CMsgSteamDatagramNoSession.prototype.challenge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramNoSession seconds_until_shutdown.
         * @member {number} seconds_until_shutdown
         * @memberof CMsgSteamDatagramNoSession
         * @instance
         */
        CMsgSteamDatagramNoSession.prototype.seconds_until_shutdown = 0;
    
        /**
         * Creates a new CMsgSteamDatagramNoSession instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramNoSession
         * @static
         * @param {ICMsgSteamDatagramNoSession=} [properties] Properties to set
         * @returns {CMsgSteamDatagramNoSession} CMsgSteamDatagramNoSession instance
         */
        CMsgSteamDatagramNoSession.create = function create(properties) {
            return new CMsgSteamDatagramNoSession(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramNoSession message. Does not implicitly {@link CMsgSteamDatagramNoSession.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramNoSession
         * @static
         * @param {ICMsgSteamDatagramNoSession} message CMsgSteamDatagramNoSession message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramNoSession.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.your_public_ip != null && Object.hasOwnProperty.call(message, "your_public_ip"))
                writer.uint32(/* id 2, wireType 5 =*/21).fixed32(message.your_public_ip);
            if (message.server_time != null && Object.hasOwnProperty.call(message, "server_time"))
                writer.uint32(/* id 3, wireType 5 =*/29).fixed32(message.server_time);
            if (message.challenge != null && Object.hasOwnProperty.call(message, "challenge"))
                writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.challenge);
            if (message.seconds_until_shutdown != null && Object.hasOwnProperty.call(message, "seconds_until_shutdown"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.seconds_until_shutdown);
            if (message.client_cookie != null && Object.hasOwnProperty.call(message, "client_cookie"))
                writer.uint32(/* id 7, wireType 5 =*/61).fixed32(message.client_cookie);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramNoSession message, length delimited. Does not implicitly {@link CMsgSteamDatagramNoSession.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramNoSession
         * @static
         * @param {ICMsgSteamDatagramNoSession} message CMsgSteamDatagramNoSession message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramNoSession.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramNoSession message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramNoSession
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramNoSession} CMsgSteamDatagramNoSession
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramNoSession.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramNoSession();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 7:
                    message.client_cookie = reader.fixed32();
                    break;
                case 2:
                    message.your_public_ip = reader.fixed32();
                    break;
                case 3:
                    message.server_time = reader.fixed32();
                    break;
                case 4:
                    message.challenge = reader.fixed64();
                    break;
                case 5:
                    message.seconds_until_shutdown = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramNoSession message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramNoSession
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramNoSession} CMsgSteamDatagramNoSession
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramNoSession.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramNoSession message.
         * @function verify
         * @memberof CMsgSteamDatagramNoSession
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramNoSession.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.client_cookie != null && message.hasOwnProperty("client_cookie"))
                if (!$util.isInteger(message.client_cookie))
                    return "client_cookie: integer expected";
            if (message.your_public_ip != null && message.hasOwnProperty("your_public_ip"))
                if (!$util.isInteger(message.your_public_ip))
                    return "your_public_ip: integer expected";
            if (message.server_time != null && message.hasOwnProperty("server_time"))
                if (!$util.isInteger(message.server_time))
                    return "server_time: integer expected";
            if (message.challenge != null && message.hasOwnProperty("challenge"))
                if (!$util.isInteger(message.challenge) && !(message.challenge && $util.isInteger(message.challenge.low) && $util.isInteger(message.challenge.high)))
                    return "challenge: integer|Long expected";
            if (message.seconds_until_shutdown != null && message.hasOwnProperty("seconds_until_shutdown"))
                if (!$util.isInteger(message.seconds_until_shutdown))
                    return "seconds_until_shutdown: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramNoSession message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramNoSession
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramNoSession} CMsgSteamDatagramNoSession
         */
        CMsgSteamDatagramNoSession.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramNoSession)
                return object;
            var message = new $root.CMsgSteamDatagramNoSession();
            if (object.client_cookie != null)
                message.client_cookie = object.client_cookie >>> 0;
            if (object.your_public_ip != null)
                message.your_public_ip = object.your_public_ip >>> 0;
            if (object.server_time != null)
                message.server_time = object.server_time >>> 0;
            if (object.challenge != null)
                if ($util.Long)
                    (message.challenge = $util.Long.fromValue(object.challenge)).unsigned = false;
                else if (typeof object.challenge === "string")
                    message.challenge = parseInt(object.challenge, 10);
                else if (typeof object.challenge === "number")
                    message.challenge = object.challenge;
                else if (typeof object.challenge === "object")
                    message.challenge = new $util.LongBits(object.challenge.low >>> 0, object.challenge.high >>> 0).toNumber();
            if (object.seconds_until_shutdown != null)
                message.seconds_until_shutdown = object.seconds_until_shutdown >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramNoSession message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramNoSession
         * @static
         * @param {CMsgSteamDatagramNoSession} message CMsgSteamDatagramNoSession
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramNoSession.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.your_public_ip = 0;
                object.server_time = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.challenge = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.challenge = options.longs === String ? "0" : 0;
                object.seconds_until_shutdown = 0;
                object.client_cookie = 0;
            }
            if (message.your_public_ip != null && message.hasOwnProperty("your_public_ip"))
                object.your_public_ip = message.your_public_ip;
            if (message.server_time != null && message.hasOwnProperty("server_time"))
                object.server_time = message.server_time;
            if (message.challenge != null && message.hasOwnProperty("challenge"))
                if (typeof message.challenge === "number")
                    object.challenge = options.longs === String ? String(message.challenge) : message.challenge;
                else
                    object.challenge = options.longs === String ? $util.Long.prototype.toString.call(message.challenge) : options.longs === Number ? new $util.LongBits(message.challenge.low >>> 0, message.challenge.high >>> 0).toNumber() : message.challenge;
            if (message.seconds_until_shutdown != null && message.hasOwnProperty("seconds_until_shutdown"))
                object.seconds_until_shutdown = message.seconds_until_shutdown;
            if (message.client_cookie != null && message.hasOwnProperty("client_cookie"))
                object.client_cookie = message.client_cookie;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramNoSession to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramNoSession
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramNoSession.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramNoSession;
    })();
    
    $root.CMsgSteamDatagramDiagnostic = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramDiagnostic.
         * @exports ICMsgSteamDatagramDiagnostic
         * @interface ICMsgSteamDatagramDiagnostic
         * @property {number|null} [severity] CMsgSteamDatagramDiagnostic severity
         * @property {string|null} [text] CMsgSteamDatagramDiagnostic text
         */
    
        /**
         * Constructs a new CMsgSteamDatagramDiagnostic.
         * @exports CMsgSteamDatagramDiagnostic
         * @classdesc Represents a CMsgSteamDatagramDiagnostic.
         * @implements ICMsgSteamDatagramDiagnostic
         * @constructor
         * @param {ICMsgSteamDatagramDiagnostic=} [properties] Properties to set
         */
        function CMsgSteamDatagramDiagnostic(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramDiagnostic severity.
         * @member {number} severity
         * @memberof CMsgSteamDatagramDiagnostic
         * @instance
         */
        CMsgSteamDatagramDiagnostic.prototype.severity = 0;
    
        /**
         * CMsgSteamDatagramDiagnostic text.
         * @member {string} text
         * @memberof CMsgSteamDatagramDiagnostic
         * @instance
         */
        CMsgSteamDatagramDiagnostic.prototype.text = "";
    
        /**
         * Creates a new CMsgSteamDatagramDiagnostic instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {ICMsgSteamDatagramDiagnostic=} [properties] Properties to set
         * @returns {CMsgSteamDatagramDiagnostic} CMsgSteamDatagramDiagnostic instance
         */
        CMsgSteamDatagramDiagnostic.create = function create(properties) {
            return new CMsgSteamDatagramDiagnostic(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramDiagnostic message. Does not implicitly {@link CMsgSteamDatagramDiagnostic.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {ICMsgSteamDatagramDiagnostic} message CMsgSteamDatagramDiagnostic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramDiagnostic.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.severity != null && Object.hasOwnProperty.call(message, "severity"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.severity);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramDiagnostic message, length delimited. Does not implicitly {@link CMsgSteamDatagramDiagnostic.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {ICMsgSteamDatagramDiagnostic} message CMsgSteamDatagramDiagnostic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramDiagnostic.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramDiagnostic message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramDiagnostic} CMsgSteamDatagramDiagnostic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramDiagnostic.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramDiagnostic();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.severity = reader.uint32();
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramDiagnostic message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramDiagnostic} CMsgSteamDatagramDiagnostic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramDiagnostic.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramDiagnostic message.
         * @function verify
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramDiagnostic.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.severity != null && message.hasOwnProperty("severity"))
                if (!$util.isInteger(message.severity))
                    return "severity: integer expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramDiagnostic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramDiagnostic} CMsgSteamDatagramDiagnostic
         */
        CMsgSteamDatagramDiagnostic.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramDiagnostic)
                return object;
            var message = new $root.CMsgSteamDatagramDiagnostic();
            if (object.severity != null)
                message.severity = object.severity >>> 0;
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramDiagnostic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {CMsgSteamDatagramDiagnostic} message CMsgSteamDatagramDiagnostic
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramDiagnostic.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.severity = 0;
                object.text = "";
            }
            if (message.severity != null && message.hasOwnProperty("severity"))
                object.severity = message.severity;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramDiagnostic to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramDiagnostic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramDiagnostic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramDiagnostic;
    })();
    
    $root.CMsgSteamDatagramDataCenterState = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramDataCenterState.
         * @exports ICMsgSteamDatagramDataCenterState
         * @interface ICMsgSteamDatagramDataCenterState
         * @property {Array.<CMsgSteamDatagramDataCenterState.IDataCenter>|null} [data_centers] CMsgSteamDatagramDataCenterState data_centers
         */
    
        /**
         * Constructs a new CMsgSteamDatagramDataCenterState.
         * @exports CMsgSteamDatagramDataCenterState
         * @classdesc Represents a CMsgSteamDatagramDataCenterState.
         * @implements ICMsgSteamDatagramDataCenterState
         * @constructor
         * @param {ICMsgSteamDatagramDataCenterState=} [properties] Properties to set
         */
        function CMsgSteamDatagramDataCenterState(properties) {
            this.data_centers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramDataCenterState data_centers.
         * @member {Array.<CMsgSteamDatagramDataCenterState.IDataCenter>} data_centers
         * @memberof CMsgSteamDatagramDataCenterState
         * @instance
         */
        CMsgSteamDatagramDataCenterState.prototype.data_centers = $util.emptyArray;
    
        /**
         * Creates a new CMsgSteamDatagramDataCenterState instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramDataCenterState
         * @static
         * @param {ICMsgSteamDatagramDataCenterState=} [properties] Properties to set
         * @returns {CMsgSteamDatagramDataCenterState} CMsgSteamDatagramDataCenterState instance
         */
        CMsgSteamDatagramDataCenterState.create = function create(properties) {
            return new CMsgSteamDatagramDataCenterState(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramDataCenterState message. Does not implicitly {@link CMsgSteamDatagramDataCenterState.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramDataCenterState
         * @static
         * @param {ICMsgSteamDatagramDataCenterState} message CMsgSteamDatagramDataCenterState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramDataCenterState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data_centers != null && message.data_centers.length)
                for (var i = 0; i < message.data_centers.length; ++i)
                    $root.CMsgSteamDatagramDataCenterState.DataCenter.encode(message.data_centers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramDataCenterState message, length delimited. Does not implicitly {@link CMsgSteamDatagramDataCenterState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramDataCenterState
         * @static
         * @param {ICMsgSteamDatagramDataCenterState} message CMsgSteamDatagramDataCenterState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramDataCenterState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramDataCenterState message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramDataCenterState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramDataCenterState} CMsgSteamDatagramDataCenterState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramDataCenterState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramDataCenterState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.data_centers && message.data_centers.length))
                        message.data_centers = [];
                    message.data_centers.push($root.CMsgSteamDatagramDataCenterState.DataCenter.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramDataCenterState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramDataCenterState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramDataCenterState} CMsgSteamDatagramDataCenterState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramDataCenterState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramDataCenterState message.
         * @function verify
         * @memberof CMsgSteamDatagramDataCenterState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramDataCenterState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data_centers != null && message.hasOwnProperty("data_centers")) {
                if (!Array.isArray(message.data_centers))
                    return "data_centers: array expected";
                for (var i = 0; i < message.data_centers.length; ++i) {
                    var error = $root.CMsgSteamDatagramDataCenterState.DataCenter.verify(message.data_centers[i]);
                    if (error)
                        return "data_centers." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramDataCenterState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramDataCenterState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramDataCenterState} CMsgSteamDatagramDataCenterState
         */
        CMsgSteamDatagramDataCenterState.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramDataCenterState)
                return object;
            var message = new $root.CMsgSteamDatagramDataCenterState();
            if (object.data_centers) {
                if (!Array.isArray(object.data_centers))
                    throw TypeError(".CMsgSteamDatagramDataCenterState.data_centers: array expected");
                message.data_centers = [];
                for (var i = 0; i < object.data_centers.length; ++i) {
                    if (typeof object.data_centers[i] !== "object")
                        throw TypeError(".CMsgSteamDatagramDataCenterState.data_centers: object expected");
                    message.data_centers[i] = $root.CMsgSteamDatagramDataCenterState.DataCenter.fromObject(object.data_centers[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramDataCenterState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramDataCenterState
         * @static
         * @param {CMsgSteamDatagramDataCenterState} message CMsgSteamDatagramDataCenterState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramDataCenterState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data_centers = [];
            if (message.data_centers && message.data_centers.length) {
                object.data_centers = [];
                for (var j = 0; j < message.data_centers.length; ++j)
                    object.data_centers[j] = $root.CMsgSteamDatagramDataCenterState.DataCenter.toObject(message.data_centers[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramDataCenterState to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramDataCenterState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramDataCenterState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgSteamDatagramDataCenterState.Server = (function() {
    
            /**
             * Properties of a Server.
             * @memberof CMsgSteamDatagramDataCenterState
             * @interface IServer
             * @property {string|null} [address] Server address
             * @property {number|null} [ping_ms] Server ping_ms
             */
    
            /**
             * Constructs a new Server.
             * @memberof CMsgSteamDatagramDataCenterState
             * @classdesc Represents a Server.
             * @implements IServer
             * @constructor
             * @param {CMsgSteamDatagramDataCenterState.IServer=} [properties] Properties to set
             */
            function Server(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Server address.
             * @member {string} address
             * @memberof CMsgSteamDatagramDataCenterState.Server
             * @instance
             */
            Server.prototype.address = "";
    
            /**
             * Server ping_ms.
             * @member {number} ping_ms
             * @memberof CMsgSteamDatagramDataCenterState.Server
             * @instance
             */
            Server.prototype.ping_ms = 0;
    
            /**
             * Creates a new Server instance using the specified properties.
             * @function create
             * @memberof CMsgSteamDatagramDataCenterState.Server
             * @static
             * @param {CMsgSteamDatagramDataCenterState.IServer=} [properties] Properties to set
             * @returns {CMsgSteamDatagramDataCenterState.Server} Server instance
             */
            Server.create = function create(properties) {
                return new Server(properties);
            };
    
            /**
             * Encodes the specified Server message. Does not implicitly {@link CMsgSteamDatagramDataCenterState.Server.verify|verify} messages.
             * @function encode
             * @memberof CMsgSteamDatagramDataCenterState.Server
             * @static
             * @param {CMsgSteamDatagramDataCenterState.IServer} message Server message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Server.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.address);
                if (message.ping_ms != null && Object.hasOwnProperty.call(message, "ping_ms"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.ping_ms);
                return writer;
            };
    
            /**
             * Encodes the specified Server message, length delimited. Does not implicitly {@link CMsgSteamDatagramDataCenterState.Server.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgSteamDatagramDataCenterState.Server
             * @static
             * @param {CMsgSteamDatagramDataCenterState.IServer} message Server message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Server.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Server message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgSteamDatagramDataCenterState.Server
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgSteamDatagramDataCenterState.Server} Server
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Server.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramDataCenterState.Server();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.address = reader.string();
                        break;
                    case 2:
                        message.ping_ms = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Server message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgSteamDatagramDataCenterState.Server
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgSteamDatagramDataCenterState.Server} Server
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Server.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Server message.
             * @function verify
             * @memberof CMsgSteamDatagramDataCenterState.Server
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Server.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.address != null && message.hasOwnProperty("address"))
                    if (!$util.isString(message.address))
                        return "address: string expected";
                if (message.ping_ms != null && message.hasOwnProperty("ping_ms"))
                    if (!$util.isInteger(message.ping_ms))
                        return "ping_ms: integer expected";
                return null;
            };
    
            /**
             * Creates a Server message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgSteamDatagramDataCenterState.Server
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgSteamDatagramDataCenterState.Server} Server
             */
            Server.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgSteamDatagramDataCenterState.Server)
                    return object;
                var message = new $root.CMsgSteamDatagramDataCenterState.Server();
                if (object.address != null)
                    message.address = String(object.address);
                if (object.ping_ms != null)
                    message.ping_ms = object.ping_ms >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Server message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgSteamDatagramDataCenterState.Server
             * @static
             * @param {CMsgSteamDatagramDataCenterState.Server} message Server
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Server.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.address = "";
                    object.ping_ms = 0;
                }
                if (message.address != null && message.hasOwnProperty("address"))
                    object.address = message.address;
                if (message.ping_ms != null && message.hasOwnProperty("ping_ms"))
                    object.ping_ms = message.ping_ms;
                return object;
            };
    
            /**
             * Converts this Server to JSON.
             * @function toJSON
             * @memberof CMsgSteamDatagramDataCenterState.Server
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Server.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Server;
        })();
    
        CMsgSteamDatagramDataCenterState.DataCenter = (function() {
    
            /**
             * Properties of a DataCenter.
             * @memberof CMsgSteamDatagramDataCenterState
             * @interface IDataCenter
             * @property {string|null} [code] DataCenter code
             * @property {Array.<CMsgSteamDatagramDataCenterState.IServer>|null} [server_sample] DataCenter server_sample
             */
    
            /**
             * Constructs a new DataCenter.
             * @memberof CMsgSteamDatagramDataCenterState
             * @classdesc Represents a DataCenter.
             * @implements IDataCenter
             * @constructor
             * @param {CMsgSteamDatagramDataCenterState.IDataCenter=} [properties] Properties to set
             */
            function DataCenter(properties) {
                this.server_sample = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DataCenter code.
             * @member {string} code
             * @memberof CMsgSteamDatagramDataCenterState.DataCenter
             * @instance
             */
            DataCenter.prototype.code = "";
    
            /**
             * DataCenter server_sample.
             * @member {Array.<CMsgSteamDatagramDataCenterState.IServer>} server_sample
             * @memberof CMsgSteamDatagramDataCenterState.DataCenter
             * @instance
             */
            DataCenter.prototype.server_sample = $util.emptyArray;
    
            /**
             * Creates a new DataCenter instance using the specified properties.
             * @function create
             * @memberof CMsgSteamDatagramDataCenterState.DataCenter
             * @static
             * @param {CMsgSteamDatagramDataCenterState.IDataCenter=} [properties] Properties to set
             * @returns {CMsgSteamDatagramDataCenterState.DataCenter} DataCenter instance
             */
            DataCenter.create = function create(properties) {
                return new DataCenter(properties);
            };
    
            /**
             * Encodes the specified DataCenter message. Does not implicitly {@link CMsgSteamDatagramDataCenterState.DataCenter.verify|verify} messages.
             * @function encode
             * @memberof CMsgSteamDatagramDataCenterState.DataCenter
             * @static
             * @param {CMsgSteamDatagramDataCenterState.IDataCenter} message DataCenter message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DataCenter.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
                if (message.server_sample != null && message.server_sample.length)
                    for (var i = 0; i < message.server_sample.length; ++i)
                        $root.CMsgSteamDatagramDataCenterState.Server.encode(message.server_sample[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified DataCenter message, length delimited. Does not implicitly {@link CMsgSteamDatagramDataCenterState.DataCenter.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgSteamDatagramDataCenterState.DataCenter
             * @static
             * @param {CMsgSteamDatagramDataCenterState.IDataCenter} message DataCenter message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DataCenter.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DataCenter message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgSteamDatagramDataCenterState.DataCenter
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgSteamDatagramDataCenterState.DataCenter} DataCenter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DataCenter.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramDataCenterState.DataCenter();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.string();
                        break;
                    case 2:
                        if (!(message.server_sample && message.server_sample.length))
                            message.server_sample = [];
                        message.server_sample.push($root.CMsgSteamDatagramDataCenterState.Server.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DataCenter message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgSteamDatagramDataCenterState.DataCenter
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgSteamDatagramDataCenterState.DataCenter} DataCenter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DataCenter.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DataCenter message.
             * @function verify
             * @memberof CMsgSteamDatagramDataCenterState.DataCenter
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DataCenter.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isString(message.code))
                        return "code: string expected";
                if (message.server_sample != null && message.hasOwnProperty("server_sample")) {
                    if (!Array.isArray(message.server_sample))
                        return "server_sample: array expected";
                    for (var i = 0; i < message.server_sample.length; ++i) {
                        var error = $root.CMsgSteamDatagramDataCenterState.Server.verify(message.server_sample[i]);
                        if (error)
                            return "server_sample." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a DataCenter message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgSteamDatagramDataCenterState.DataCenter
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgSteamDatagramDataCenterState.DataCenter} DataCenter
             */
            DataCenter.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgSteamDatagramDataCenterState.DataCenter)
                    return object;
                var message = new $root.CMsgSteamDatagramDataCenterState.DataCenter();
                if (object.code != null)
                    message.code = String(object.code);
                if (object.server_sample) {
                    if (!Array.isArray(object.server_sample))
                        throw TypeError(".CMsgSteamDatagramDataCenterState.DataCenter.server_sample: array expected");
                    message.server_sample = [];
                    for (var i = 0; i < object.server_sample.length; ++i) {
                        if (typeof object.server_sample[i] !== "object")
                            throw TypeError(".CMsgSteamDatagramDataCenterState.DataCenter.server_sample: object expected");
                        message.server_sample[i] = $root.CMsgSteamDatagramDataCenterState.Server.fromObject(object.server_sample[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a DataCenter message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgSteamDatagramDataCenterState.DataCenter
             * @static
             * @param {CMsgSteamDatagramDataCenterState.DataCenter} message DataCenter
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DataCenter.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.server_sample = [];
                if (options.defaults)
                    object.code = "";
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.server_sample && message.server_sample.length) {
                    object.server_sample = [];
                    for (var j = 0; j < message.server_sample.length; ++j)
                        object.server_sample[j] = $root.CMsgSteamDatagramDataCenterState.Server.toObject(message.server_sample[j], options);
                }
                return object;
            };
    
            /**
             * Converts this DataCenter to JSON.
             * @function toJSON
             * @memberof CMsgSteamDatagramDataCenterState.DataCenter
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DataCenter.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DataCenter;
        })();
    
        return CMsgSteamDatagramDataCenterState;
    })();
    
    $root.CMsgSteamDatagramLinkInstantaneousStats = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramLinkInstantaneousStats.
         * @exports ICMsgSteamDatagramLinkInstantaneousStats
         * @interface ICMsgSteamDatagramLinkInstantaneousStats
         * @property {number|null} [out_packets_per_sec_x10] CMsgSteamDatagramLinkInstantaneousStats out_packets_per_sec_x10
         * @property {number|null} [out_bytes_per_sec] CMsgSteamDatagramLinkInstantaneousStats out_bytes_per_sec
         * @property {number|null} [in_packets_per_sec_x10] CMsgSteamDatagramLinkInstantaneousStats in_packets_per_sec_x10
         * @property {number|null} [in_bytes_per_sec] CMsgSteamDatagramLinkInstantaneousStats in_bytes_per_sec
         * @property {number|null} [ping_ms] CMsgSteamDatagramLinkInstantaneousStats ping_ms
         * @property {number|null} [packets_dropped_pct] CMsgSteamDatagramLinkInstantaneousStats packets_dropped_pct
         * @property {number|null} [packets_weird_sequence_pct] CMsgSteamDatagramLinkInstantaneousStats packets_weird_sequence_pct
         */
    
        /**
         * Constructs a new CMsgSteamDatagramLinkInstantaneousStats.
         * @exports CMsgSteamDatagramLinkInstantaneousStats
         * @classdesc Represents a CMsgSteamDatagramLinkInstantaneousStats.
         * @implements ICMsgSteamDatagramLinkInstantaneousStats
         * @constructor
         * @param {ICMsgSteamDatagramLinkInstantaneousStats=} [properties] Properties to set
         */
        function CMsgSteamDatagramLinkInstantaneousStats(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats out_packets_per_sec_x10.
         * @member {number} out_packets_per_sec_x10
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.out_packets_per_sec_x10 = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats out_bytes_per_sec.
         * @member {number} out_bytes_per_sec
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.out_bytes_per_sec = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats in_packets_per_sec_x10.
         * @member {number} in_packets_per_sec_x10
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.in_packets_per_sec_x10 = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats in_bytes_per_sec.
         * @member {number} in_bytes_per_sec
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.in_bytes_per_sec = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats ping_ms.
         * @member {number} ping_ms
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.ping_ms = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats packets_dropped_pct.
         * @member {number} packets_dropped_pct
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.packets_dropped_pct = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats packets_weird_sequence_pct.
         * @member {number} packets_weird_sequence_pct
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.packets_weird_sequence_pct = 0;
    
        /**
         * Creates a new CMsgSteamDatagramLinkInstantaneousStats instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {ICMsgSteamDatagramLinkInstantaneousStats=} [properties] Properties to set
         * @returns {CMsgSteamDatagramLinkInstantaneousStats} CMsgSteamDatagramLinkInstantaneousStats instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.create = function create(properties) {
            return new CMsgSteamDatagramLinkInstantaneousStats(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramLinkInstantaneousStats message. Does not implicitly {@link CMsgSteamDatagramLinkInstantaneousStats.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {ICMsgSteamDatagramLinkInstantaneousStats} message CMsgSteamDatagramLinkInstantaneousStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramLinkInstantaneousStats.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.out_packets_per_sec_x10 != null && Object.hasOwnProperty.call(message, "out_packets_per_sec_x10"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.out_packets_per_sec_x10);
            if (message.out_bytes_per_sec != null && Object.hasOwnProperty.call(message, "out_bytes_per_sec"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.out_bytes_per_sec);
            if (message.in_packets_per_sec_x10 != null && Object.hasOwnProperty.call(message, "in_packets_per_sec_x10"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.in_packets_per_sec_x10);
            if (message.in_bytes_per_sec != null && Object.hasOwnProperty.call(message, "in_bytes_per_sec"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.in_bytes_per_sec);
            if (message.ping_ms != null && Object.hasOwnProperty.call(message, "ping_ms"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.ping_ms);
            if (message.packets_dropped_pct != null && Object.hasOwnProperty.call(message, "packets_dropped_pct"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.packets_dropped_pct);
            if (message.packets_weird_sequence_pct != null && Object.hasOwnProperty.call(message, "packets_weird_sequence_pct"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.packets_weird_sequence_pct);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramLinkInstantaneousStats message, length delimited. Does not implicitly {@link CMsgSteamDatagramLinkInstantaneousStats.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {ICMsgSteamDatagramLinkInstantaneousStats} message CMsgSteamDatagramLinkInstantaneousStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramLinkInstantaneousStats.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramLinkInstantaneousStats message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramLinkInstantaneousStats} CMsgSteamDatagramLinkInstantaneousStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramLinkInstantaneousStats.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramLinkInstantaneousStats();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.out_packets_per_sec_x10 = reader.uint32();
                    break;
                case 2:
                    message.out_bytes_per_sec = reader.uint32();
                    break;
                case 3:
                    message.in_packets_per_sec_x10 = reader.uint32();
                    break;
                case 4:
                    message.in_bytes_per_sec = reader.uint32();
                    break;
                case 5:
                    message.ping_ms = reader.uint32();
                    break;
                case 6:
                    message.packets_dropped_pct = reader.uint32();
                    break;
                case 7:
                    message.packets_weird_sequence_pct = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramLinkInstantaneousStats message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramLinkInstantaneousStats} CMsgSteamDatagramLinkInstantaneousStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramLinkInstantaneousStats.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramLinkInstantaneousStats message.
         * @function verify
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramLinkInstantaneousStats.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.out_packets_per_sec_x10 != null && message.hasOwnProperty("out_packets_per_sec_x10"))
                if (!$util.isInteger(message.out_packets_per_sec_x10))
                    return "out_packets_per_sec_x10: integer expected";
            if (message.out_bytes_per_sec != null && message.hasOwnProperty("out_bytes_per_sec"))
                if (!$util.isInteger(message.out_bytes_per_sec))
                    return "out_bytes_per_sec: integer expected";
            if (message.in_packets_per_sec_x10 != null && message.hasOwnProperty("in_packets_per_sec_x10"))
                if (!$util.isInteger(message.in_packets_per_sec_x10))
                    return "in_packets_per_sec_x10: integer expected";
            if (message.in_bytes_per_sec != null && message.hasOwnProperty("in_bytes_per_sec"))
                if (!$util.isInteger(message.in_bytes_per_sec))
                    return "in_bytes_per_sec: integer expected";
            if (message.ping_ms != null && message.hasOwnProperty("ping_ms"))
                if (!$util.isInteger(message.ping_ms))
                    return "ping_ms: integer expected";
            if (message.packets_dropped_pct != null && message.hasOwnProperty("packets_dropped_pct"))
                if (!$util.isInteger(message.packets_dropped_pct))
                    return "packets_dropped_pct: integer expected";
            if (message.packets_weird_sequence_pct != null && message.hasOwnProperty("packets_weird_sequence_pct"))
                if (!$util.isInteger(message.packets_weird_sequence_pct))
                    return "packets_weird_sequence_pct: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramLinkInstantaneousStats message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramLinkInstantaneousStats} CMsgSteamDatagramLinkInstantaneousStats
         */
        CMsgSteamDatagramLinkInstantaneousStats.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramLinkInstantaneousStats)
                return object;
            var message = new $root.CMsgSteamDatagramLinkInstantaneousStats();
            if (object.out_packets_per_sec_x10 != null)
                message.out_packets_per_sec_x10 = object.out_packets_per_sec_x10 >>> 0;
            if (object.out_bytes_per_sec != null)
                message.out_bytes_per_sec = object.out_bytes_per_sec >>> 0;
            if (object.in_packets_per_sec_x10 != null)
                message.in_packets_per_sec_x10 = object.in_packets_per_sec_x10 >>> 0;
            if (object.in_bytes_per_sec != null)
                message.in_bytes_per_sec = object.in_bytes_per_sec >>> 0;
            if (object.ping_ms != null)
                message.ping_ms = object.ping_ms >>> 0;
            if (object.packets_dropped_pct != null)
                message.packets_dropped_pct = object.packets_dropped_pct >>> 0;
            if (object.packets_weird_sequence_pct != null)
                message.packets_weird_sequence_pct = object.packets_weird_sequence_pct >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramLinkInstantaneousStats message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {CMsgSteamDatagramLinkInstantaneousStats} message CMsgSteamDatagramLinkInstantaneousStats
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramLinkInstantaneousStats.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.out_packets_per_sec_x10 = 0;
                object.out_bytes_per_sec = 0;
                object.in_packets_per_sec_x10 = 0;
                object.in_bytes_per_sec = 0;
                object.ping_ms = 0;
                object.packets_dropped_pct = 0;
                object.packets_weird_sequence_pct = 0;
            }
            if (message.out_packets_per_sec_x10 != null && message.hasOwnProperty("out_packets_per_sec_x10"))
                object.out_packets_per_sec_x10 = message.out_packets_per_sec_x10;
            if (message.out_bytes_per_sec != null && message.hasOwnProperty("out_bytes_per_sec"))
                object.out_bytes_per_sec = message.out_bytes_per_sec;
            if (message.in_packets_per_sec_x10 != null && message.hasOwnProperty("in_packets_per_sec_x10"))
                object.in_packets_per_sec_x10 = message.in_packets_per_sec_x10;
            if (message.in_bytes_per_sec != null && message.hasOwnProperty("in_bytes_per_sec"))
                object.in_bytes_per_sec = message.in_bytes_per_sec;
            if (message.ping_ms != null && message.hasOwnProperty("ping_ms"))
                object.ping_ms = message.ping_ms;
            if (message.packets_dropped_pct != null && message.hasOwnProperty("packets_dropped_pct"))
                object.packets_dropped_pct = message.packets_dropped_pct;
            if (message.packets_weird_sequence_pct != null && message.hasOwnProperty("packets_weird_sequence_pct"))
                object.packets_weird_sequence_pct = message.packets_weird_sequence_pct;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramLinkInstantaneousStats to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramLinkInstantaneousStats;
    })();
    
    $root.CMsgSteamDatagramLinkLifetimeStats = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramLinkLifetimeStats.
         * @exports ICMsgSteamDatagramLinkLifetimeStats
         * @interface ICMsgSteamDatagramLinkLifetimeStats
         * @property {number|Long|null} [packets_sent] CMsgSteamDatagramLinkLifetimeStats packets_sent
         * @property {number|Long|null} [kb_sent] CMsgSteamDatagramLinkLifetimeStats kb_sent
         * @property {number|Long|null} [packets_recv] CMsgSteamDatagramLinkLifetimeStats packets_recv
         * @property {number|Long|null} [kb_recv] CMsgSteamDatagramLinkLifetimeStats kb_recv
         * @property {number|Long|null} [packets_recv_sequenced] CMsgSteamDatagramLinkLifetimeStats packets_recv_sequenced
         * @property {number|Long|null} [packets_recv_dropped] CMsgSteamDatagramLinkLifetimeStats packets_recv_dropped
         * @property {number|Long|null} [packets_recv_out_of_order] CMsgSteamDatagramLinkLifetimeStats packets_recv_out_of_order
         * @property {number|Long|null} [packets_recv_duplicate] CMsgSteamDatagramLinkLifetimeStats packets_recv_duplicate
         * @property {number|Long|null} [packets_recv_lurch] CMsgSteamDatagramLinkLifetimeStats packets_recv_lurch
         */
    
        /**
         * Constructs a new CMsgSteamDatagramLinkLifetimeStats.
         * @exports CMsgSteamDatagramLinkLifetimeStats
         * @classdesc Represents a CMsgSteamDatagramLinkLifetimeStats.
         * @implements ICMsgSteamDatagramLinkLifetimeStats
         * @constructor
         * @param {ICMsgSteamDatagramLinkLifetimeStats=} [properties] Properties to set
         */
        function CMsgSteamDatagramLinkLifetimeStats(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packets_sent.
         * @member {number|Long} packets_sent
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packets_sent = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats kb_sent.
         * @member {number|Long} kb_sent
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.kb_sent = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packets_recv.
         * @member {number|Long} packets_recv
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packets_recv = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats kb_recv.
         * @member {number|Long} kb_recv
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.kb_recv = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packets_recv_sequenced.
         * @member {number|Long} packets_recv_sequenced
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packets_recv_sequenced = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packets_recv_dropped.
         * @member {number|Long} packets_recv_dropped
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packets_recv_dropped = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packets_recv_out_of_order.
         * @member {number|Long} packets_recv_out_of_order
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packets_recv_out_of_order = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packets_recv_duplicate.
         * @member {number|Long} packets_recv_duplicate
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packets_recv_duplicate = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packets_recv_lurch.
         * @member {number|Long} packets_recv_lurch
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packets_recv_lurch = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CMsgSteamDatagramLinkLifetimeStats instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {ICMsgSteamDatagramLinkLifetimeStats=} [properties] Properties to set
         * @returns {CMsgSteamDatagramLinkLifetimeStats} CMsgSteamDatagramLinkLifetimeStats instance
         */
        CMsgSteamDatagramLinkLifetimeStats.create = function create(properties) {
            return new CMsgSteamDatagramLinkLifetimeStats(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramLinkLifetimeStats message. Does not implicitly {@link CMsgSteamDatagramLinkLifetimeStats.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {ICMsgSteamDatagramLinkLifetimeStats} message CMsgSteamDatagramLinkLifetimeStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramLinkLifetimeStats.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.packets_sent != null && Object.hasOwnProperty.call(message, "packets_sent"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.packets_sent);
            if (message.kb_sent != null && Object.hasOwnProperty.call(message, "kb_sent"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.kb_sent);
            if (message.packets_recv != null && Object.hasOwnProperty.call(message, "packets_recv"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.packets_recv);
            if (message.kb_recv != null && Object.hasOwnProperty.call(message, "kb_recv"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.kb_recv);
            if (message.packets_recv_sequenced != null && Object.hasOwnProperty.call(message, "packets_recv_sequenced"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.packets_recv_sequenced);
            if (message.packets_recv_dropped != null && Object.hasOwnProperty.call(message, "packets_recv_dropped"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.packets_recv_dropped);
            if (message.packets_recv_out_of_order != null && Object.hasOwnProperty.call(message, "packets_recv_out_of_order"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.packets_recv_out_of_order);
            if (message.packets_recv_duplicate != null && Object.hasOwnProperty.call(message, "packets_recv_duplicate"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.packets_recv_duplicate);
            if (message.packets_recv_lurch != null && Object.hasOwnProperty.call(message, "packets_recv_lurch"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.packets_recv_lurch);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramLinkLifetimeStats message, length delimited. Does not implicitly {@link CMsgSteamDatagramLinkLifetimeStats.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {ICMsgSteamDatagramLinkLifetimeStats} message CMsgSteamDatagramLinkLifetimeStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramLinkLifetimeStats.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramLinkLifetimeStats message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramLinkLifetimeStats} CMsgSteamDatagramLinkLifetimeStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramLinkLifetimeStats.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramLinkLifetimeStats();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 3:
                    message.packets_sent = reader.uint64();
                    break;
                case 4:
                    message.kb_sent = reader.uint64();
                    break;
                case 5:
                    message.packets_recv = reader.uint64();
                    break;
                case 6:
                    message.kb_recv = reader.uint64();
                    break;
                case 7:
                    message.packets_recv_sequenced = reader.uint64();
                    break;
                case 8:
                    message.packets_recv_dropped = reader.uint64();
                    break;
                case 9:
                    message.packets_recv_out_of_order = reader.uint64();
                    break;
                case 10:
                    message.packets_recv_duplicate = reader.uint64();
                    break;
                case 11:
                    message.packets_recv_lurch = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramLinkLifetimeStats message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramLinkLifetimeStats} CMsgSteamDatagramLinkLifetimeStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramLinkLifetimeStats.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramLinkLifetimeStats message.
         * @function verify
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramLinkLifetimeStats.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.packets_sent != null && message.hasOwnProperty("packets_sent"))
                if (!$util.isInteger(message.packets_sent) && !(message.packets_sent && $util.isInteger(message.packets_sent.low) && $util.isInteger(message.packets_sent.high)))
                    return "packets_sent: integer|Long expected";
            if (message.kb_sent != null && message.hasOwnProperty("kb_sent"))
                if (!$util.isInteger(message.kb_sent) && !(message.kb_sent && $util.isInteger(message.kb_sent.low) && $util.isInteger(message.kb_sent.high)))
                    return "kb_sent: integer|Long expected";
            if (message.packets_recv != null && message.hasOwnProperty("packets_recv"))
                if (!$util.isInteger(message.packets_recv) && !(message.packets_recv && $util.isInteger(message.packets_recv.low) && $util.isInteger(message.packets_recv.high)))
                    return "packets_recv: integer|Long expected";
            if (message.kb_recv != null && message.hasOwnProperty("kb_recv"))
                if (!$util.isInteger(message.kb_recv) && !(message.kb_recv && $util.isInteger(message.kb_recv.low) && $util.isInteger(message.kb_recv.high)))
                    return "kb_recv: integer|Long expected";
            if (message.packets_recv_sequenced != null && message.hasOwnProperty("packets_recv_sequenced"))
                if (!$util.isInteger(message.packets_recv_sequenced) && !(message.packets_recv_sequenced && $util.isInteger(message.packets_recv_sequenced.low) && $util.isInteger(message.packets_recv_sequenced.high)))
                    return "packets_recv_sequenced: integer|Long expected";
            if (message.packets_recv_dropped != null && message.hasOwnProperty("packets_recv_dropped"))
                if (!$util.isInteger(message.packets_recv_dropped) && !(message.packets_recv_dropped && $util.isInteger(message.packets_recv_dropped.low) && $util.isInteger(message.packets_recv_dropped.high)))
                    return "packets_recv_dropped: integer|Long expected";
            if (message.packets_recv_out_of_order != null && message.hasOwnProperty("packets_recv_out_of_order"))
                if (!$util.isInteger(message.packets_recv_out_of_order) && !(message.packets_recv_out_of_order && $util.isInteger(message.packets_recv_out_of_order.low) && $util.isInteger(message.packets_recv_out_of_order.high)))
                    return "packets_recv_out_of_order: integer|Long expected";
            if (message.packets_recv_duplicate != null && message.hasOwnProperty("packets_recv_duplicate"))
                if (!$util.isInteger(message.packets_recv_duplicate) && !(message.packets_recv_duplicate && $util.isInteger(message.packets_recv_duplicate.low) && $util.isInteger(message.packets_recv_duplicate.high)))
                    return "packets_recv_duplicate: integer|Long expected";
            if (message.packets_recv_lurch != null && message.hasOwnProperty("packets_recv_lurch"))
                if (!$util.isInteger(message.packets_recv_lurch) && !(message.packets_recv_lurch && $util.isInteger(message.packets_recv_lurch.low) && $util.isInteger(message.packets_recv_lurch.high)))
                    return "packets_recv_lurch: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramLinkLifetimeStats message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramLinkLifetimeStats} CMsgSteamDatagramLinkLifetimeStats
         */
        CMsgSteamDatagramLinkLifetimeStats.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramLinkLifetimeStats)
                return object;
            var message = new $root.CMsgSteamDatagramLinkLifetimeStats();
            if (object.packets_sent != null)
                if ($util.Long)
                    (message.packets_sent = $util.Long.fromValue(object.packets_sent)).unsigned = true;
                else if (typeof object.packets_sent === "string")
                    message.packets_sent = parseInt(object.packets_sent, 10);
                else if (typeof object.packets_sent === "number")
                    message.packets_sent = object.packets_sent;
                else if (typeof object.packets_sent === "object")
                    message.packets_sent = new $util.LongBits(object.packets_sent.low >>> 0, object.packets_sent.high >>> 0).toNumber(true);
            if (object.kb_sent != null)
                if ($util.Long)
                    (message.kb_sent = $util.Long.fromValue(object.kb_sent)).unsigned = true;
                else if (typeof object.kb_sent === "string")
                    message.kb_sent = parseInt(object.kb_sent, 10);
                else if (typeof object.kb_sent === "number")
                    message.kb_sent = object.kb_sent;
                else if (typeof object.kb_sent === "object")
                    message.kb_sent = new $util.LongBits(object.kb_sent.low >>> 0, object.kb_sent.high >>> 0).toNumber(true);
            if (object.packets_recv != null)
                if ($util.Long)
                    (message.packets_recv = $util.Long.fromValue(object.packets_recv)).unsigned = true;
                else if (typeof object.packets_recv === "string")
                    message.packets_recv = parseInt(object.packets_recv, 10);
                else if (typeof object.packets_recv === "number")
                    message.packets_recv = object.packets_recv;
                else if (typeof object.packets_recv === "object")
                    message.packets_recv = new $util.LongBits(object.packets_recv.low >>> 0, object.packets_recv.high >>> 0).toNumber(true);
            if (object.kb_recv != null)
                if ($util.Long)
                    (message.kb_recv = $util.Long.fromValue(object.kb_recv)).unsigned = true;
                else if (typeof object.kb_recv === "string")
                    message.kb_recv = parseInt(object.kb_recv, 10);
                else if (typeof object.kb_recv === "number")
                    message.kb_recv = object.kb_recv;
                else if (typeof object.kb_recv === "object")
                    message.kb_recv = new $util.LongBits(object.kb_recv.low >>> 0, object.kb_recv.high >>> 0).toNumber(true);
            if (object.packets_recv_sequenced != null)
                if ($util.Long)
                    (message.packets_recv_sequenced = $util.Long.fromValue(object.packets_recv_sequenced)).unsigned = true;
                else if (typeof object.packets_recv_sequenced === "string")
                    message.packets_recv_sequenced = parseInt(object.packets_recv_sequenced, 10);
                else if (typeof object.packets_recv_sequenced === "number")
                    message.packets_recv_sequenced = object.packets_recv_sequenced;
                else if (typeof object.packets_recv_sequenced === "object")
                    message.packets_recv_sequenced = new $util.LongBits(object.packets_recv_sequenced.low >>> 0, object.packets_recv_sequenced.high >>> 0).toNumber(true);
            if (object.packets_recv_dropped != null)
                if ($util.Long)
                    (message.packets_recv_dropped = $util.Long.fromValue(object.packets_recv_dropped)).unsigned = true;
                else if (typeof object.packets_recv_dropped === "string")
                    message.packets_recv_dropped = parseInt(object.packets_recv_dropped, 10);
                else if (typeof object.packets_recv_dropped === "number")
                    message.packets_recv_dropped = object.packets_recv_dropped;
                else if (typeof object.packets_recv_dropped === "object")
                    message.packets_recv_dropped = new $util.LongBits(object.packets_recv_dropped.low >>> 0, object.packets_recv_dropped.high >>> 0).toNumber(true);
            if (object.packets_recv_out_of_order != null)
                if ($util.Long)
                    (message.packets_recv_out_of_order = $util.Long.fromValue(object.packets_recv_out_of_order)).unsigned = true;
                else if (typeof object.packets_recv_out_of_order === "string")
                    message.packets_recv_out_of_order = parseInt(object.packets_recv_out_of_order, 10);
                else if (typeof object.packets_recv_out_of_order === "number")
                    message.packets_recv_out_of_order = object.packets_recv_out_of_order;
                else if (typeof object.packets_recv_out_of_order === "object")
                    message.packets_recv_out_of_order = new $util.LongBits(object.packets_recv_out_of_order.low >>> 0, object.packets_recv_out_of_order.high >>> 0).toNumber(true);
            if (object.packets_recv_duplicate != null)
                if ($util.Long)
                    (message.packets_recv_duplicate = $util.Long.fromValue(object.packets_recv_duplicate)).unsigned = true;
                else if (typeof object.packets_recv_duplicate === "string")
                    message.packets_recv_duplicate = parseInt(object.packets_recv_duplicate, 10);
                else if (typeof object.packets_recv_duplicate === "number")
                    message.packets_recv_duplicate = object.packets_recv_duplicate;
                else if (typeof object.packets_recv_duplicate === "object")
                    message.packets_recv_duplicate = new $util.LongBits(object.packets_recv_duplicate.low >>> 0, object.packets_recv_duplicate.high >>> 0).toNumber(true);
            if (object.packets_recv_lurch != null)
                if ($util.Long)
                    (message.packets_recv_lurch = $util.Long.fromValue(object.packets_recv_lurch)).unsigned = true;
                else if (typeof object.packets_recv_lurch === "string")
                    message.packets_recv_lurch = parseInt(object.packets_recv_lurch, 10);
                else if (typeof object.packets_recv_lurch === "number")
                    message.packets_recv_lurch = object.packets_recv_lurch;
                else if (typeof object.packets_recv_lurch === "object")
                    message.packets_recv_lurch = new $util.LongBits(object.packets_recv_lurch.low >>> 0, object.packets_recv_lurch.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramLinkLifetimeStats message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {CMsgSteamDatagramLinkLifetimeStats} message CMsgSteamDatagramLinkLifetimeStats
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramLinkLifetimeStats.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packets_sent = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packets_sent = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.kb_sent = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.kb_sent = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packets_recv = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packets_recv = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.kb_recv = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.kb_recv = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packets_recv_sequenced = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packets_recv_sequenced = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packets_recv_dropped = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packets_recv_dropped = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packets_recv_out_of_order = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packets_recv_out_of_order = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packets_recv_duplicate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packets_recv_duplicate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packets_recv_lurch = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packets_recv_lurch = options.longs === String ? "0" : 0;
            }
            if (message.packets_sent != null && message.hasOwnProperty("packets_sent"))
                if (typeof message.packets_sent === "number")
                    object.packets_sent = options.longs === String ? String(message.packets_sent) : message.packets_sent;
                else
                    object.packets_sent = options.longs === String ? $util.Long.prototype.toString.call(message.packets_sent) : options.longs === Number ? new $util.LongBits(message.packets_sent.low >>> 0, message.packets_sent.high >>> 0).toNumber(true) : message.packets_sent;
            if (message.kb_sent != null && message.hasOwnProperty("kb_sent"))
                if (typeof message.kb_sent === "number")
                    object.kb_sent = options.longs === String ? String(message.kb_sent) : message.kb_sent;
                else
                    object.kb_sent = options.longs === String ? $util.Long.prototype.toString.call(message.kb_sent) : options.longs === Number ? new $util.LongBits(message.kb_sent.low >>> 0, message.kb_sent.high >>> 0).toNumber(true) : message.kb_sent;
            if (message.packets_recv != null && message.hasOwnProperty("packets_recv"))
                if (typeof message.packets_recv === "number")
                    object.packets_recv = options.longs === String ? String(message.packets_recv) : message.packets_recv;
                else
                    object.packets_recv = options.longs === String ? $util.Long.prototype.toString.call(message.packets_recv) : options.longs === Number ? new $util.LongBits(message.packets_recv.low >>> 0, message.packets_recv.high >>> 0).toNumber(true) : message.packets_recv;
            if (message.kb_recv != null && message.hasOwnProperty("kb_recv"))
                if (typeof message.kb_recv === "number")
                    object.kb_recv = options.longs === String ? String(message.kb_recv) : message.kb_recv;
                else
                    object.kb_recv = options.longs === String ? $util.Long.prototype.toString.call(message.kb_recv) : options.longs === Number ? new $util.LongBits(message.kb_recv.low >>> 0, message.kb_recv.high >>> 0).toNumber(true) : message.kb_recv;
            if (message.packets_recv_sequenced != null && message.hasOwnProperty("packets_recv_sequenced"))
                if (typeof message.packets_recv_sequenced === "number")
                    object.packets_recv_sequenced = options.longs === String ? String(message.packets_recv_sequenced) : message.packets_recv_sequenced;
                else
                    object.packets_recv_sequenced = options.longs === String ? $util.Long.prototype.toString.call(message.packets_recv_sequenced) : options.longs === Number ? new $util.LongBits(message.packets_recv_sequenced.low >>> 0, message.packets_recv_sequenced.high >>> 0).toNumber(true) : message.packets_recv_sequenced;
            if (message.packets_recv_dropped != null && message.hasOwnProperty("packets_recv_dropped"))
                if (typeof message.packets_recv_dropped === "number")
                    object.packets_recv_dropped = options.longs === String ? String(message.packets_recv_dropped) : message.packets_recv_dropped;
                else
                    object.packets_recv_dropped = options.longs === String ? $util.Long.prototype.toString.call(message.packets_recv_dropped) : options.longs === Number ? new $util.LongBits(message.packets_recv_dropped.low >>> 0, message.packets_recv_dropped.high >>> 0).toNumber(true) : message.packets_recv_dropped;
            if (message.packets_recv_out_of_order != null && message.hasOwnProperty("packets_recv_out_of_order"))
                if (typeof message.packets_recv_out_of_order === "number")
                    object.packets_recv_out_of_order = options.longs === String ? String(message.packets_recv_out_of_order) : message.packets_recv_out_of_order;
                else
                    object.packets_recv_out_of_order = options.longs === String ? $util.Long.prototype.toString.call(message.packets_recv_out_of_order) : options.longs === Number ? new $util.LongBits(message.packets_recv_out_of_order.low >>> 0, message.packets_recv_out_of_order.high >>> 0).toNumber(true) : message.packets_recv_out_of_order;
            if (message.packets_recv_duplicate != null && message.hasOwnProperty("packets_recv_duplicate"))
                if (typeof message.packets_recv_duplicate === "number")
                    object.packets_recv_duplicate = options.longs === String ? String(message.packets_recv_duplicate) : message.packets_recv_duplicate;
                else
                    object.packets_recv_duplicate = options.longs === String ? $util.Long.prototype.toString.call(message.packets_recv_duplicate) : options.longs === Number ? new $util.LongBits(message.packets_recv_duplicate.low >>> 0, message.packets_recv_duplicate.high >>> 0).toNumber(true) : message.packets_recv_duplicate;
            if (message.packets_recv_lurch != null && message.hasOwnProperty("packets_recv_lurch"))
                if (typeof message.packets_recv_lurch === "number")
                    object.packets_recv_lurch = options.longs === String ? String(message.packets_recv_lurch) : message.packets_recv_lurch;
                else
                    object.packets_recv_lurch = options.longs === String ? $util.Long.prototype.toString.call(message.packets_recv_lurch) : options.longs === Number ? new $util.LongBits(message.packets_recv_lurch.low >>> 0, message.packets_recv_lurch.high >>> 0).toNumber(true) : message.packets_recv_lurch;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramLinkLifetimeStats to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramLinkLifetimeStats;
    })();
    
    $root.CMsgSteamDatagramConnectionQuality = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramConnectionQuality.
         * @exports ICMsgSteamDatagramConnectionQuality
         * @interface ICMsgSteamDatagramConnectionQuality
         * @property {ICMsgSteamDatagramLinkInstantaneousStats|null} [instantaneous] CMsgSteamDatagramConnectionQuality instantaneous
         * @property {ICMsgSteamDatagramLinkLifetimeStats|null} [lifetime] CMsgSteamDatagramConnectionQuality lifetime
         */
    
        /**
         * Constructs a new CMsgSteamDatagramConnectionQuality.
         * @exports CMsgSteamDatagramConnectionQuality
         * @classdesc Represents a CMsgSteamDatagramConnectionQuality.
         * @implements ICMsgSteamDatagramConnectionQuality
         * @constructor
         * @param {ICMsgSteamDatagramConnectionQuality=} [properties] Properties to set
         */
        function CMsgSteamDatagramConnectionQuality(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramConnectionQuality instantaneous.
         * @member {ICMsgSteamDatagramLinkInstantaneousStats|null|undefined} instantaneous
         * @memberof CMsgSteamDatagramConnectionQuality
         * @instance
         */
        CMsgSteamDatagramConnectionQuality.prototype.instantaneous = null;
    
        /**
         * CMsgSteamDatagramConnectionQuality lifetime.
         * @member {ICMsgSteamDatagramLinkLifetimeStats|null|undefined} lifetime
         * @memberof CMsgSteamDatagramConnectionQuality
         * @instance
         */
        CMsgSteamDatagramConnectionQuality.prototype.lifetime = null;
    
        /**
         * Creates a new CMsgSteamDatagramConnectionQuality instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {ICMsgSteamDatagramConnectionQuality=} [properties] Properties to set
         * @returns {CMsgSteamDatagramConnectionQuality} CMsgSteamDatagramConnectionQuality instance
         */
        CMsgSteamDatagramConnectionQuality.create = function create(properties) {
            return new CMsgSteamDatagramConnectionQuality(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramConnectionQuality message. Does not implicitly {@link CMsgSteamDatagramConnectionQuality.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {ICMsgSteamDatagramConnectionQuality} message CMsgSteamDatagramConnectionQuality message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramConnectionQuality.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.instantaneous != null && Object.hasOwnProperty.call(message, "instantaneous"))
                $root.CMsgSteamDatagramLinkInstantaneousStats.encode(message.instantaneous, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.lifetime != null && Object.hasOwnProperty.call(message, "lifetime"))
                $root.CMsgSteamDatagramLinkLifetimeStats.encode(message.lifetime, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramConnectionQuality message, length delimited. Does not implicitly {@link CMsgSteamDatagramConnectionQuality.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {ICMsgSteamDatagramConnectionQuality} message CMsgSteamDatagramConnectionQuality message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramConnectionQuality.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramConnectionQuality message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramConnectionQuality} CMsgSteamDatagramConnectionQuality
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramConnectionQuality.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramConnectionQuality();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.instantaneous = $root.CMsgSteamDatagramLinkInstantaneousStats.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lifetime = $root.CMsgSteamDatagramLinkLifetimeStats.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramConnectionQuality message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramConnectionQuality} CMsgSteamDatagramConnectionQuality
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramConnectionQuality.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramConnectionQuality message.
         * @function verify
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramConnectionQuality.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.instantaneous != null && message.hasOwnProperty("instantaneous")) {
                var error = $root.CMsgSteamDatagramLinkInstantaneousStats.verify(message.instantaneous);
                if (error)
                    return "instantaneous." + error;
            }
            if (message.lifetime != null && message.hasOwnProperty("lifetime")) {
                var error = $root.CMsgSteamDatagramLinkLifetimeStats.verify(message.lifetime);
                if (error)
                    return "lifetime." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramConnectionQuality message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramConnectionQuality} CMsgSteamDatagramConnectionQuality
         */
        CMsgSteamDatagramConnectionQuality.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramConnectionQuality)
                return object;
            var message = new $root.CMsgSteamDatagramConnectionQuality();
            if (object.instantaneous != null) {
                if (typeof object.instantaneous !== "object")
                    throw TypeError(".CMsgSteamDatagramConnectionQuality.instantaneous: object expected");
                message.instantaneous = $root.CMsgSteamDatagramLinkInstantaneousStats.fromObject(object.instantaneous);
            }
            if (object.lifetime != null) {
                if (typeof object.lifetime !== "object")
                    throw TypeError(".CMsgSteamDatagramConnectionQuality.lifetime: object expected");
                message.lifetime = $root.CMsgSteamDatagramLinkLifetimeStats.fromObject(object.lifetime);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramConnectionQuality message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {CMsgSteamDatagramConnectionQuality} message CMsgSteamDatagramConnectionQuality
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramConnectionQuality.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.instantaneous = null;
                object.lifetime = null;
            }
            if (message.instantaneous != null && message.hasOwnProperty("instantaneous"))
                object.instantaneous = $root.CMsgSteamDatagramLinkInstantaneousStats.toObject(message.instantaneous, options);
            if (message.lifetime != null && message.hasOwnProperty("lifetime"))
                object.lifetime = $root.CMsgSteamDatagramLinkLifetimeStats.toObject(message.lifetime, options);
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramConnectionQuality to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramConnectionQuality
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramConnectionQuality.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramConnectionQuality;
    })();
    
    $root.CMsgSteamDatagramConnectionStatsClientToRouter = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramConnectionStatsClientToRouter.
         * @exports ICMsgSteamDatagramConnectionStatsClientToRouter
         * @interface ICMsgSteamDatagramConnectionStatsClientToRouter
         * @property {ICMsgSteamDatagramConnectionQuality|null} [c2r] CMsgSteamDatagramConnectionStatsClientToRouter c2r
         * @property {ICMsgSteamDatagramConnectionQuality|null} [c2s] CMsgSteamDatagramConnectionStatsClientToRouter c2s
         * @property {number|null} [client_timestamp] CMsgSteamDatagramConnectionStatsClientToRouter client_timestamp
         * @property {number|null} [client_cookie] CMsgSteamDatagramConnectionStatsClientToRouter client_cookie
         * @property {number|null} [seq_num_c2r] CMsgSteamDatagramConnectionStatsClientToRouter seq_num_c2r
         * @property {number|null} [seq_num_c2s] CMsgSteamDatagramConnectionStatsClientToRouter seq_num_c2s
         */
    
        /**
         * Constructs a new CMsgSteamDatagramConnectionStatsClientToRouter.
         * @exports CMsgSteamDatagramConnectionStatsClientToRouter
         * @classdesc Represents a CMsgSteamDatagramConnectionStatsClientToRouter.
         * @implements ICMsgSteamDatagramConnectionStatsClientToRouter
         * @constructor
         * @param {ICMsgSteamDatagramConnectionStatsClientToRouter=} [properties] Properties to set
         */
        function CMsgSteamDatagramConnectionStatsClientToRouter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramConnectionStatsClientToRouter c2r.
         * @member {ICMsgSteamDatagramConnectionQuality|null|undefined} c2r
         * @memberof CMsgSteamDatagramConnectionStatsClientToRouter
         * @instance
         */
        CMsgSteamDatagramConnectionStatsClientToRouter.prototype.c2r = null;
    
        /**
         * CMsgSteamDatagramConnectionStatsClientToRouter c2s.
         * @member {ICMsgSteamDatagramConnectionQuality|null|undefined} c2s
         * @memberof CMsgSteamDatagramConnectionStatsClientToRouter
         * @instance
         */
        CMsgSteamDatagramConnectionStatsClientToRouter.prototype.c2s = null;
    
        /**
         * CMsgSteamDatagramConnectionStatsClientToRouter client_timestamp.
         * @member {number} client_timestamp
         * @memberof CMsgSteamDatagramConnectionStatsClientToRouter
         * @instance
         */
        CMsgSteamDatagramConnectionStatsClientToRouter.prototype.client_timestamp = 0;
    
        /**
         * CMsgSteamDatagramConnectionStatsClientToRouter client_cookie.
         * @member {number} client_cookie
         * @memberof CMsgSteamDatagramConnectionStatsClientToRouter
         * @instance
         */
        CMsgSteamDatagramConnectionStatsClientToRouter.prototype.client_cookie = 0;
    
        /**
         * CMsgSteamDatagramConnectionStatsClientToRouter seq_num_c2r.
         * @member {number} seq_num_c2r
         * @memberof CMsgSteamDatagramConnectionStatsClientToRouter
         * @instance
         */
        CMsgSteamDatagramConnectionStatsClientToRouter.prototype.seq_num_c2r = 0;
    
        /**
         * CMsgSteamDatagramConnectionStatsClientToRouter seq_num_c2s.
         * @member {number} seq_num_c2s
         * @memberof CMsgSteamDatagramConnectionStatsClientToRouter
         * @instance
         */
        CMsgSteamDatagramConnectionStatsClientToRouter.prototype.seq_num_c2s = 0;
    
        /**
         * Creates a new CMsgSteamDatagramConnectionStatsClientToRouter instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramConnectionStatsClientToRouter
         * @static
         * @param {ICMsgSteamDatagramConnectionStatsClientToRouter=} [properties] Properties to set
         * @returns {CMsgSteamDatagramConnectionStatsClientToRouter} CMsgSteamDatagramConnectionStatsClientToRouter instance
         */
        CMsgSteamDatagramConnectionStatsClientToRouter.create = function create(properties) {
            return new CMsgSteamDatagramConnectionStatsClientToRouter(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramConnectionStatsClientToRouter message. Does not implicitly {@link CMsgSteamDatagramConnectionStatsClientToRouter.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramConnectionStatsClientToRouter
         * @static
         * @param {ICMsgSteamDatagramConnectionStatsClientToRouter} message CMsgSteamDatagramConnectionStatsClientToRouter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramConnectionStatsClientToRouter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.c2r != null && Object.hasOwnProperty.call(message, "c2r"))
                $root.CMsgSteamDatagramConnectionQuality.encode(message.c2r, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.c2s != null && Object.hasOwnProperty.call(message, "c2s"))
                $root.CMsgSteamDatagramConnectionQuality.encode(message.c2s, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.client_timestamp != null && Object.hasOwnProperty.call(message, "client_timestamp"))
                writer.uint32(/* id 3, wireType 5 =*/29).fixed32(message.client_timestamp);
            if (message.client_cookie != null && Object.hasOwnProperty.call(message, "client_cookie"))
                writer.uint32(/* id 8, wireType 5 =*/69).fixed32(message.client_cookie);
            if (message.seq_num_c2r != null && Object.hasOwnProperty.call(message, "seq_num_c2r"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.seq_num_c2r);
            if (message.seq_num_c2s != null && Object.hasOwnProperty.call(message, "seq_num_c2s"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.seq_num_c2s);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramConnectionStatsClientToRouter message, length delimited. Does not implicitly {@link CMsgSteamDatagramConnectionStatsClientToRouter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramConnectionStatsClientToRouter
         * @static
         * @param {ICMsgSteamDatagramConnectionStatsClientToRouter} message CMsgSteamDatagramConnectionStatsClientToRouter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramConnectionStatsClientToRouter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramConnectionStatsClientToRouter message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramConnectionStatsClientToRouter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramConnectionStatsClientToRouter} CMsgSteamDatagramConnectionStatsClientToRouter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramConnectionStatsClientToRouter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramConnectionStatsClientToRouter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.c2r = $root.CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.c2s = $root.CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.client_timestamp = reader.fixed32();
                    break;
                case 8:
                    message.client_cookie = reader.fixed32();
                    break;
                case 9:
                    message.seq_num_c2r = reader.uint32();
                    break;
                case 10:
                    message.seq_num_c2s = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramConnectionStatsClientToRouter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramConnectionStatsClientToRouter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramConnectionStatsClientToRouter} CMsgSteamDatagramConnectionStatsClientToRouter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramConnectionStatsClientToRouter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramConnectionStatsClientToRouter message.
         * @function verify
         * @memberof CMsgSteamDatagramConnectionStatsClientToRouter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramConnectionStatsClientToRouter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.c2r != null && message.hasOwnProperty("c2r")) {
                var error = $root.CMsgSteamDatagramConnectionQuality.verify(message.c2r);
                if (error)
                    return "c2r." + error;
            }
            if (message.c2s != null && message.hasOwnProperty("c2s")) {
                var error = $root.CMsgSteamDatagramConnectionQuality.verify(message.c2s);
                if (error)
                    return "c2s." + error;
            }
            if (message.client_timestamp != null && message.hasOwnProperty("client_timestamp"))
                if (!$util.isInteger(message.client_timestamp))
                    return "client_timestamp: integer expected";
            if (message.client_cookie != null && message.hasOwnProperty("client_cookie"))
                if (!$util.isInteger(message.client_cookie))
                    return "client_cookie: integer expected";
            if (message.seq_num_c2r != null && message.hasOwnProperty("seq_num_c2r"))
                if (!$util.isInteger(message.seq_num_c2r))
                    return "seq_num_c2r: integer expected";
            if (message.seq_num_c2s != null && message.hasOwnProperty("seq_num_c2s"))
                if (!$util.isInteger(message.seq_num_c2s))
                    return "seq_num_c2s: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramConnectionStatsClientToRouter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramConnectionStatsClientToRouter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramConnectionStatsClientToRouter} CMsgSteamDatagramConnectionStatsClientToRouter
         */
        CMsgSteamDatagramConnectionStatsClientToRouter.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramConnectionStatsClientToRouter)
                return object;
            var message = new $root.CMsgSteamDatagramConnectionStatsClientToRouter();
            if (object.c2r != null) {
                if (typeof object.c2r !== "object")
                    throw TypeError(".CMsgSteamDatagramConnectionStatsClientToRouter.c2r: object expected");
                message.c2r = $root.CMsgSteamDatagramConnectionQuality.fromObject(object.c2r);
            }
            if (object.c2s != null) {
                if (typeof object.c2s !== "object")
                    throw TypeError(".CMsgSteamDatagramConnectionStatsClientToRouter.c2s: object expected");
                message.c2s = $root.CMsgSteamDatagramConnectionQuality.fromObject(object.c2s);
            }
            if (object.client_timestamp != null)
                message.client_timestamp = object.client_timestamp >>> 0;
            if (object.client_cookie != null)
                message.client_cookie = object.client_cookie >>> 0;
            if (object.seq_num_c2r != null)
                message.seq_num_c2r = object.seq_num_c2r >>> 0;
            if (object.seq_num_c2s != null)
                message.seq_num_c2s = object.seq_num_c2s >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramConnectionStatsClientToRouter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramConnectionStatsClientToRouter
         * @static
         * @param {CMsgSteamDatagramConnectionStatsClientToRouter} message CMsgSteamDatagramConnectionStatsClientToRouter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramConnectionStatsClientToRouter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.c2r = null;
                object.c2s = null;
                object.client_timestamp = 0;
                object.client_cookie = 0;
                object.seq_num_c2r = 0;
                object.seq_num_c2s = 0;
            }
            if (message.c2r != null && message.hasOwnProperty("c2r"))
                object.c2r = $root.CMsgSteamDatagramConnectionQuality.toObject(message.c2r, options);
            if (message.c2s != null && message.hasOwnProperty("c2s"))
                object.c2s = $root.CMsgSteamDatagramConnectionQuality.toObject(message.c2s, options);
            if (message.client_timestamp != null && message.hasOwnProperty("client_timestamp"))
                object.client_timestamp = message.client_timestamp;
            if (message.client_cookie != null && message.hasOwnProperty("client_cookie"))
                object.client_cookie = message.client_cookie;
            if (message.seq_num_c2r != null && message.hasOwnProperty("seq_num_c2r"))
                object.seq_num_c2r = message.seq_num_c2r;
            if (message.seq_num_c2s != null && message.hasOwnProperty("seq_num_c2s"))
                object.seq_num_c2s = message.seq_num_c2s;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramConnectionStatsClientToRouter to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramConnectionStatsClientToRouter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramConnectionStatsClientToRouter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramConnectionStatsClientToRouter;
    })();
    
    $root.CMsgSteamDatagramConnectionStatsRouterToClient = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramConnectionStatsRouterToClient.
         * @exports ICMsgSteamDatagramConnectionStatsRouterToClient
         * @interface ICMsgSteamDatagramConnectionStatsRouterToClient
         * @property {ICMsgSteamDatagramConnectionQuality|null} [r2c] CMsgSteamDatagramConnectionStatsRouterToClient r2c
         * @property {ICMsgSteamDatagramConnectionQuality|null} [s2c] CMsgSteamDatagramConnectionStatsRouterToClient s2c
         * @property {number|null} [client_timestamp_from_router] CMsgSteamDatagramConnectionStatsRouterToClient client_timestamp_from_router
         * @property {number|null} [client_timestamp_from_server] CMsgSteamDatagramConnectionStatsRouterToClient client_timestamp_from_server
         * @property {number|null} [router_gameserver_latency] CMsgSteamDatagramConnectionStatsRouterToClient router_gameserver_latency
         * @property {number|null} [seconds_until_shutdown] CMsgSteamDatagramConnectionStatsRouterToClient seconds_until_shutdown
         * @property {number|null} [client_cookie] CMsgSteamDatagramConnectionStatsRouterToClient client_cookie
         * @property {number|null} [seq_num_r2c] CMsgSteamDatagramConnectionStatsRouterToClient seq_num_r2c
         * @property {number|null} [seq_num_s2c] CMsgSteamDatagramConnectionStatsRouterToClient seq_num_s2c
         */
    
        /**
         * Constructs a new CMsgSteamDatagramConnectionStatsRouterToClient.
         * @exports CMsgSteamDatagramConnectionStatsRouterToClient
         * @classdesc Represents a CMsgSteamDatagramConnectionStatsRouterToClient.
         * @implements ICMsgSteamDatagramConnectionStatsRouterToClient
         * @constructor
         * @param {ICMsgSteamDatagramConnectionStatsRouterToClient=} [properties] Properties to set
         */
        function CMsgSteamDatagramConnectionStatsRouterToClient(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramConnectionStatsRouterToClient r2c.
         * @member {ICMsgSteamDatagramConnectionQuality|null|undefined} r2c
         * @memberof CMsgSteamDatagramConnectionStatsRouterToClient
         * @instance
         */
        CMsgSteamDatagramConnectionStatsRouterToClient.prototype.r2c = null;
    
        /**
         * CMsgSteamDatagramConnectionStatsRouterToClient s2c.
         * @member {ICMsgSteamDatagramConnectionQuality|null|undefined} s2c
         * @memberof CMsgSteamDatagramConnectionStatsRouterToClient
         * @instance
         */
        CMsgSteamDatagramConnectionStatsRouterToClient.prototype.s2c = null;
    
        /**
         * CMsgSteamDatagramConnectionStatsRouterToClient client_timestamp_from_router.
         * @member {number} client_timestamp_from_router
         * @memberof CMsgSteamDatagramConnectionStatsRouterToClient
         * @instance
         */
        CMsgSteamDatagramConnectionStatsRouterToClient.prototype.client_timestamp_from_router = 0;
    
        /**
         * CMsgSteamDatagramConnectionStatsRouterToClient client_timestamp_from_server.
         * @member {number} client_timestamp_from_server
         * @memberof CMsgSteamDatagramConnectionStatsRouterToClient
         * @instance
         */
        CMsgSteamDatagramConnectionStatsRouterToClient.prototype.client_timestamp_from_server = 0;
    
        /**
         * CMsgSteamDatagramConnectionStatsRouterToClient router_gameserver_latency.
         * @member {number} router_gameserver_latency
         * @memberof CMsgSteamDatagramConnectionStatsRouterToClient
         * @instance
         */
        CMsgSteamDatagramConnectionStatsRouterToClient.prototype.router_gameserver_latency = 0;
    
        /**
         * CMsgSteamDatagramConnectionStatsRouterToClient seconds_until_shutdown.
         * @member {number} seconds_until_shutdown
         * @memberof CMsgSteamDatagramConnectionStatsRouterToClient
         * @instance
         */
        CMsgSteamDatagramConnectionStatsRouterToClient.prototype.seconds_until_shutdown = 0;
    
        /**
         * CMsgSteamDatagramConnectionStatsRouterToClient client_cookie.
         * @member {number} client_cookie
         * @memberof CMsgSteamDatagramConnectionStatsRouterToClient
         * @instance
         */
        CMsgSteamDatagramConnectionStatsRouterToClient.prototype.client_cookie = 0;
    
        /**
         * CMsgSteamDatagramConnectionStatsRouterToClient seq_num_r2c.
         * @member {number} seq_num_r2c
         * @memberof CMsgSteamDatagramConnectionStatsRouterToClient
         * @instance
         */
        CMsgSteamDatagramConnectionStatsRouterToClient.prototype.seq_num_r2c = 0;
    
        /**
         * CMsgSteamDatagramConnectionStatsRouterToClient seq_num_s2c.
         * @member {number} seq_num_s2c
         * @memberof CMsgSteamDatagramConnectionStatsRouterToClient
         * @instance
         */
        CMsgSteamDatagramConnectionStatsRouterToClient.prototype.seq_num_s2c = 0;
    
        /**
         * Creates a new CMsgSteamDatagramConnectionStatsRouterToClient instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramConnectionStatsRouterToClient
         * @static
         * @param {ICMsgSteamDatagramConnectionStatsRouterToClient=} [properties] Properties to set
         * @returns {CMsgSteamDatagramConnectionStatsRouterToClient} CMsgSteamDatagramConnectionStatsRouterToClient instance
         */
        CMsgSteamDatagramConnectionStatsRouterToClient.create = function create(properties) {
            return new CMsgSteamDatagramConnectionStatsRouterToClient(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramConnectionStatsRouterToClient message. Does not implicitly {@link CMsgSteamDatagramConnectionStatsRouterToClient.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramConnectionStatsRouterToClient
         * @static
         * @param {ICMsgSteamDatagramConnectionStatsRouterToClient} message CMsgSteamDatagramConnectionStatsRouterToClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramConnectionStatsRouterToClient.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.r2c != null && Object.hasOwnProperty.call(message, "r2c"))
                $root.CMsgSteamDatagramConnectionQuality.encode(message.r2c, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.s2c != null && Object.hasOwnProperty.call(message, "s2c"))
                $root.CMsgSteamDatagramConnectionQuality.encode(message.s2c, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.client_timestamp_from_router != null && Object.hasOwnProperty.call(message, "client_timestamp_from_router"))
                writer.uint32(/* id 3, wireType 5 =*/29).fixed32(message.client_timestamp_from_router);
            if (message.client_timestamp_from_server != null && Object.hasOwnProperty.call(message, "client_timestamp_from_server"))
                writer.uint32(/* id 4, wireType 5 =*/37).fixed32(message.client_timestamp_from_server);
            if (message.router_gameserver_latency != null && Object.hasOwnProperty.call(message, "router_gameserver_latency"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.router_gameserver_latency);
            if (message.seconds_until_shutdown != null && Object.hasOwnProperty.call(message, "seconds_until_shutdown"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.seconds_until_shutdown);
            if (message.client_cookie != null && Object.hasOwnProperty.call(message, "client_cookie"))
                writer.uint32(/* id 7, wireType 5 =*/61).fixed32(message.client_cookie);
            if (message.seq_num_r2c != null && Object.hasOwnProperty.call(message, "seq_num_r2c"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.seq_num_r2c);
            if (message.seq_num_s2c != null && Object.hasOwnProperty.call(message, "seq_num_s2c"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.seq_num_s2c);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramConnectionStatsRouterToClient message, length delimited. Does not implicitly {@link CMsgSteamDatagramConnectionStatsRouterToClient.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramConnectionStatsRouterToClient
         * @static
         * @param {ICMsgSteamDatagramConnectionStatsRouterToClient} message CMsgSteamDatagramConnectionStatsRouterToClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramConnectionStatsRouterToClient.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramConnectionStatsRouterToClient message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramConnectionStatsRouterToClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramConnectionStatsRouterToClient} CMsgSteamDatagramConnectionStatsRouterToClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramConnectionStatsRouterToClient.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramConnectionStatsRouterToClient();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.r2c = $root.CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.s2c = $root.CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.client_timestamp_from_router = reader.fixed32();
                    break;
                case 4:
                    message.client_timestamp_from_server = reader.fixed32();
                    break;
                case 5:
                    message.router_gameserver_latency = reader.uint32();
                    break;
                case 6:
                    message.seconds_until_shutdown = reader.uint32();
                    break;
                case 7:
                    message.client_cookie = reader.fixed32();
                    break;
                case 8:
                    message.seq_num_r2c = reader.uint32();
                    break;
                case 9:
                    message.seq_num_s2c = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramConnectionStatsRouterToClient message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramConnectionStatsRouterToClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramConnectionStatsRouterToClient} CMsgSteamDatagramConnectionStatsRouterToClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramConnectionStatsRouterToClient.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramConnectionStatsRouterToClient message.
         * @function verify
         * @memberof CMsgSteamDatagramConnectionStatsRouterToClient
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramConnectionStatsRouterToClient.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.r2c != null && message.hasOwnProperty("r2c")) {
                var error = $root.CMsgSteamDatagramConnectionQuality.verify(message.r2c);
                if (error)
                    return "r2c." + error;
            }
            if (message.s2c != null && message.hasOwnProperty("s2c")) {
                var error = $root.CMsgSteamDatagramConnectionQuality.verify(message.s2c);
                if (error)
                    return "s2c." + error;
            }
            if (message.client_timestamp_from_router != null && message.hasOwnProperty("client_timestamp_from_router"))
                if (!$util.isInteger(message.client_timestamp_from_router))
                    return "client_timestamp_from_router: integer expected";
            if (message.client_timestamp_from_server != null && message.hasOwnProperty("client_timestamp_from_server"))
                if (!$util.isInteger(message.client_timestamp_from_server))
                    return "client_timestamp_from_server: integer expected";
            if (message.router_gameserver_latency != null && message.hasOwnProperty("router_gameserver_latency"))
                if (!$util.isInteger(message.router_gameserver_latency))
                    return "router_gameserver_latency: integer expected";
            if (message.seconds_until_shutdown != null && message.hasOwnProperty("seconds_until_shutdown"))
                if (!$util.isInteger(message.seconds_until_shutdown))
                    return "seconds_until_shutdown: integer expected";
            if (message.client_cookie != null && message.hasOwnProperty("client_cookie"))
                if (!$util.isInteger(message.client_cookie))
                    return "client_cookie: integer expected";
            if (message.seq_num_r2c != null && message.hasOwnProperty("seq_num_r2c"))
                if (!$util.isInteger(message.seq_num_r2c))
                    return "seq_num_r2c: integer expected";
            if (message.seq_num_s2c != null && message.hasOwnProperty("seq_num_s2c"))
                if (!$util.isInteger(message.seq_num_s2c))
                    return "seq_num_s2c: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramConnectionStatsRouterToClient message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramConnectionStatsRouterToClient
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramConnectionStatsRouterToClient} CMsgSteamDatagramConnectionStatsRouterToClient
         */
        CMsgSteamDatagramConnectionStatsRouterToClient.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramConnectionStatsRouterToClient)
                return object;
            var message = new $root.CMsgSteamDatagramConnectionStatsRouterToClient();
            if (object.r2c != null) {
                if (typeof object.r2c !== "object")
                    throw TypeError(".CMsgSteamDatagramConnectionStatsRouterToClient.r2c: object expected");
                message.r2c = $root.CMsgSteamDatagramConnectionQuality.fromObject(object.r2c);
            }
            if (object.s2c != null) {
                if (typeof object.s2c !== "object")
                    throw TypeError(".CMsgSteamDatagramConnectionStatsRouterToClient.s2c: object expected");
                message.s2c = $root.CMsgSteamDatagramConnectionQuality.fromObject(object.s2c);
            }
            if (object.client_timestamp_from_router != null)
                message.client_timestamp_from_router = object.client_timestamp_from_router >>> 0;
            if (object.client_timestamp_from_server != null)
                message.client_timestamp_from_server = object.client_timestamp_from_server >>> 0;
            if (object.router_gameserver_latency != null)
                message.router_gameserver_latency = object.router_gameserver_latency >>> 0;
            if (object.seconds_until_shutdown != null)
                message.seconds_until_shutdown = object.seconds_until_shutdown >>> 0;
            if (object.client_cookie != null)
                message.client_cookie = object.client_cookie >>> 0;
            if (object.seq_num_r2c != null)
                message.seq_num_r2c = object.seq_num_r2c >>> 0;
            if (object.seq_num_s2c != null)
                message.seq_num_s2c = object.seq_num_s2c >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramConnectionStatsRouterToClient message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramConnectionStatsRouterToClient
         * @static
         * @param {CMsgSteamDatagramConnectionStatsRouterToClient} message CMsgSteamDatagramConnectionStatsRouterToClient
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramConnectionStatsRouterToClient.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.r2c = null;
                object.s2c = null;
                object.client_timestamp_from_router = 0;
                object.client_timestamp_from_server = 0;
                object.router_gameserver_latency = 0;
                object.seconds_until_shutdown = 0;
                object.client_cookie = 0;
                object.seq_num_r2c = 0;
                object.seq_num_s2c = 0;
            }
            if (message.r2c != null && message.hasOwnProperty("r2c"))
                object.r2c = $root.CMsgSteamDatagramConnectionQuality.toObject(message.r2c, options);
            if (message.s2c != null && message.hasOwnProperty("s2c"))
                object.s2c = $root.CMsgSteamDatagramConnectionQuality.toObject(message.s2c, options);
            if (message.client_timestamp_from_router != null && message.hasOwnProperty("client_timestamp_from_router"))
                object.client_timestamp_from_router = message.client_timestamp_from_router;
            if (message.client_timestamp_from_server != null && message.hasOwnProperty("client_timestamp_from_server"))
                object.client_timestamp_from_server = message.client_timestamp_from_server;
            if (message.router_gameserver_latency != null && message.hasOwnProperty("router_gameserver_latency"))
                object.router_gameserver_latency = message.router_gameserver_latency;
            if (message.seconds_until_shutdown != null && message.hasOwnProperty("seconds_until_shutdown"))
                object.seconds_until_shutdown = message.seconds_until_shutdown;
            if (message.client_cookie != null && message.hasOwnProperty("client_cookie"))
                object.client_cookie = message.client_cookie;
            if (message.seq_num_r2c != null && message.hasOwnProperty("seq_num_r2c"))
                object.seq_num_r2c = message.seq_num_r2c;
            if (message.seq_num_s2c != null && message.hasOwnProperty("seq_num_s2c"))
                object.seq_num_s2c = message.seq_num_s2c;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramConnectionStatsRouterToClient to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramConnectionStatsRouterToClient
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramConnectionStatsRouterToClient.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramConnectionStatsRouterToClient;
    })();
    
    $root.CMsgSteamDatagramConnectionStatsRouterToServer = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramConnectionStatsRouterToServer.
         * @exports ICMsgSteamDatagramConnectionStatsRouterToServer
         * @interface ICMsgSteamDatagramConnectionStatsRouterToServer
         * @property {ICMsgSteamDatagramConnectionQuality|null} [r2s] CMsgSteamDatagramConnectionStatsRouterToServer r2s
         * @property {ICMsgSteamDatagramConnectionQuality|null} [c2s] CMsgSteamDatagramConnectionStatsRouterToServer c2s
         * @property {number|null} [client_timestamp] CMsgSteamDatagramConnectionStatsRouterToServer client_timestamp
         * @property {number|null} [router_timestamp] CMsgSteamDatagramConnectionStatsRouterToServer router_timestamp
         * @property {number|null} [seq_num_r2s] CMsgSteamDatagramConnectionStatsRouterToServer seq_num_r2s
         * @property {number|null} [seq_num_c2s] CMsgSteamDatagramConnectionStatsRouterToServer seq_num_c2s
         * @property {number|Long|null} [client_steam_id] CMsgSteamDatagramConnectionStatsRouterToServer client_steam_id
         * @property {number|null} [client_session_id] CMsgSteamDatagramConnectionStatsRouterToServer client_session_id
         */
    
        /**
         * Constructs a new CMsgSteamDatagramConnectionStatsRouterToServer.
         * @exports CMsgSteamDatagramConnectionStatsRouterToServer
         * @classdesc Represents a CMsgSteamDatagramConnectionStatsRouterToServer.
         * @implements ICMsgSteamDatagramConnectionStatsRouterToServer
         * @constructor
         * @param {ICMsgSteamDatagramConnectionStatsRouterToServer=} [properties] Properties to set
         */
        function CMsgSteamDatagramConnectionStatsRouterToServer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramConnectionStatsRouterToServer r2s.
         * @member {ICMsgSteamDatagramConnectionQuality|null|undefined} r2s
         * @memberof CMsgSteamDatagramConnectionStatsRouterToServer
         * @instance
         */
        CMsgSteamDatagramConnectionStatsRouterToServer.prototype.r2s = null;
    
        /**
         * CMsgSteamDatagramConnectionStatsRouterToServer c2s.
         * @member {ICMsgSteamDatagramConnectionQuality|null|undefined} c2s
         * @memberof CMsgSteamDatagramConnectionStatsRouterToServer
         * @instance
         */
        CMsgSteamDatagramConnectionStatsRouterToServer.prototype.c2s = null;
    
        /**
         * CMsgSteamDatagramConnectionStatsRouterToServer client_timestamp.
         * @member {number} client_timestamp
         * @memberof CMsgSteamDatagramConnectionStatsRouterToServer
         * @instance
         */
        CMsgSteamDatagramConnectionStatsRouterToServer.prototype.client_timestamp = 0;
    
        /**
         * CMsgSteamDatagramConnectionStatsRouterToServer router_timestamp.
         * @member {number} router_timestamp
         * @memberof CMsgSteamDatagramConnectionStatsRouterToServer
         * @instance
         */
        CMsgSteamDatagramConnectionStatsRouterToServer.prototype.router_timestamp = 0;
    
        /**
         * CMsgSteamDatagramConnectionStatsRouterToServer seq_num_r2s.
         * @member {number} seq_num_r2s
         * @memberof CMsgSteamDatagramConnectionStatsRouterToServer
         * @instance
         */
        CMsgSteamDatagramConnectionStatsRouterToServer.prototype.seq_num_r2s = 0;
    
        /**
         * CMsgSteamDatagramConnectionStatsRouterToServer seq_num_c2s.
         * @member {number} seq_num_c2s
         * @memberof CMsgSteamDatagramConnectionStatsRouterToServer
         * @instance
         */
        CMsgSteamDatagramConnectionStatsRouterToServer.prototype.seq_num_c2s = 0;
    
        /**
         * CMsgSteamDatagramConnectionStatsRouterToServer client_steam_id.
         * @member {number|Long} client_steam_id
         * @memberof CMsgSteamDatagramConnectionStatsRouterToServer
         * @instance
         */
        CMsgSteamDatagramConnectionStatsRouterToServer.prototype.client_steam_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramConnectionStatsRouterToServer client_session_id.
         * @member {number} client_session_id
         * @memberof CMsgSteamDatagramConnectionStatsRouterToServer
         * @instance
         */
        CMsgSteamDatagramConnectionStatsRouterToServer.prototype.client_session_id = 0;
    
        /**
         * Creates a new CMsgSteamDatagramConnectionStatsRouterToServer instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramConnectionStatsRouterToServer
         * @static
         * @param {ICMsgSteamDatagramConnectionStatsRouterToServer=} [properties] Properties to set
         * @returns {CMsgSteamDatagramConnectionStatsRouterToServer} CMsgSteamDatagramConnectionStatsRouterToServer instance
         */
        CMsgSteamDatagramConnectionStatsRouterToServer.create = function create(properties) {
            return new CMsgSteamDatagramConnectionStatsRouterToServer(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramConnectionStatsRouterToServer message. Does not implicitly {@link CMsgSteamDatagramConnectionStatsRouterToServer.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramConnectionStatsRouterToServer
         * @static
         * @param {ICMsgSteamDatagramConnectionStatsRouterToServer} message CMsgSteamDatagramConnectionStatsRouterToServer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramConnectionStatsRouterToServer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.r2s != null && Object.hasOwnProperty.call(message, "r2s"))
                $root.CMsgSteamDatagramConnectionQuality.encode(message.r2s, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.c2s != null && Object.hasOwnProperty.call(message, "c2s"))
                $root.CMsgSteamDatagramConnectionQuality.encode(message.c2s, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.client_timestamp != null && Object.hasOwnProperty.call(message, "client_timestamp"))
                writer.uint32(/* id 3, wireType 5 =*/29).fixed32(message.client_timestamp);
            if (message.router_timestamp != null && Object.hasOwnProperty.call(message, "router_timestamp"))
                writer.uint32(/* id 4, wireType 5 =*/37).fixed32(message.router_timestamp);
            if (message.seq_num_r2s != null && Object.hasOwnProperty.call(message, "seq_num_r2s"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.seq_num_r2s);
            if (message.seq_num_c2s != null && Object.hasOwnProperty.call(message, "seq_num_c2s"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.seq_num_c2s);
            if (message.client_steam_id != null && Object.hasOwnProperty.call(message, "client_steam_id"))
                writer.uint32(/* id 7, wireType 1 =*/57).fixed64(message.client_steam_id);
            if (message.client_session_id != null && Object.hasOwnProperty.call(message, "client_session_id"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.client_session_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramConnectionStatsRouterToServer message, length delimited. Does not implicitly {@link CMsgSteamDatagramConnectionStatsRouterToServer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramConnectionStatsRouterToServer
         * @static
         * @param {ICMsgSteamDatagramConnectionStatsRouterToServer} message CMsgSteamDatagramConnectionStatsRouterToServer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramConnectionStatsRouterToServer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramConnectionStatsRouterToServer message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramConnectionStatsRouterToServer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramConnectionStatsRouterToServer} CMsgSteamDatagramConnectionStatsRouterToServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramConnectionStatsRouterToServer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramConnectionStatsRouterToServer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.r2s = $root.CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.c2s = $root.CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.client_timestamp = reader.fixed32();
                    break;
                case 4:
                    message.router_timestamp = reader.fixed32();
                    break;
                case 5:
                    message.seq_num_r2s = reader.uint32();
                    break;
                case 6:
                    message.seq_num_c2s = reader.uint32();
                    break;
                case 7:
                    message.client_steam_id = reader.fixed64();
                    break;
                case 8:
                    message.client_session_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramConnectionStatsRouterToServer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramConnectionStatsRouterToServer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramConnectionStatsRouterToServer} CMsgSteamDatagramConnectionStatsRouterToServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramConnectionStatsRouterToServer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramConnectionStatsRouterToServer message.
         * @function verify
         * @memberof CMsgSteamDatagramConnectionStatsRouterToServer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramConnectionStatsRouterToServer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.r2s != null && message.hasOwnProperty("r2s")) {
                var error = $root.CMsgSteamDatagramConnectionQuality.verify(message.r2s);
                if (error)
                    return "r2s." + error;
            }
            if (message.c2s != null && message.hasOwnProperty("c2s")) {
                var error = $root.CMsgSteamDatagramConnectionQuality.verify(message.c2s);
                if (error)
                    return "c2s." + error;
            }
            if (message.client_timestamp != null && message.hasOwnProperty("client_timestamp"))
                if (!$util.isInteger(message.client_timestamp))
                    return "client_timestamp: integer expected";
            if (message.router_timestamp != null && message.hasOwnProperty("router_timestamp"))
                if (!$util.isInteger(message.router_timestamp))
                    return "router_timestamp: integer expected";
            if (message.seq_num_r2s != null && message.hasOwnProperty("seq_num_r2s"))
                if (!$util.isInteger(message.seq_num_r2s))
                    return "seq_num_r2s: integer expected";
            if (message.seq_num_c2s != null && message.hasOwnProperty("seq_num_c2s"))
                if (!$util.isInteger(message.seq_num_c2s))
                    return "seq_num_c2s: integer expected";
            if (message.client_steam_id != null && message.hasOwnProperty("client_steam_id"))
                if (!$util.isInteger(message.client_steam_id) && !(message.client_steam_id && $util.isInteger(message.client_steam_id.low) && $util.isInteger(message.client_steam_id.high)))
                    return "client_steam_id: integer|Long expected";
            if (message.client_session_id != null && message.hasOwnProperty("client_session_id"))
                if (!$util.isInteger(message.client_session_id))
                    return "client_session_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramConnectionStatsRouterToServer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramConnectionStatsRouterToServer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramConnectionStatsRouterToServer} CMsgSteamDatagramConnectionStatsRouterToServer
         */
        CMsgSteamDatagramConnectionStatsRouterToServer.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramConnectionStatsRouterToServer)
                return object;
            var message = new $root.CMsgSteamDatagramConnectionStatsRouterToServer();
            if (object.r2s != null) {
                if (typeof object.r2s !== "object")
                    throw TypeError(".CMsgSteamDatagramConnectionStatsRouterToServer.r2s: object expected");
                message.r2s = $root.CMsgSteamDatagramConnectionQuality.fromObject(object.r2s);
            }
            if (object.c2s != null) {
                if (typeof object.c2s !== "object")
                    throw TypeError(".CMsgSteamDatagramConnectionStatsRouterToServer.c2s: object expected");
                message.c2s = $root.CMsgSteamDatagramConnectionQuality.fromObject(object.c2s);
            }
            if (object.client_timestamp != null)
                message.client_timestamp = object.client_timestamp >>> 0;
            if (object.router_timestamp != null)
                message.router_timestamp = object.router_timestamp >>> 0;
            if (object.seq_num_r2s != null)
                message.seq_num_r2s = object.seq_num_r2s >>> 0;
            if (object.seq_num_c2s != null)
                message.seq_num_c2s = object.seq_num_c2s >>> 0;
            if (object.client_steam_id != null)
                if ($util.Long)
                    (message.client_steam_id = $util.Long.fromValue(object.client_steam_id)).unsigned = false;
                else if (typeof object.client_steam_id === "string")
                    message.client_steam_id = parseInt(object.client_steam_id, 10);
                else if (typeof object.client_steam_id === "number")
                    message.client_steam_id = object.client_steam_id;
                else if (typeof object.client_steam_id === "object")
                    message.client_steam_id = new $util.LongBits(object.client_steam_id.low >>> 0, object.client_steam_id.high >>> 0).toNumber();
            if (object.client_session_id != null)
                message.client_session_id = object.client_session_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramConnectionStatsRouterToServer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramConnectionStatsRouterToServer
         * @static
         * @param {CMsgSteamDatagramConnectionStatsRouterToServer} message CMsgSteamDatagramConnectionStatsRouterToServer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramConnectionStatsRouterToServer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.r2s = null;
                object.c2s = null;
                object.client_timestamp = 0;
                object.router_timestamp = 0;
                object.seq_num_r2s = 0;
                object.seq_num_c2s = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.client_steam_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.client_steam_id = options.longs === String ? "0" : 0;
                object.client_session_id = 0;
            }
            if (message.r2s != null && message.hasOwnProperty("r2s"))
                object.r2s = $root.CMsgSteamDatagramConnectionQuality.toObject(message.r2s, options);
            if (message.c2s != null && message.hasOwnProperty("c2s"))
                object.c2s = $root.CMsgSteamDatagramConnectionQuality.toObject(message.c2s, options);
            if (message.client_timestamp != null && message.hasOwnProperty("client_timestamp"))
                object.client_timestamp = message.client_timestamp;
            if (message.router_timestamp != null && message.hasOwnProperty("router_timestamp"))
                object.router_timestamp = message.router_timestamp;
            if (message.seq_num_r2s != null && message.hasOwnProperty("seq_num_r2s"))
                object.seq_num_r2s = message.seq_num_r2s;
            if (message.seq_num_c2s != null && message.hasOwnProperty("seq_num_c2s"))
                object.seq_num_c2s = message.seq_num_c2s;
            if (message.client_steam_id != null && message.hasOwnProperty("client_steam_id"))
                if (typeof message.client_steam_id === "number")
                    object.client_steam_id = options.longs === String ? String(message.client_steam_id) : message.client_steam_id;
                else
                    object.client_steam_id = options.longs === String ? $util.Long.prototype.toString.call(message.client_steam_id) : options.longs === Number ? new $util.LongBits(message.client_steam_id.low >>> 0, message.client_steam_id.high >>> 0).toNumber() : message.client_steam_id;
            if (message.client_session_id != null && message.hasOwnProperty("client_session_id"))
                object.client_session_id = message.client_session_id;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramConnectionStatsRouterToServer to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramConnectionStatsRouterToServer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramConnectionStatsRouterToServer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramConnectionStatsRouterToServer;
    })();
    
    $root.CMsgSteamDatagramConnectionStatsServerToRouter = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramConnectionStatsServerToRouter.
         * @exports ICMsgSteamDatagramConnectionStatsServerToRouter
         * @interface ICMsgSteamDatagramConnectionStatsServerToRouter
         * @property {ICMsgSteamDatagramConnectionQuality|null} [s2r] CMsgSteamDatagramConnectionStatsServerToRouter s2r
         * @property {ICMsgSteamDatagramConnectionQuality|null} [s2c] CMsgSteamDatagramConnectionStatsServerToRouter s2c
         * @property {number|null} [seq_num_s2r] CMsgSteamDatagramConnectionStatsServerToRouter seq_num_s2r
         * @property {number|null} [seq_num_s2c] CMsgSteamDatagramConnectionStatsServerToRouter seq_num_s2c
         * @property {number|Long|null} [client_steam_id] CMsgSteamDatagramConnectionStatsServerToRouter client_steam_id
         * @property {number|null} [client_session_id] CMsgSteamDatagramConnectionStatsServerToRouter client_session_id
         */
    
        /**
         * Constructs a new CMsgSteamDatagramConnectionStatsServerToRouter.
         * @exports CMsgSteamDatagramConnectionStatsServerToRouter
         * @classdesc Represents a CMsgSteamDatagramConnectionStatsServerToRouter.
         * @implements ICMsgSteamDatagramConnectionStatsServerToRouter
         * @constructor
         * @param {ICMsgSteamDatagramConnectionStatsServerToRouter=} [properties] Properties to set
         */
        function CMsgSteamDatagramConnectionStatsServerToRouter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramConnectionStatsServerToRouter s2r.
         * @member {ICMsgSteamDatagramConnectionQuality|null|undefined} s2r
         * @memberof CMsgSteamDatagramConnectionStatsServerToRouter
         * @instance
         */
        CMsgSteamDatagramConnectionStatsServerToRouter.prototype.s2r = null;
    
        /**
         * CMsgSteamDatagramConnectionStatsServerToRouter s2c.
         * @member {ICMsgSteamDatagramConnectionQuality|null|undefined} s2c
         * @memberof CMsgSteamDatagramConnectionStatsServerToRouter
         * @instance
         */
        CMsgSteamDatagramConnectionStatsServerToRouter.prototype.s2c = null;
    
        /**
         * CMsgSteamDatagramConnectionStatsServerToRouter seq_num_s2r.
         * @member {number} seq_num_s2r
         * @memberof CMsgSteamDatagramConnectionStatsServerToRouter
         * @instance
         */
        CMsgSteamDatagramConnectionStatsServerToRouter.prototype.seq_num_s2r = 0;
    
        /**
         * CMsgSteamDatagramConnectionStatsServerToRouter seq_num_s2c.
         * @member {number} seq_num_s2c
         * @memberof CMsgSteamDatagramConnectionStatsServerToRouter
         * @instance
         */
        CMsgSteamDatagramConnectionStatsServerToRouter.prototype.seq_num_s2c = 0;
    
        /**
         * CMsgSteamDatagramConnectionStatsServerToRouter client_steam_id.
         * @member {number|Long} client_steam_id
         * @memberof CMsgSteamDatagramConnectionStatsServerToRouter
         * @instance
         */
        CMsgSteamDatagramConnectionStatsServerToRouter.prototype.client_steam_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramConnectionStatsServerToRouter client_session_id.
         * @member {number} client_session_id
         * @memberof CMsgSteamDatagramConnectionStatsServerToRouter
         * @instance
         */
        CMsgSteamDatagramConnectionStatsServerToRouter.prototype.client_session_id = 0;
    
        /**
         * Creates a new CMsgSteamDatagramConnectionStatsServerToRouter instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramConnectionStatsServerToRouter
         * @static
         * @param {ICMsgSteamDatagramConnectionStatsServerToRouter=} [properties] Properties to set
         * @returns {CMsgSteamDatagramConnectionStatsServerToRouter} CMsgSteamDatagramConnectionStatsServerToRouter instance
         */
        CMsgSteamDatagramConnectionStatsServerToRouter.create = function create(properties) {
            return new CMsgSteamDatagramConnectionStatsServerToRouter(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramConnectionStatsServerToRouter message. Does not implicitly {@link CMsgSteamDatagramConnectionStatsServerToRouter.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramConnectionStatsServerToRouter
         * @static
         * @param {ICMsgSteamDatagramConnectionStatsServerToRouter} message CMsgSteamDatagramConnectionStatsServerToRouter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramConnectionStatsServerToRouter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.s2r != null && Object.hasOwnProperty.call(message, "s2r"))
                $root.CMsgSteamDatagramConnectionQuality.encode(message.s2r, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.s2c != null && Object.hasOwnProperty.call(message, "s2c"))
                $root.CMsgSteamDatagramConnectionQuality.encode(message.s2c, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.seq_num_s2r != null && Object.hasOwnProperty.call(message, "seq_num_s2r"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.seq_num_s2r);
            if (message.seq_num_s2c != null && Object.hasOwnProperty.call(message, "seq_num_s2c"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.seq_num_s2c);
            if (message.client_steam_id != null && Object.hasOwnProperty.call(message, "client_steam_id"))
                writer.uint32(/* id 5, wireType 1 =*/41).fixed64(message.client_steam_id);
            if (message.client_session_id != null && Object.hasOwnProperty.call(message, "client_session_id"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.client_session_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramConnectionStatsServerToRouter message, length delimited. Does not implicitly {@link CMsgSteamDatagramConnectionStatsServerToRouter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramConnectionStatsServerToRouter
         * @static
         * @param {ICMsgSteamDatagramConnectionStatsServerToRouter} message CMsgSteamDatagramConnectionStatsServerToRouter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramConnectionStatsServerToRouter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramConnectionStatsServerToRouter message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramConnectionStatsServerToRouter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramConnectionStatsServerToRouter} CMsgSteamDatagramConnectionStatsServerToRouter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramConnectionStatsServerToRouter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramConnectionStatsServerToRouter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.s2r = $root.CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.s2c = $root.CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.seq_num_s2r = reader.uint32();
                    break;
                case 4:
                    message.seq_num_s2c = reader.uint32();
                    break;
                case 5:
                    message.client_steam_id = reader.fixed64();
                    break;
                case 6:
                    message.client_session_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramConnectionStatsServerToRouter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramConnectionStatsServerToRouter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramConnectionStatsServerToRouter} CMsgSteamDatagramConnectionStatsServerToRouter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramConnectionStatsServerToRouter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramConnectionStatsServerToRouter message.
         * @function verify
         * @memberof CMsgSteamDatagramConnectionStatsServerToRouter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramConnectionStatsServerToRouter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.s2r != null && message.hasOwnProperty("s2r")) {
                var error = $root.CMsgSteamDatagramConnectionQuality.verify(message.s2r);
                if (error)
                    return "s2r." + error;
            }
            if (message.s2c != null && message.hasOwnProperty("s2c")) {
                var error = $root.CMsgSteamDatagramConnectionQuality.verify(message.s2c);
                if (error)
                    return "s2c." + error;
            }
            if (message.seq_num_s2r != null && message.hasOwnProperty("seq_num_s2r"))
                if (!$util.isInteger(message.seq_num_s2r))
                    return "seq_num_s2r: integer expected";
            if (message.seq_num_s2c != null && message.hasOwnProperty("seq_num_s2c"))
                if (!$util.isInteger(message.seq_num_s2c))
                    return "seq_num_s2c: integer expected";
            if (message.client_steam_id != null && message.hasOwnProperty("client_steam_id"))
                if (!$util.isInteger(message.client_steam_id) && !(message.client_steam_id && $util.isInteger(message.client_steam_id.low) && $util.isInteger(message.client_steam_id.high)))
                    return "client_steam_id: integer|Long expected";
            if (message.client_session_id != null && message.hasOwnProperty("client_session_id"))
                if (!$util.isInteger(message.client_session_id))
                    return "client_session_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramConnectionStatsServerToRouter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramConnectionStatsServerToRouter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramConnectionStatsServerToRouter} CMsgSteamDatagramConnectionStatsServerToRouter
         */
        CMsgSteamDatagramConnectionStatsServerToRouter.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramConnectionStatsServerToRouter)
                return object;
            var message = new $root.CMsgSteamDatagramConnectionStatsServerToRouter();
            if (object.s2r != null) {
                if (typeof object.s2r !== "object")
                    throw TypeError(".CMsgSteamDatagramConnectionStatsServerToRouter.s2r: object expected");
                message.s2r = $root.CMsgSteamDatagramConnectionQuality.fromObject(object.s2r);
            }
            if (object.s2c != null) {
                if (typeof object.s2c !== "object")
                    throw TypeError(".CMsgSteamDatagramConnectionStatsServerToRouter.s2c: object expected");
                message.s2c = $root.CMsgSteamDatagramConnectionQuality.fromObject(object.s2c);
            }
            if (object.seq_num_s2r != null)
                message.seq_num_s2r = object.seq_num_s2r >>> 0;
            if (object.seq_num_s2c != null)
                message.seq_num_s2c = object.seq_num_s2c >>> 0;
            if (object.client_steam_id != null)
                if ($util.Long)
                    (message.client_steam_id = $util.Long.fromValue(object.client_steam_id)).unsigned = false;
                else if (typeof object.client_steam_id === "string")
                    message.client_steam_id = parseInt(object.client_steam_id, 10);
                else if (typeof object.client_steam_id === "number")
                    message.client_steam_id = object.client_steam_id;
                else if (typeof object.client_steam_id === "object")
                    message.client_steam_id = new $util.LongBits(object.client_steam_id.low >>> 0, object.client_steam_id.high >>> 0).toNumber();
            if (object.client_session_id != null)
                message.client_session_id = object.client_session_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramConnectionStatsServerToRouter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramConnectionStatsServerToRouter
         * @static
         * @param {CMsgSteamDatagramConnectionStatsServerToRouter} message CMsgSteamDatagramConnectionStatsServerToRouter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramConnectionStatsServerToRouter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.s2r = null;
                object.s2c = null;
                object.seq_num_s2r = 0;
                object.seq_num_s2c = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.client_steam_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.client_steam_id = options.longs === String ? "0" : 0;
                object.client_session_id = 0;
            }
            if (message.s2r != null && message.hasOwnProperty("s2r"))
                object.s2r = $root.CMsgSteamDatagramConnectionQuality.toObject(message.s2r, options);
            if (message.s2c != null && message.hasOwnProperty("s2c"))
                object.s2c = $root.CMsgSteamDatagramConnectionQuality.toObject(message.s2c, options);
            if (message.seq_num_s2r != null && message.hasOwnProperty("seq_num_s2r"))
                object.seq_num_s2r = message.seq_num_s2r;
            if (message.seq_num_s2c != null && message.hasOwnProperty("seq_num_s2c"))
                object.seq_num_s2c = message.seq_num_s2c;
            if (message.client_steam_id != null && message.hasOwnProperty("client_steam_id"))
                if (typeof message.client_steam_id === "number")
                    object.client_steam_id = options.longs === String ? String(message.client_steam_id) : message.client_steam_id;
                else
                    object.client_steam_id = options.longs === String ? $util.Long.prototype.toString.call(message.client_steam_id) : options.longs === Number ? new $util.LongBits(message.client_steam_id.low >>> 0, message.client_steam_id.high >>> 0).toNumber() : message.client_steam_id;
            if (message.client_session_id != null && message.hasOwnProperty("client_session_id"))
                object.client_session_id = message.client_session_id;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramConnectionStatsServerToRouter to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramConnectionStatsServerToRouter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramConnectionStatsServerToRouter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramConnectionStatsServerToRouter;
    })();
    
    $root.CMsgSteamDatagramClientPingSampleRequest = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramClientPingSampleRequest.
         * @exports ICMsgSteamDatagramClientPingSampleRequest
         * @interface ICMsgSteamDatagramClientPingSampleRequest
         * @property {number|null} [client_cookie] CMsgSteamDatagramClientPingSampleRequest client_cookie
         */
    
        /**
         * Constructs a new CMsgSteamDatagramClientPingSampleRequest.
         * @exports CMsgSteamDatagramClientPingSampleRequest
         * @classdesc Represents a CMsgSteamDatagramClientPingSampleRequest.
         * @implements ICMsgSteamDatagramClientPingSampleRequest
         * @constructor
         * @param {ICMsgSteamDatagramClientPingSampleRequest=} [properties] Properties to set
         */
        function CMsgSteamDatagramClientPingSampleRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramClientPingSampleRequest client_cookie.
         * @member {number} client_cookie
         * @memberof CMsgSteamDatagramClientPingSampleRequest
         * @instance
         */
        CMsgSteamDatagramClientPingSampleRequest.prototype.client_cookie = 0;
    
        /**
         * Creates a new CMsgSteamDatagramClientPingSampleRequest instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramClientPingSampleRequest
         * @static
         * @param {ICMsgSteamDatagramClientPingSampleRequest=} [properties] Properties to set
         * @returns {CMsgSteamDatagramClientPingSampleRequest} CMsgSteamDatagramClientPingSampleRequest instance
         */
        CMsgSteamDatagramClientPingSampleRequest.create = function create(properties) {
            return new CMsgSteamDatagramClientPingSampleRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramClientPingSampleRequest message. Does not implicitly {@link CMsgSteamDatagramClientPingSampleRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramClientPingSampleRequest
         * @static
         * @param {ICMsgSteamDatagramClientPingSampleRequest} message CMsgSteamDatagramClientPingSampleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramClientPingSampleRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.client_cookie != null && Object.hasOwnProperty.call(message, "client_cookie"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.client_cookie);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramClientPingSampleRequest message, length delimited. Does not implicitly {@link CMsgSteamDatagramClientPingSampleRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramClientPingSampleRequest
         * @static
         * @param {ICMsgSteamDatagramClientPingSampleRequest} message CMsgSteamDatagramClientPingSampleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramClientPingSampleRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramClientPingSampleRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramClientPingSampleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramClientPingSampleRequest} CMsgSteamDatagramClientPingSampleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramClientPingSampleRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramClientPingSampleRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.client_cookie = reader.fixed32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramClientPingSampleRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramClientPingSampleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramClientPingSampleRequest} CMsgSteamDatagramClientPingSampleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramClientPingSampleRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramClientPingSampleRequest message.
         * @function verify
         * @memberof CMsgSteamDatagramClientPingSampleRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramClientPingSampleRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.client_cookie != null && message.hasOwnProperty("client_cookie"))
                if (!$util.isInteger(message.client_cookie))
                    return "client_cookie: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramClientPingSampleRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramClientPingSampleRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramClientPingSampleRequest} CMsgSteamDatagramClientPingSampleRequest
         */
        CMsgSteamDatagramClientPingSampleRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramClientPingSampleRequest)
                return object;
            var message = new $root.CMsgSteamDatagramClientPingSampleRequest();
            if (object.client_cookie != null)
                message.client_cookie = object.client_cookie >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramClientPingSampleRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramClientPingSampleRequest
         * @static
         * @param {CMsgSteamDatagramClientPingSampleRequest} message CMsgSteamDatagramClientPingSampleRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramClientPingSampleRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.client_cookie = 0;
            if (message.client_cookie != null && message.hasOwnProperty("client_cookie"))
                object.client_cookie = message.client_cookie;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramClientPingSampleRequest to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramClientPingSampleRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramClientPingSampleRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramClientPingSampleRequest;
    })();
    
    $root.CMsgSteamDatagramClientPingSampleReply = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramClientPingSampleReply.
         * @exports ICMsgSteamDatagramClientPingSampleReply
         * @interface ICMsgSteamDatagramClientPingSampleReply
         * @property {number|null} [client_cookie] CMsgSteamDatagramClientPingSampleReply client_cookie
         * @property {Array.<CMsgSteamDatagramClientPingSampleReply.IRoutingCluster>|null} [routing_clusters] CMsgSteamDatagramClientPingSampleReply routing_clusters
         */
    
        /**
         * Constructs a new CMsgSteamDatagramClientPingSampleReply.
         * @exports CMsgSteamDatagramClientPingSampleReply
         * @classdesc Represents a CMsgSteamDatagramClientPingSampleReply.
         * @implements ICMsgSteamDatagramClientPingSampleReply
         * @constructor
         * @param {ICMsgSteamDatagramClientPingSampleReply=} [properties] Properties to set
         */
        function CMsgSteamDatagramClientPingSampleReply(properties) {
            this.routing_clusters = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramClientPingSampleReply client_cookie.
         * @member {number} client_cookie
         * @memberof CMsgSteamDatagramClientPingSampleReply
         * @instance
         */
        CMsgSteamDatagramClientPingSampleReply.prototype.client_cookie = 0;
    
        /**
         * CMsgSteamDatagramClientPingSampleReply routing_clusters.
         * @member {Array.<CMsgSteamDatagramClientPingSampleReply.IRoutingCluster>} routing_clusters
         * @memberof CMsgSteamDatagramClientPingSampleReply
         * @instance
         */
        CMsgSteamDatagramClientPingSampleReply.prototype.routing_clusters = $util.emptyArray;
    
        /**
         * Creates a new CMsgSteamDatagramClientPingSampleReply instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramClientPingSampleReply
         * @static
         * @param {ICMsgSteamDatagramClientPingSampleReply=} [properties] Properties to set
         * @returns {CMsgSteamDatagramClientPingSampleReply} CMsgSteamDatagramClientPingSampleReply instance
         */
        CMsgSteamDatagramClientPingSampleReply.create = function create(properties) {
            return new CMsgSteamDatagramClientPingSampleReply(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramClientPingSampleReply message. Does not implicitly {@link CMsgSteamDatagramClientPingSampleReply.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramClientPingSampleReply
         * @static
         * @param {ICMsgSteamDatagramClientPingSampleReply} message CMsgSteamDatagramClientPingSampleReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramClientPingSampleReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.client_cookie != null && Object.hasOwnProperty.call(message, "client_cookie"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.client_cookie);
            if (message.routing_clusters != null && message.routing_clusters.length)
                for (var i = 0; i < message.routing_clusters.length; ++i)
                    $root.CMsgSteamDatagramClientPingSampleReply.RoutingCluster.encode(message.routing_clusters[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramClientPingSampleReply message, length delimited. Does not implicitly {@link CMsgSteamDatagramClientPingSampleReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramClientPingSampleReply
         * @static
         * @param {ICMsgSteamDatagramClientPingSampleReply} message CMsgSteamDatagramClientPingSampleReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramClientPingSampleReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramClientPingSampleReply message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramClientPingSampleReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramClientPingSampleReply} CMsgSteamDatagramClientPingSampleReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramClientPingSampleReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramClientPingSampleReply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.client_cookie = reader.fixed32();
                    break;
                case 2:
                    if (!(message.routing_clusters && message.routing_clusters.length))
                        message.routing_clusters = [];
                    message.routing_clusters.push($root.CMsgSteamDatagramClientPingSampleReply.RoutingCluster.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramClientPingSampleReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramClientPingSampleReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramClientPingSampleReply} CMsgSteamDatagramClientPingSampleReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramClientPingSampleReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramClientPingSampleReply message.
         * @function verify
         * @memberof CMsgSteamDatagramClientPingSampleReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramClientPingSampleReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.client_cookie != null && message.hasOwnProperty("client_cookie"))
                if (!$util.isInteger(message.client_cookie))
                    return "client_cookie: integer expected";
            if (message.routing_clusters != null && message.hasOwnProperty("routing_clusters")) {
                if (!Array.isArray(message.routing_clusters))
                    return "routing_clusters: array expected";
                for (var i = 0; i < message.routing_clusters.length; ++i) {
                    var error = $root.CMsgSteamDatagramClientPingSampleReply.RoutingCluster.verify(message.routing_clusters[i]);
                    if (error)
                        return "routing_clusters." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramClientPingSampleReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramClientPingSampleReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramClientPingSampleReply} CMsgSteamDatagramClientPingSampleReply
         */
        CMsgSteamDatagramClientPingSampleReply.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramClientPingSampleReply)
                return object;
            var message = new $root.CMsgSteamDatagramClientPingSampleReply();
            if (object.client_cookie != null)
                message.client_cookie = object.client_cookie >>> 0;
            if (object.routing_clusters) {
                if (!Array.isArray(object.routing_clusters))
                    throw TypeError(".CMsgSteamDatagramClientPingSampleReply.routing_clusters: array expected");
                message.routing_clusters = [];
                for (var i = 0; i < object.routing_clusters.length; ++i) {
                    if (typeof object.routing_clusters[i] !== "object")
                        throw TypeError(".CMsgSteamDatagramClientPingSampleReply.routing_clusters: object expected");
                    message.routing_clusters[i] = $root.CMsgSteamDatagramClientPingSampleReply.RoutingCluster.fromObject(object.routing_clusters[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramClientPingSampleReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramClientPingSampleReply
         * @static
         * @param {CMsgSteamDatagramClientPingSampleReply} message CMsgSteamDatagramClientPingSampleReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramClientPingSampleReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.routing_clusters = [];
            if (options.defaults)
                object.client_cookie = 0;
            if (message.client_cookie != null && message.hasOwnProperty("client_cookie"))
                object.client_cookie = message.client_cookie;
            if (message.routing_clusters && message.routing_clusters.length) {
                object.routing_clusters = [];
                for (var j = 0; j < message.routing_clusters.length; ++j)
                    object.routing_clusters[j] = $root.CMsgSteamDatagramClientPingSampleReply.RoutingCluster.toObject(message.routing_clusters[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramClientPingSampleReply to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramClientPingSampleReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramClientPingSampleReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgSteamDatagramClientPingSampleReply.RoutingCluster = (function() {
    
            /**
             * Properties of a RoutingCluster.
             * @memberof CMsgSteamDatagramClientPingSampleReply
             * @interface IRoutingCluster
             * @property {number|null} [id] RoutingCluster id
             * @property {number|null} [front_ping_ms] RoutingCluster front_ping_ms
             * @property {number|null} [e2e_ping_ms] RoutingCluster e2e_ping_ms
             */
    
            /**
             * Constructs a new RoutingCluster.
             * @memberof CMsgSteamDatagramClientPingSampleReply
             * @classdesc Represents a RoutingCluster.
             * @implements IRoutingCluster
             * @constructor
             * @param {CMsgSteamDatagramClientPingSampleReply.IRoutingCluster=} [properties] Properties to set
             */
            function RoutingCluster(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RoutingCluster id.
             * @member {number} id
             * @memberof CMsgSteamDatagramClientPingSampleReply.RoutingCluster
             * @instance
             */
            RoutingCluster.prototype.id = 0;
    
            /**
             * RoutingCluster front_ping_ms.
             * @member {number} front_ping_ms
             * @memberof CMsgSteamDatagramClientPingSampleReply.RoutingCluster
             * @instance
             */
            RoutingCluster.prototype.front_ping_ms = 0;
    
            /**
             * RoutingCluster e2e_ping_ms.
             * @member {number} e2e_ping_ms
             * @memberof CMsgSteamDatagramClientPingSampleReply.RoutingCluster
             * @instance
             */
            RoutingCluster.prototype.e2e_ping_ms = 0;
    
            /**
             * Creates a new RoutingCluster instance using the specified properties.
             * @function create
             * @memberof CMsgSteamDatagramClientPingSampleReply.RoutingCluster
             * @static
             * @param {CMsgSteamDatagramClientPingSampleReply.IRoutingCluster=} [properties] Properties to set
             * @returns {CMsgSteamDatagramClientPingSampleReply.RoutingCluster} RoutingCluster instance
             */
            RoutingCluster.create = function create(properties) {
                return new RoutingCluster(properties);
            };
    
            /**
             * Encodes the specified RoutingCluster message. Does not implicitly {@link CMsgSteamDatagramClientPingSampleReply.RoutingCluster.verify|verify} messages.
             * @function encode
             * @memberof CMsgSteamDatagramClientPingSampleReply.RoutingCluster
             * @static
             * @param {CMsgSteamDatagramClientPingSampleReply.IRoutingCluster} message RoutingCluster message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoutingCluster.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.id);
                if (message.front_ping_ms != null && Object.hasOwnProperty.call(message, "front_ping_ms"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.front_ping_ms);
                if (message.e2e_ping_ms != null && Object.hasOwnProperty.call(message, "e2e_ping_ms"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.e2e_ping_ms);
                return writer;
            };
    
            /**
             * Encodes the specified RoutingCluster message, length delimited. Does not implicitly {@link CMsgSteamDatagramClientPingSampleReply.RoutingCluster.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgSteamDatagramClientPingSampleReply.RoutingCluster
             * @static
             * @param {CMsgSteamDatagramClientPingSampleReply.IRoutingCluster} message RoutingCluster message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoutingCluster.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RoutingCluster message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgSteamDatagramClientPingSampleReply.RoutingCluster
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgSteamDatagramClientPingSampleReply.RoutingCluster} RoutingCluster
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoutingCluster.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramClientPingSampleReply.RoutingCluster();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.fixed32();
                        break;
                    case 2:
                        message.front_ping_ms = reader.uint32();
                        break;
                    case 3:
                        message.e2e_ping_ms = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RoutingCluster message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgSteamDatagramClientPingSampleReply.RoutingCluster
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgSteamDatagramClientPingSampleReply.RoutingCluster} RoutingCluster
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoutingCluster.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RoutingCluster message.
             * @function verify
             * @memberof CMsgSteamDatagramClientPingSampleReply.RoutingCluster
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RoutingCluster.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.front_ping_ms != null && message.hasOwnProperty("front_ping_ms"))
                    if (!$util.isInteger(message.front_ping_ms))
                        return "front_ping_ms: integer expected";
                if (message.e2e_ping_ms != null && message.hasOwnProperty("e2e_ping_ms"))
                    if (!$util.isInteger(message.e2e_ping_ms))
                        return "e2e_ping_ms: integer expected";
                return null;
            };
    
            /**
             * Creates a RoutingCluster message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgSteamDatagramClientPingSampleReply.RoutingCluster
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgSteamDatagramClientPingSampleReply.RoutingCluster} RoutingCluster
             */
            RoutingCluster.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgSteamDatagramClientPingSampleReply.RoutingCluster)
                    return object;
                var message = new $root.CMsgSteamDatagramClientPingSampleReply.RoutingCluster();
                if (object.id != null)
                    message.id = object.id >>> 0;
                if (object.front_ping_ms != null)
                    message.front_ping_ms = object.front_ping_ms >>> 0;
                if (object.e2e_ping_ms != null)
                    message.e2e_ping_ms = object.e2e_ping_ms >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a RoutingCluster message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgSteamDatagramClientPingSampleReply.RoutingCluster
             * @static
             * @param {CMsgSteamDatagramClientPingSampleReply.RoutingCluster} message RoutingCluster
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RoutingCluster.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.front_ping_ms = 0;
                    object.e2e_ping_ms = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.front_ping_ms != null && message.hasOwnProperty("front_ping_ms"))
                    object.front_ping_ms = message.front_ping_ms;
                if (message.e2e_ping_ms != null && message.hasOwnProperty("e2e_ping_ms"))
                    object.e2e_ping_ms = message.e2e_ping_ms;
                return object;
            };
    
            /**
             * Converts this RoutingCluster to JSON.
             * @function toJSON
             * @memberof CMsgSteamDatagramClientPingSampleReply.RoutingCluster
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RoutingCluster.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RoutingCluster;
        })();
    
        return CMsgSteamDatagramClientPingSampleReply;
    })();
    
    $root.CMsgSteamDatagramClientSwitchedPrimary = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramClientSwitchedPrimary.
         * @exports ICMsgSteamDatagramClientSwitchedPrimary
         * @interface ICMsgSteamDatagramClientSwitchedPrimary
         * @property {number|null} [client_cookie] CMsgSteamDatagramClientSwitchedPrimary client_cookie
         * @property {number|null} [from_ip] CMsgSteamDatagramClientSwitchedPrimary from_ip
         * @property {number|null} [from_port] CMsgSteamDatagramClientSwitchedPrimary from_port
         * @property {number|null} [from_router_cluster] CMsgSteamDatagramClientSwitchedPrimary from_router_cluster
         * @property {number|null} [from_active_time] CMsgSteamDatagramClientSwitchedPrimary from_active_time
         * @property {number|null} [from_active_packets_recv] CMsgSteamDatagramClientSwitchedPrimary from_active_packets_recv
         * @property {string|null} [from_dropped_reason] CMsgSteamDatagramClientSwitchedPrimary from_dropped_reason
         * @property {number|null} [gap_ms] CMsgSteamDatagramClientSwitchedPrimary gap_ms
         * @property {CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality|null} [from_quality_now] CMsgSteamDatagramClientSwitchedPrimary from_quality_now
         * @property {CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality|null} [to_quality_now] CMsgSteamDatagramClientSwitchedPrimary to_quality_now
         * @property {CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality|null} [from_quality_then] CMsgSteamDatagramClientSwitchedPrimary from_quality_then
         * @property {CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality|null} [to_quality_then] CMsgSteamDatagramClientSwitchedPrimary to_quality_then
         */
    
        /**
         * Constructs a new CMsgSteamDatagramClientSwitchedPrimary.
         * @exports CMsgSteamDatagramClientSwitchedPrimary
         * @classdesc Represents a CMsgSteamDatagramClientSwitchedPrimary.
         * @implements ICMsgSteamDatagramClientSwitchedPrimary
         * @constructor
         * @param {ICMsgSteamDatagramClientSwitchedPrimary=} [properties] Properties to set
         */
        function CMsgSteamDatagramClientSwitchedPrimary(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramClientSwitchedPrimary client_cookie.
         * @member {number} client_cookie
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @instance
         */
        CMsgSteamDatagramClientSwitchedPrimary.prototype.client_cookie = 0;
    
        /**
         * CMsgSteamDatagramClientSwitchedPrimary from_ip.
         * @member {number} from_ip
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @instance
         */
        CMsgSteamDatagramClientSwitchedPrimary.prototype.from_ip = 0;
    
        /**
         * CMsgSteamDatagramClientSwitchedPrimary from_port.
         * @member {number} from_port
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @instance
         */
        CMsgSteamDatagramClientSwitchedPrimary.prototype.from_port = 0;
    
        /**
         * CMsgSteamDatagramClientSwitchedPrimary from_router_cluster.
         * @member {number} from_router_cluster
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @instance
         */
        CMsgSteamDatagramClientSwitchedPrimary.prototype.from_router_cluster = 0;
    
        /**
         * CMsgSteamDatagramClientSwitchedPrimary from_active_time.
         * @member {number} from_active_time
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @instance
         */
        CMsgSteamDatagramClientSwitchedPrimary.prototype.from_active_time = 0;
    
        /**
         * CMsgSteamDatagramClientSwitchedPrimary from_active_packets_recv.
         * @member {number} from_active_packets_recv
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @instance
         */
        CMsgSteamDatagramClientSwitchedPrimary.prototype.from_active_packets_recv = 0;
    
        /**
         * CMsgSteamDatagramClientSwitchedPrimary from_dropped_reason.
         * @member {string} from_dropped_reason
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @instance
         */
        CMsgSteamDatagramClientSwitchedPrimary.prototype.from_dropped_reason = "";
    
        /**
         * CMsgSteamDatagramClientSwitchedPrimary gap_ms.
         * @member {number} gap_ms
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @instance
         */
        CMsgSteamDatagramClientSwitchedPrimary.prototype.gap_ms = 0;
    
        /**
         * CMsgSteamDatagramClientSwitchedPrimary from_quality_now.
         * @member {CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality|null|undefined} from_quality_now
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @instance
         */
        CMsgSteamDatagramClientSwitchedPrimary.prototype.from_quality_now = null;
    
        /**
         * CMsgSteamDatagramClientSwitchedPrimary to_quality_now.
         * @member {CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality|null|undefined} to_quality_now
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @instance
         */
        CMsgSteamDatagramClientSwitchedPrimary.prototype.to_quality_now = null;
    
        /**
         * CMsgSteamDatagramClientSwitchedPrimary from_quality_then.
         * @member {CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality|null|undefined} from_quality_then
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @instance
         */
        CMsgSteamDatagramClientSwitchedPrimary.prototype.from_quality_then = null;
    
        /**
         * CMsgSteamDatagramClientSwitchedPrimary to_quality_then.
         * @member {CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality|null|undefined} to_quality_then
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @instance
         */
        CMsgSteamDatagramClientSwitchedPrimary.prototype.to_quality_then = null;
    
        /**
         * Creates a new CMsgSteamDatagramClientSwitchedPrimary instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @static
         * @param {ICMsgSteamDatagramClientSwitchedPrimary=} [properties] Properties to set
         * @returns {CMsgSteamDatagramClientSwitchedPrimary} CMsgSteamDatagramClientSwitchedPrimary instance
         */
        CMsgSteamDatagramClientSwitchedPrimary.create = function create(properties) {
            return new CMsgSteamDatagramClientSwitchedPrimary(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramClientSwitchedPrimary message. Does not implicitly {@link CMsgSteamDatagramClientSwitchedPrimary.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @static
         * @param {ICMsgSteamDatagramClientSwitchedPrimary} message CMsgSteamDatagramClientSwitchedPrimary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramClientSwitchedPrimary.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.client_cookie != null && Object.hasOwnProperty.call(message, "client_cookie"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.client_cookie);
            if (message.from_ip != null && Object.hasOwnProperty.call(message, "from_ip"))
                writer.uint32(/* id 2, wireType 5 =*/21).fixed32(message.from_ip);
            if (message.from_port != null && Object.hasOwnProperty.call(message, "from_port"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.from_port);
            if (message.from_router_cluster != null && Object.hasOwnProperty.call(message, "from_router_cluster"))
                writer.uint32(/* id 4, wireType 5 =*/37).fixed32(message.from_router_cluster);
            if (message.from_active_time != null && Object.hasOwnProperty.call(message, "from_active_time"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.from_active_time);
            if (message.from_active_packets_recv != null && Object.hasOwnProperty.call(message, "from_active_packets_recv"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.from_active_packets_recv);
            if (message.from_dropped_reason != null && Object.hasOwnProperty.call(message, "from_dropped_reason"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.from_dropped_reason);
            if (message.gap_ms != null && Object.hasOwnProperty.call(message, "gap_ms"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.gap_ms);
            if (message.from_quality_now != null && Object.hasOwnProperty.call(message, "from_quality_now"))
                $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.encode(message.from_quality_now, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.to_quality_now != null && Object.hasOwnProperty.call(message, "to_quality_now"))
                $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.encode(message.to_quality_now, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.from_quality_then != null && Object.hasOwnProperty.call(message, "from_quality_then"))
                $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.encode(message.from_quality_then, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.to_quality_then != null && Object.hasOwnProperty.call(message, "to_quality_then"))
                $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.encode(message.to_quality_then, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramClientSwitchedPrimary message, length delimited. Does not implicitly {@link CMsgSteamDatagramClientSwitchedPrimary.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @static
         * @param {ICMsgSteamDatagramClientSwitchedPrimary} message CMsgSteamDatagramClientSwitchedPrimary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramClientSwitchedPrimary.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramClientSwitchedPrimary message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramClientSwitchedPrimary} CMsgSteamDatagramClientSwitchedPrimary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramClientSwitchedPrimary.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramClientSwitchedPrimary();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.client_cookie = reader.fixed32();
                    break;
                case 2:
                    message.from_ip = reader.fixed32();
                    break;
                case 3:
                    message.from_port = reader.uint32();
                    break;
                case 4:
                    message.from_router_cluster = reader.fixed32();
                    break;
                case 5:
                    message.from_active_time = reader.uint32();
                    break;
                case 6:
                    message.from_active_packets_recv = reader.uint32();
                    break;
                case 7:
                    message.from_dropped_reason = reader.string();
                    break;
                case 8:
                    message.gap_ms = reader.uint32();
                    break;
                case 9:
                    message.from_quality_now = $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.to_quality_now = $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.from_quality_then = $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.to_quality_then = $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramClientSwitchedPrimary message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramClientSwitchedPrimary} CMsgSteamDatagramClientSwitchedPrimary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramClientSwitchedPrimary.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramClientSwitchedPrimary message.
         * @function verify
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramClientSwitchedPrimary.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.client_cookie != null && message.hasOwnProperty("client_cookie"))
                if (!$util.isInteger(message.client_cookie))
                    return "client_cookie: integer expected";
            if (message.from_ip != null && message.hasOwnProperty("from_ip"))
                if (!$util.isInteger(message.from_ip))
                    return "from_ip: integer expected";
            if (message.from_port != null && message.hasOwnProperty("from_port"))
                if (!$util.isInteger(message.from_port))
                    return "from_port: integer expected";
            if (message.from_router_cluster != null && message.hasOwnProperty("from_router_cluster"))
                if (!$util.isInteger(message.from_router_cluster))
                    return "from_router_cluster: integer expected";
            if (message.from_active_time != null && message.hasOwnProperty("from_active_time"))
                if (!$util.isInteger(message.from_active_time))
                    return "from_active_time: integer expected";
            if (message.from_active_packets_recv != null && message.hasOwnProperty("from_active_packets_recv"))
                if (!$util.isInteger(message.from_active_packets_recv))
                    return "from_active_packets_recv: integer expected";
            if (message.from_dropped_reason != null && message.hasOwnProperty("from_dropped_reason"))
                if (!$util.isString(message.from_dropped_reason))
                    return "from_dropped_reason: string expected";
            if (message.gap_ms != null && message.hasOwnProperty("gap_ms"))
                if (!$util.isInteger(message.gap_ms))
                    return "gap_ms: integer expected";
            if (message.from_quality_now != null && message.hasOwnProperty("from_quality_now")) {
                var error = $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.verify(message.from_quality_now);
                if (error)
                    return "from_quality_now." + error;
            }
            if (message.to_quality_now != null && message.hasOwnProperty("to_quality_now")) {
                var error = $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.verify(message.to_quality_now);
                if (error)
                    return "to_quality_now." + error;
            }
            if (message.from_quality_then != null && message.hasOwnProperty("from_quality_then")) {
                var error = $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.verify(message.from_quality_then);
                if (error)
                    return "from_quality_then." + error;
            }
            if (message.to_quality_then != null && message.hasOwnProperty("to_quality_then")) {
                var error = $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.verify(message.to_quality_then);
                if (error)
                    return "to_quality_then." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramClientSwitchedPrimary message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramClientSwitchedPrimary} CMsgSteamDatagramClientSwitchedPrimary
         */
        CMsgSteamDatagramClientSwitchedPrimary.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramClientSwitchedPrimary)
                return object;
            var message = new $root.CMsgSteamDatagramClientSwitchedPrimary();
            if (object.client_cookie != null)
                message.client_cookie = object.client_cookie >>> 0;
            if (object.from_ip != null)
                message.from_ip = object.from_ip >>> 0;
            if (object.from_port != null)
                message.from_port = object.from_port >>> 0;
            if (object.from_router_cluster != null)
                message.from_router_cluster = object.from_router_cluster >>> 0;
            if (object.from_active_time != null)
                message.from_active_time = object.from_active_time >>> 0;
            if (object.from_active_packets_recv != null)
                message.from_active_packets_recv = object.from_active_packets_recv >>> 0;
            if (object.from_dropped_reason != null)
                message.from_dropped_reason = String(object.from_dropped_reason);
            if (object.gap_ms != null)
                message.gap_ms = object.gap_ms >>> 0;
            if (object.from_quality_now != null) {
                if (typeof object.from_quality_now !== "object")
                    throw TypeError(".CMsgSteamDatagramClientSwitchedPrimary.from_quality_now: object expected");
                message.from_quality_now = $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.fromObject(object.from_quality_now);
            }
            if (object.to_quality_now != null) {
                if (typeof object.to_quality_now !== "object")
                    throw TypeError(".CMsgSteamDatagramClientSwitchedPrimary.to_quality_now: object expected");
                message.to_quality_now = $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.fromObject(object.to_quality_now);
            }
            if (object.from_quality_then != null) {
                if (typeof object.from_quality_then !== "object")
                    throw TypeError(".CMsgSteamDatagramClientSwitchedPrimary.from_quality_then: object expected");
                message.from_quality_then = $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.fromObject(object.from_quality_then);
            }
            if (object.to_quality_then != null) {
                if (typeof object.to_quality_then !== "object")
                    throw TypeError(".CMsgSteamDatagramClientSwitchedPrimary.to_quality_then: object expected");
                message.to_quality_then = $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.fromObject(object.to_quality_then);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramClientSwitchedPrimary message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @static
         * @param {CMsgSteamDatagramClientSwitchedPrimary} message CMsgSteamDatagramClientSwitchedPrimary
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramClientSwitchedPrimary.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.client_cookie = 0;
                object.from_ip = 0;
                object.from_port = 0;
                object.from_router_cluster = 0;
                object.from_active_time = 0;
                object.from_active_packets_recv = 0;
                object.from_dropped_reason = "";
                object.gap_ms = 0;
                object.from_quality_now = null;
                object.to_quality_now = null;
                object.from_quality_then = null;
                object.to_quality_then = null;
            }
            if (message.client_cookie != null && message.hasOwnProperty("client_cookie"))
                object.client_cookie = message.client_cookie;
            if (message.from_ip != null && message.hasOwnProperty("from_ip"))
                object.from_ip = message.from_ip;
            if (message.from_port != null && message.hasOwnProperty("from_port"))
                object.from_port = message.from_port;
            if (message.from_router_cluster != null && message.hasOwnProperty("from_router_cluster"))
                object.from_router_cluster = message.from_router_cluster;
            if (message.from_active_time != null && message.hasOwnProperty("from_active_time"))
                object.from_active_time = message.from_active_time;
            if (message.from_active_packets_recv != null && message.hasOwnProperty("from_active_packets_recv"))
                object.from_active_packets_recv = message.from_active_packets_recv;
            if (message.from_dropped_reason != null && message.hasOwnProperty("from_dropped_reason"))
                object.from_dropped_reason = message.from_dropped_reason;
            if (message.gap_ms != null && message.hasOwnProperty("gap_ms"))
                object.gap_ms = message.gap_ms;
            if (message.from_quality_now != null && message.hasOwnProperty("from_quality_now"))
                object.from_quality_now = $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.toObject(message.from_quality_now, options);
            if (message.to_quality_now != null && message.hasOwnProperty("to_quality_now"))
                object.to_quality_now = $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.toObject(message.to_quality_now, options);
            if (message.from_quality_then != null && message.hasOwnProperty("from_quality_then"))
                object.from_quality_then = $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.toObject(message.from_quality_then, options);
            if (message.to_quality_then != null && message.hasOwnProperty("to_quality_then"))
                object.to_quality_then = $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.toObject(message.to_quality_then, options);
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramClientSwitchedPrimary to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramClientSwitchedPrimary
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramClientSwitchedPrimary.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgSteamDatagramClientSwitchedPrimary.RouterQuality = (function() {
    
            /**
             * Properties of a RouterQuality.
             * @memberof CMsgSteamDatagramClientSwitchedPrimary
             * @interface IRouterQuality
             * @property {number|null} [score] RouterQuality score
             * @property {number|null} [front_ping] RouterQuality front_ping
             * @property {number|null} [back_ping] RouterQuality back_ping
             * @property {number|null} [seconds_until_down] RouterQuality seconds_until_down
             */
    
            /**
             * Constructs a new RouterQuality.
             * @memberof CMsgSteamDatagramClientSwitchedPrimary
             * @classdesc Represents a RouterQuality.
             * @implements IRouterQuality
             * @constructor
             * @param {CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality=} [properties] Properties to set
             */
            function RouterQuality(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RouterQuality score.
             * @member {number} score
             * @memberof CMsgSteamDatagramClientSwitchedPrimary.RouterQuality
             * @instance
             */
            RouterQuality.prototype.score = 0;
    
            /**
             * RouterQuality front_ping.
             * @member {number} front_ping
             * @memberof CMsgSteamDatagramClientSwitchedPrimary.RouterQuality
             * @instance
             */
            RouterQuality.prototype.front_ping = 0;
    
            /**
             * RouterQuality back_ping.
             * @member {number} back_ping
             * @memberof CMsgSteamDatagramClientSwitchedPrimary.RouterQuality
             * @instance
             */
            RouterQuality.prototype.back_ping = 0;
    
            /**
             * RouterQuality seconds_until_down.
             * @member {number} seconds_until_down
             * @memberof CMsgSteamDatagramClientSwitchedPrimary.RouterQuality
             * @instance
             */
            RouterQuality.prototype.seconds_until_down = 0;
    
            /**
             * Creates a new RouterQuality instance using the specified properties.
             * @function create
             * @memberof CMsgSteamDatagramClientSwitchedPrimary.RouterQuality
             * @static
             * @param {CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality=} [properties] Properties to set
             * @returns {CMsgSteamDatagramClientSwitchedPrimary.RouterQuality} RouterQuality instance
             */
            RouterQuality.create = function create(properties) {
                return new RouterQuality(properties);
            };
    
            /**
             * Encodes the specified RouterQuality message. Does not implicitly {@link CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.verify|verify} messages.
             * @function encode
             * @memberof CMsgSteamDatagramClientSwitchedPrimary.RouterQuality
             * @static
             * @param {CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality} message RouterQuality message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RouterQuality.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.score);
                if (message.front_ping != null && Object.hasOwnProperty.call(message, "front_ping"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.front_ping);
                if (message.back_ping != null && Object.hasOwnProperty.call(message, "back_ping"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.back_ping);
                if (message.seconds_until_down != null && Object.hasOwnProperty.call(message, "seconds_until_down"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.seconds_until_down);
                return writer;
            };
    
            /**
             * Encodes the specified RouterQuality message, length delimited. Does not implicitly {@link CMsgSteamDatagramClientSwitchedPrimary.RouterQuality.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgSteamDatagramClientSwitchedPrimary.RouterQuality
             * @static
             * @param {CMsgSteamDatagramClientSwitchedPrimary.IRouterQuality} message RouterQuality message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RouterQuality.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RouterQuality message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgSteamDatagramClientSwitchedPrimary.RouterQuality
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgSteamDatagramClientSwitchedPrimary.RouterQuality} RouterQuality
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RouterQuality.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.score = reader.uint32();
                        break;
                    case 2:
                        message.front_ping = reader.uint32();
                        break;
                    case 3:
                        message.back_ping = reader.uint32();
                        break;
                    case 4:
                        message.seconds_until_down = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RouterQuality message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgSteamDatagramClientSwitchedPrimary.RouterQuality
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgSteamDatagramClientSwitchedPrimary.RouterQuality} RouterQuality
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RouterQuality.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RouterQuality message.
             * @function verify
             * @memberof CMsgSteamDatagramClientSwitchedPrimary.RouterQuality
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RouterQuality.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.score != null && message.hasOwnProperty("score"))
                    if (!$util.isInteger(message.score))
                        return "score: integer expected";
                if (message.front_ping != null && message.hasOwnProperty("front_ping"))
                    if (!$util.isInteger(message.front_ping))
                        return "front_ping: integer expected";
                if (message.back_ping != null && message.hasOwnProperty("back_ping"))
                    if (!$util.isInteger(message.back_ping))
                        return "back_ping: integer expected";
                if (message.seconds_until_down != null && message.hasOwnProperty("seconds_until_down"))
                    if (!$util.isInteger(message.seconds_until_down))
                        return "seconds_until_down: integer expected";
                return null;
            };
    
            /**
             * Creates a RouterQuality message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgSteamDatagramClientSwitchedPrimary.RouterQuality
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgSteamDatagramClientSwitchedPrimary.RouterQuality} RouterQuality
             */
            RouterQuality.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality)
                    return object;
                var message = new $root.CMsgSteamDatagramClientSwitchedPrimary.RouterQuality();
                if (object.score != null)
                    message.score = object.score >>> 0;
                if (object.front_ping != null)
                    message.front_ping = object.front_ping >>> 0;
                if (object.back_ping != null)
                    message.back_ping = object.back_ping >>> 0;
                if (object.seconds_until_down != null)
                    message.seconds_until_down = object.seconds_until_down >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a RouterQuality message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgSteamDatagramClientSwitchedPrimary.RouterQuality
             * @static
             * @param {CMsgSteamDatagramClientSwitchedPrimary.RouterQuality} message RouterQuality
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RouterQuality.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.score = 0;
                    object.front_ping = 0;
                    object.back_ping = 0;
                    object.seconds_until_down = 0;
                }
                if (message.score != null && message.hasOwnProperty("score"))
                    object.score = message.score;
                if (message.front_ping != null && message.hasOwnProperty("front_ping"))
                    object.front_ping = message.front_ping;
                if (message.back_ping != null && message.hasOwnProperty("back_ping"))
                    object.back_ping = message.back_ping;
                if (message.seconds_until_down != null && message.hasOwnProperty("seconds_until_down"))
                    object.seconds_until_down = message.seconds_until_down;
                return object;
            };
    
            /**
             * Converts this RouterQuality to JSON.
             * @function toJSON
             * @memberof CMsgSteamDatagramClientSwitchedPrimary.RouterQuality
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RouterQuality.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RouterQuality;
        })();
    
        return CMsgSteamDatagramClientSwitchedPrimary;
    })();

    return $root;
});
