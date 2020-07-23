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
    
    $root.RemoteClient = (function() {
    
        /**
         * Constructs a new RemoteClient service.
         * @exports RemoteClient
         * @classdesc Represents a RemoteClient
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function RemoteClient(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (RemoteClient.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = RemoteClient;
    
        /**
         * Creates new RemoteClient service using the specified rpc implementation.
         * @function create
         * @memberof RemoteClient
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {RemoteClient} RPC service. Useful where requests and/or responses are streamed.
         */
        RemoteClient.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link RemoteClient#getPairingInfo}.
         * @memberof RemoteClient
         * @typedef GetPairingInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CRemoteClient_GetPairingInfo_Response} [response] CRemoteClient_GetPairingInfo_Response
         */
    
        /**
         * Calls GetPairingInfo.
         * @function getPairingInfo
         * @memberof RemoteClient
         * @instance
         * @param {ICRemoteClient_GetPairingInfo_Request} request CRemoteClient_GetPairingInfo_Request message or plain object
         * @param {RemoteClient.GetPairingInfoCallback} callback Node-style callback called with the error, if any, and CRemoteClient_GetPairingInfo_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RemoteClient.prototype.getPairingInfo = function getPairingInfo(request, callback) {
            return this.rpcCall(getPairingInfo, $root.CRemoteClient_GetPairingInfo_Request, $root.CRemoteClient_GetPairingInfo_Response, request, callback);
        }, "name", { value: "GetPairingInfo" });
    
        /**
         * Calls GetPairingInfo.
         * @function getPairingInfo
         * @memberof RemoteClient
         * @instance
         * @param {ICRemoteClient_GetPairingInfo_Request} request CRemoteClient_GetPairingInfo_Request message or plain object
         * @returns {Promise<CRemoteClient_GetPairingInfo_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link RemoteClient#notifyOnline}.
         * @memberof RemoteClient
         * @typedef NotifyOnlineCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls NotifyOnline.
         * @function notifyOnline
         * @memberof RemoteClient
         * @instance
         * @param {ICRemoteClient_Online_Notification} request CRemoteClient_Online_Notification message or plain object
         * @param {RemoteClient.NotifyOnlineCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RemoteClient.prototype.notifyOnline = function notifyOnline(request, callback) {
            return this.rpcCall(notifyOnline, $root.CRemoteClient_Online_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "NotifyOnline" });
    
        /**
         * Calls NotifyOnline.
         * @function notifyOnline
         * @memberof RemoteClient
         * @instance
         * @param {ICRemoteClient_Online_Notification} request CRemoteClient_Online_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link RemoteClient#notifyReplyPacket}.
         * @memberof RemoteClient
         * @typedef NotifyReplyPacketCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls NotifyReplyPacket.
         * @function notifyReplyPacket
         * @memberof RemoteClient
         * @instance
         * @param {ICRemoteClient_ReplyPacket_Notification} request CRemoteClient_ReplyPacket_Notification message or plain object
         * @param {RemoteClient.NotifyReplyPacketCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RemoteClient.prototype.notifyReplyPacket = function notifyReplyPacket(request, callback) {
            return this.rpcCall(notifyReplyPacket, $root.CRemoteClient_ReplyPacket_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "NotifyReplyPacket" });
    
        /**
         * Calls NotifyReplyPacket.
         * @function notifyReplyPacket
         * @memberof RemoteClient
         * @instance
         * @param {ICRemoteClient_ReplyPacket_Notification} request CRemoteClient_ReplyPacket_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link RemoteClient#allocateTURNServer}.
         * @memberof RemoteClient
         * @typedef AllocateTURNServerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CRemoteClient_AllocateTURNServer_Response} [response] CRemoteClient_AllocateTURNServer_Response
         */
    
        /**
         * Calls AllocateTURNServer.
         * @function allocateTURNServer
         * @memberof RemoteClient
         * @instance
         * @param {ICRemoteClient_AllocateTURNServer_Request} request CRemoteClient_AllocateTURNServer_Request message or plain object
         * @param {RemoteClient.AllocateTURNServerCallback} callback Node-style callback called with the error, if any, and CRemoteClient_AllocateTURNServer_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RemoteClient.prototype.allocateTURNServer = function allocateTURNServer(request, callback) {
            return this.rpcCall(allocateTURNServer, $root.CRemoteClient_AllocateTURNServer_Request, $root.CRemoteClient_AllocateTURNServer_Response, request, callback);
        }, "name", { value: "AllocateTURNServer" });
    
        /**
         * Calls AllocateTURNServer.
         * @function allocateTURNServer
         * @memberof RemoteClient
         * @instance
         * @param {ICRemoteClient_AllocateTURNServer_Request} request CRemoteClient_AllocateTURNServer_Request message or plain object
         * @returns {Promise<CRemoteClient_AllocateTURNServer_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link RemoteClient#allocateRelayServer}.
         * @memberof RemoteClient
         * @typedef AllocateRelayServerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CRemoteClient_AllocateRelayServer_Response} [response] CRemoteClient_AllocateRelayServer_Response
         */
    
        /**
         * Calls AllocateRelayServer.
         * @function allocateRelayServer
         * @memberof RemoteClient
         * @instance
         * @param {ICRemoteClient_AllocateRelayServer_Request} request CRemoteClient_AllocateRelayServer_Request message or plain object
         * @param {RemoteClient.AllocateRelayServerCallback} callback Node-style callback called with the error, if any, and CRemoteClient_AllocateRelayServer_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RemoteClient.prototype.allocateRelayServer = function allocateRelayServer(request, callback) {
            return this.rpcCall(allocateRelayServer, $root.CRemoteClient_AllocateRelayServer_Request, $root.CRemoteClient_AllocateRelayServer_Response, request, callback);
        }, "name", { value: "AllocateRelayServer" });
    
        /**
         * Calls AllocateRelayServer.
         * @function allocateRelayServer
         * @memberof RemoteClient
         * @instance
         * @param {ICRemoteClient_AllocateRelayServer_Request} request CRemoteClient_AllocateRelayServer_Request message or plain object
         * @returns {Promise<CRemoteClient_AllocateRelayServer_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link RemoteClient#allocateSDR}.
         * @memberof RemoteClient
         * @typedef AllocateSDRCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CRemoteClient_AllocateSDR_Response} [response] CRemoteClient_AllocateSDR_Response
         */
    
        /**
         * Calls AllocateSDR.
         * @function allocateSDR
         * @memberof RemoteClient
         * @instance
         * @param {ICRemoteClient_AllocateSDR_Request} request CRemoteClient_AllocateSDR_Request message or plain object
         * @param {RemoteClient.AllocateSDRCallback} callback Node-style callback called with the error, if any, and CRemoteClient_AllocateSDR_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RemoteClient.prototype.allocateSDR = function allocateSDR(request, callback) {
            return this.rpcCall(allocateSDR, $root.CRemoteClient_AllocateSDR_Request, $root.CRemoteClient_AllocateSDR_Response, request, callback);
        }, "name", { value: "AllocateSDR" });
    
        /**
         * Calls AllocateSDR.
         * @function allocateSDR
         * @memberof RemoteClient
         * @instance
         * @param {ICRemoteClient_AllocateSDR_Request} request CRemoteClient_AllocateSDR_Request message or plain object
         * @returns {Promise<CRemoteClient_AllocateSDR_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link RemoteClient#sendSteamBroadcastPacket}.
         * @memberof RemoteClient
         * @typedef SendSteamBroadcastPacketCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls SendSteamBroadcastPacket.
         * @function sendSteamBroadcastPacket
         * @memberof RemoteClient
         * @instance
         * @param {ICRemoteClient_SteamBroadcast_Notification} request CRemoteClient_SteamBroadcast_Notification message or plain object
         * @param {RemoteClient.SendSteamBroadcastPacketCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RemoteClient.prototype.sendSteamBroadcastPacket = function sendSteamBroadcastPacket(request, callback) {
            return this.rpcCall(sendSteamBroadcastPacket, $root.CRemoteClient_SteamBroadcast_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "SendSteamBroadcastPacket" });
    
        /**
         * Calls SendSteamBroadcastPacket.
         * @function sendSteamBroadcastPacket
         * @memberof RemoteClient
         * @instance
         * @param {ICRemoteClient_SteamBroadcast_Notification} request CRemoteClient_SteamBroadcast_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link RemoteClient#sendSteamToSteamPacket}.
         * @memberof RemoteClient
         * @typedef SendSteamToSteamPacketCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls SendSteamToSteamPacket.
         * @function sendSteamToSteamPacket
         * @memberof RemoteClient
         * @instance
         * @param {ICRemoteClient_SteamToSteam_Notification} request CRemoteClient_SteamToSteam_Notification message or plain object
         * @param {RemoteClient.SendSteamToSteamPacketCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RemoteClient.prototype.sendSteamToSteamPacket = function sendSteamToSteamPacket(request, callback) {
            return this.rpcCall(sendSteamToSteamPacket, $root.CRemoteClient_SteamToSteam_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "SendSteamToSteamPacket" });
    
        /**
         * Calls SendSteamToSteamPacket.
         * @function sendSteamToSteamPacket
         * @memberof RemoteClient
         * @instance
         * @param {ICRemoteClient_SteamToSteam_Notification} request CRemoteClient_SteamToSteam_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link RemoteClient#sendRemotePlaySessionStarted}.
         * @memberof RemoteClient
         * @typedef SendRemotePlaySessionStartedCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CRemotePlay_SessionStarted_Response} [response] CRemotePlay_SessionStarted_Response
         */
    
        /**
         * Calls SendRemotePlaySessionStarted.
         * @function sendRemotePlaySessionStarted
         * @memberof RemoteClient
         * @instance
         * @param {ICRemotePlay_SessionStarted_Request} request CRemotePlay_SessionStarted_Request message or plain object
         * @param {RemoteClient.SendRemotePlaySessionStartedCallback} callback Node-style callback called with the error, if any, and CRemotePlay_SessionStarted_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RemoteClient.prototype.sendRemotePlaySessionStarted = function sendRemotePlaySessionStarted(request, callback) {
            return this.rpcCall(sendRemotePlaySessionStarted, $root.CRemotePlay_SessionStarted_Request, $root.CRemotePlay_SessionStarted_Response, request, callback);
        }, "name", { value: "SendRemotePlaySessionStarted" });
    
        /**
         * Calls SendRemotePlaySessionStarted.
         * @function sendRemotePlaySessionStarted
         * @memberof RemoteClient
         * @instance
         * @param {ICRemotePlay_SessionStarted_Request} request CRemotePlay_SessionStarted_Request message or plain object
         * @returns {Promise<CRemotePlay_SessionStarted_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link RemoteClient#sendRemotePlaySessionStopped}.
         * @memberof RemoteClient
         * @typedef SendRemotePlaySessionStoppedCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls SendRemotePlaySessionStopped.
         * @function sendRemotePlaySessionStopped
         * @memberof RemoteClient
         * @instance
         * @param {ICRemotePlay_SessionStopped_Notification} request CRemotePlay_SessionStopped_Notification message or plain object
         * @param {RemoteClient.SendRemotePlaySessionStoppedCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RemoteClient.prototype.sendRemotePlaySessionStopped = function sendRemotePlaySessionStopped(request, callback) {
            return this.rpcCall(sendRemotePlaySessionStopped, $root.CRemotePlay_SessionStopped_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "SendRemotePlaySessionStopped" });
    
        /**
         * Calls SendRemotePlaySessionStopped.
         * @function sendRemotePlaySessionStopped
         * @memberof RemoteClient
         * @instance
         * @param {ICRemotePlay_SessionStopped_Notification} request CRemotePlay_SessionStopped_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link RemoteClient#sendRemotePlayTogetherPacket}.
         * @memberof RemoteClient
         * @typedef SendRemotePlayTogetherPacketCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls SendRemotePlayTogetherPacket.
         * @function sendRemotePlayTogetherPacket
         * @memberof RemoteClient
         * @instance
         * @param {ICRemotePlayTogether_Notification} request CRemotePlayTogether_Notification message or plain object
         * @param {RemoteClient.SendRemotePlayTogetherPacketCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RemoteClient.prototype.sendRemotePlayTogetherPacket = function sendRemotePlayTogetherPacket(request, callback) {
            return this.rpcCall(sendRemotePlayTogetherPacket, $root.CRemotePlayTogether_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "SendRemotePlayTogetherPacket" });
    
        /**
         * Calls SendRemotePlayTogetherPacket.
         * @function sendRemotePlayTogetherPacket
         * @memberof RemoteClient
         * @instance
         * @param {ICRemotePlayTogether_Notification} request CRemotePlayTogether_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        return RemoteClient;
    })();
    
    $root.RemoteClientSteamClient = (function() {
    
        /**
         * Constructs a new RemoteClientSteamClient service.
         * @exports RemoteClientSteamClient
         * @classdesc Represents a RemoteClientSteamClient
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function RemoteClientSteamClient(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (RemoteClientSteamClient.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = RemoteClientSteamClient;
    
        /**
         * Creates new RemoteClientSteamClient service using the specified rpc implementation.
         * @function create
         * @memberof RemoteClientSteamClient
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {RemoteClientSteamClient} RPC service. Useful where requests and/or responses are streamed.
         */
        RemoteClientSteamClient.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link RemoteClientSteamClient#notifyRegisterStatusUpdate}.
         * @memberof RemoteClientSteamClient
         * @typedef NotifyRegisterStatusUpdateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls NotifyRegisterStatusUpdate.
         * @function notifyRegisterStatusUpdate
         * @memberof RemoteClientSteamClient
         * @instance
         * @param {ICRemoteClient_RegisterStatusUpdate_Notification} request CRemoteClient_RegisterStatusUpdate_Notification message or plain object
         * @param {RemoteClientSteamClient.NotifyRegisterStatusUpdateCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RemoteClientSteamClient.prototype.notifyRegisterStatusUpdate = function notifyRegisterStatusUpdate(request, callback) {
            return this.rpcCall(notifyRegisterStatusUpdate, $root.CRemoteClient_RegisterStatusUpdate_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "NotifyRegisterStatusUpdate" });
    
        /**
         * Calls NotifyRegisterStatusUpdate.
         * @function notifyRegisterStatusUpdate
         * @memberof RemoteClientSteamClient
         * @instance
         * @param {ICRemoteClient_RegisterStatusUpdate_Notification} request CRemoteClient_RegisterStatusUpdate_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link RemoteClientSteamClient#notifyUnregisterStatusUpdate}.
         * @memberof RemoteClientSteamClient
         * @typedef NotifyUnregisterStatusUpdateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls NotifyUnregisterStatusUpdate.
         * @function notifyUnregisterStatusUpdate
         * @memberof RemoteClientSteamClient
         * @instance
         * @param {ICRemoteClient_UnregisterStatusUpdate_Notification} request CRemoteClient_UnregisterStatusUpdate_Notification message or plain object
         * @param {RemoteClientSteamClient.NotifyUnregisterStatusUpdateCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RemoteClientSteamClient.prototype.notifyUnregisterStatusUpdate = function notifyUnregisterStatusUpdate(request, callback) {
            return this.rpcCall(notifyUnregisterStatusUpdate, $root.CRemoteClient_UnregisterStatusUpdate_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "NotifyUnregisterStatusUpdate" });
    
        /**
         * Calls NotifyUnregisterStatusUpdate.
         * @function notifyUnregisterStatusUpdate
         * @memberof RemoteClientSteamClient
         * @instance
         * @param {ICRemoteClient_UnregisterStatusUpdate_Notification} request CRemoteClient_UnregisterStatusUpdate_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link RemoteClientSteamClient#notifyRemotePacket}.
         * @memberof RemoteClientSteamClient
         * @typedef NotifyRemotePacketCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls NotifyRemotePacket.
         * @function notifyRemotePacket
         * @memberof RemoteClientSteamClient
         * @instance
         * @param {ICRemoteClient_RemotePacket_Notification} request CRemoteClient_RemotePacket_Notification message or plain object
         * @param {RemoteClientSteamClient.NotifyRemotePacketCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RemoteClientSteamClient.prototype.notifyRemotePacket = function notifyRemotePacket(request, callback) {
            return this.rpcCall(notifyRemotePacket, $root.CRemoteClient_RemotePacket_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "NotifyRemotePacket" });
    
        /**
         * Calls NotifyRemotePacket.
         * @function notifyRemotePacket
         * @memberof RemoteClientSteamClient
         * @instance
         * @param {ICRemoteClient_RemotePacket_Notification} request CRemoteClient_RemotePacket_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link RemoteClientSteamClient#notifySteamBroadcastPacket}.
         * @memberof RemoteClientSteamClient
         * @typedef NotifySteamBroadcastPacketCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls NotifySteamBroadcastPacket.
         * @function notifySteamBroadcastPacket
         * @memberof RemoteClientSteamClient
         * @instance
         * @param {ICRemoteClient_SteamBroadcast_Notification} request CRemoteClient_SteamBroadcast_Notification message or plain object
         * @param {RemoteClientSteamClient.NotifySteamBroadcastPacketCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RemoteClientSteamClient.prototype.notifySteamBroadcastPacket = function notifySteamBroadcastPacket(request, callback) {
            return this.rpcCall(notifySteamBroadcastPacket, $root.CRemoteClient_SteamBroadcast_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "NotifySteamBroadcastPacket" });
    
        /**
         * Calls NotifySteamBroadcastPacket.
         * @function notifySteamBroadcastPacket
         * @memberof RemoteClientSteamClient
         * @instance
         * @param {ICRemoteClient_SteamBroadcast_Notification} request CRemoteClient_SteamBroadcast_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link RemoteClientSteamClient#notifySteamToSteamPacket}.
         * @memberof RemoteClientSteamClient
         * @typedef NotifySteamToSteamPacketCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls NotifySteamToSteamPacket.
         * @function notifySteamToSteamPacket
         * @memberof RemoteClientSteamClient
         * @instance
         * @param {ICRemoteClient_SteamToSteam_Notification} request CRemoteClient_SteamToSteam_Notification message or plain object
         * @param {RemoteClientSteamClient.NotifySteamToSteamPacketCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RemoteClientSteamClient.prototype.notifySteamToSteamPacket = function notifySteamToSteamPacket(request, callback) {
            return this.rpcCall(notifySteamToSteamPacket, $root.CRemoteClient_SteamToSteam_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "NotifySteamToSteamPacket" });
    
        /**
         * Calls NotifySteamToSteamPacket.
         * @function notifySteamToSteamPacket
         * @memberof RemoteClientSteamClient
         * @instance
         * @param {ICRemoteClient_SteamToSteam_Notification} request CRemoteClient_SteamToSteam_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link RemoteClientSteamClient#notifyRemotePlayTogetherPacket}.
         * @memberof RemoteClientSteamClient
         * @typedef NotifyRemotePlayTogetherPacketCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls NotifyRemotePlayTogetherPacket.
         * @function notifyRemotePlayTogetherPacket
         * @memberof RemoteClientSteamClient
         * @instance
         * @param {ICRemotePlayTogether_Notification} request CRemotePlayTogether_Notification message or plain object
         * @param {RemoteClientSteamClient.NotifyRemotePlayTogetherPacketCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RemoteClientSteamClient.prototype.notifyRemotePlayTogetherPacket = function notifyRemotePlayTogetherPacket(request, callback) {
            return this.rpcCall(notifyRemotePlayTogetherPacket, $root.CRemotePlayTogether_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "NotifyRemotePlayTogetherPacket" });
    
        /**
         * Calls NotifyRemotePlayTogetherPacket.
         * @function notifyRemotePlayTogetherPacket
         * @memberof RemoteClientSteamClient
         * @instance
         * @param {ICRemotePlayTogether_Notification} request CRemotePlayTogether_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        return RemoteClientSteamClient;
    })();
    
    /**
     * EProtoExecutionSite enum.
     * @exports EProtoExecutionSite
     * @enum {number}
     * @property {number} k_EProtoExecutionSiteUnknown=0 k_EProtoExecutionSiteUnknown value
     * @property {number} k_EProtoExecutionSiteSteamClient=2 k_EProtoExecutionSiteSteamClient value
     */
    $root.EProtoExecutionSite = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EProtoExecutionSiteUnknown"] = 0;
        values[valuesById[2] = "k_EProtoExecutionSiteSteamClient"] = 2;
        return values;
    })();
    
    $root.NoResponse = (function() {
    
        /**
         * Properties of a NoResponse.
         * @exports INoResponse
         * @interface INoResponse
         */
    
        /**
         * Constructs a new NoResponse.
         * @exports NoResponse
         * @classdesc Represents a NoResponse.
         * @implements INoResponse
         * @constructor
         * @param {INoResponse=} [properties] Properties to set
         */
        function NoResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new NoResponse instance using the specified properties.
         * @function create
         * @memberof NoResponse
         * @static
         * @param {INoResponse=} [properties] Properties to set
         * @returns {NoResponse} NoResponse instance
         */
        NoResponse.create = function create(properties) {
            return new NoResponse(properties);
        };
    
        /**
         * Encodes the specified NoResponse message. Does not implicitly {@link NoResponse.verify|verify} messages.
         * @function encode
         * @memberof NoResponse
         * @static
         * @param {INoResponse} message NoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified NoResponse message, length delimited. Does not implicitly {@link NoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NoResponse
         * @static
         * @param {INoResponse} message NoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a NoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof NoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NoResponse} NoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NoResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a NoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NoResponse} NoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a NoResponse message.
         * @function verify
         * @memberof NoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a NoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NoResponse} NoResponse
         */
        NoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.NoResponse)
                return object;
            return new $root.NoResponse();
        };
    
        /**
         * Creates a plain object from a NoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NoResponse
         * @static
         * @param {NoResponse} message NoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NoResponse.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this NoResponse to JSON.
         * @function toJSON
         * @memberof NoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return NoResponse;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.FileDescriptorSet = (function() {
    
                /**
                 * Properties of a FileDescriptorSet.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorSet
                 * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
                 */
    
                /**
                 * Constructs a new FileDescriptorSet.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorSet.
                 * @implements IFileDescriptorSet
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 */
                function FileDescriptorSet(properties) {
                    this.file = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorSet file.
                 * @member {Array.<google.protobuf.IFileDescriptorProto>} file
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 */
                FileDescriptorSet.prototype.file = $util.emptyArray;
    
                /**
                 * Creates a new FileDescriptorSet instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
                 */
                FileDescriptorSet.create = function create(properties) {
                    return new FileDescriptorSet(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.file != null && message.file.length)
                        for (var i = 0; i < message.file.length; ++i)
                            $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.file && message.file.length))
                                message.file = [];
                            message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorSet message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorSet.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.file != null && message.hasOwnProperty("file")) {
                        if (!Array.isArray(message.file))
                            return "file: array expected";
                        for (var i = 0; i < message.file.length; ++i) {
                            var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                            if (error)
                                return "file." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 */
                FileDescriptorSet.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorSet)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorSet();
                    if (object.file) {
                        if (!Array.isArray(object.file))
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                        message.file = [];
                        for (var i = 0; i < object.file.length; ++i) {
                            if (typeof object.file[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                            message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorSet.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.file = [];
                    if (message.file && message.file.length) {
                        object.file = [];
                        for (var j = 0; j < message.file.length; ++j)
                            object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorSet to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorSet.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FileDescriptorSet;
            })();
    
            protobuf.FileDescriptorProto = (function() {
    
                /**
                 * Properties of a FileDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorProto
                 * @property {string|null} [name] FileDescriptorProto name
                 * @property {string|null} ["package"] FileDescriptorProto package
                 * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
                 * @property {Array.<number>|null} [public_dependency] FileDescriptorProto public_dependency
                 * @property {Array.<number>|null} [weak_dependency] FileDescriptorProto weak_dependency
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [message_type] FileDescriptorProto message_type
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enum_type] FileDescriptorProto enum_type
                 * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
                 * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
                 * @property {google.protobuf.ISourceCodeInfo|null} [source_code_info] FileDescriptorProto source_code_info
                 * @property {string|null} [syntax] FileDescriptorProto syntax
                 */
    
                /**
                 * Constructs a new FileDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorProto.
                 * @implements IFileDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 */
                function FileDescriptorProto(properties) {
                    this.dependency = [];
                    this.public_dependency = [];
                    this.weak_dependency = [];
                    this.message_type = [];
                    this.enum_type = [];
                    this.service = [];
                    this.extension = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.name = "";
    
                /**
                 * FileDescriptorProto package.
                 * @member {string} package
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype["package"] = "";
    
                /**
                 * FileDescriptorProto dependency.
                 * @member {Array.<string>} dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto public_dependency.
                 * @member {Array.<number>} public_dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.public_dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto weak_dependency.
                 * @member {Array.<number>} weak_dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.weak_dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto message_type.
                 * @member {Array.<google.protobuf.IDescriptorProto>} message_type
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.message_type = $util.emptyArray;
    
                /**
                 * FileDescriptorProto enum_type.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enum_type
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.enum_type = $util.emptyArray;
    
                /**
                 * FileDescriptorProto service.
                 * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.service = $util.emptyArray;
    
                /**
                 * FileDescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * FileDescriptorProto options.
                 * @member {google.protobuf.IFileOptions|null|undefined} options
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.options = null;
    
                /**
                 * FileDescriptorProto source_code_info.
                 * @member {google.protobuf.ISourceCodeInfo|null|undefined} source_code_info
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.source_code_info = null;
    
                /**
                 * FileDescriptorProto syntax.
                 * @member {string} syntax
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.syntax = "";
    
                /**
                 * Creates a new FileDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
                 */
                FileDescriptorProto.create = function create(properties) {
                    return new FileDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                    if (message.dependency != null && message.dependency.length)
                        for (var i = 0; i < message.dependency.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                    if (message.message_type != null && message.message_type.length)
                        for (var i = 0; i < message.message_type.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.message_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.enum_type != null && message.enum_type.length)
                        for (var i = 0; i < message.enum_type.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.service != null && message.service.length)
                        for (var i = 0; i < message.service.length; ++i)
                            $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.source_code_info != null && Object.hasOwnProperty.call(message, "source_code_info"))
                        $root.google.protobuf.SourceCodeInfo.encode(message.source_code_info, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.public_dependency != null && message.public_dependency.length)
                        for (var i = 0; i < message.public_dependency.length; ++i)
                            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.public_dependency[i]);
                    if (message.weak_dependency != null && message.weak_dependency.length)
                        for (var i = 0; i < message.weak_dependency.length; ++i)
                            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weak_dependency[i]);
                    if (message.syntax != null && Object.hasOwnProperty.call(message, "syntax"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message["package"] = reader.string();
                            break;
                        case 3:
                            if (!(message.dependency && message.dependency.length))
                                message.dependency = [];
                            message.dependency.push(reader.string());
                            break;
                        case 10:
                            if (!(message.public_dependency && message.public_dependency.length))
                                message.public_dependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.public_dependency.push(reader.int32());
                            } else
                                message.public_dependency.push(reader.int32());
                            break;
                        case 11:
                            if (!(message.weak_dependency && message.weak_dependency.length))
                                message.weak_dependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.weak_dependency.push(reader.int32());
                            } else
                                message.weak_dependency.push(reader.int32());
                            break;
                        case 4:
                            if (!(message.message_type && message.message_type.length))
                                message.message_type = [];
                            message.message_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.enum_type && message.enum_type.length))
                                message.enum_type = [];
                            message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.service && message.service.length))
                                message.service = [];
                            message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.source_code_info = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                            break;
                        case 12:
                            message.syntax = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        if (!$util.isString(message["package"]))
                            return "package: string expected";
                    if (message.dependency != null && message.hasOwnProperty("dependency")) {
                        if (!Array.isArray(message.dependency))
                            return "dependency: array expected";
                        for (var i = 0; i < message.dependency.length; ++i)
                            if (!$util.isString(message.dependency[i]))
                                return "dependency: string[] expected";
                    }
                    if (message.public_dependency != null && message.hasOwnProperty("public_dependency")) {
                        if (!Array.isArray(message.public_dependency))
                            return "public_dependency: array expected";
                        for (var i = 0; i < message.public_dependency.length; ++i)
                            if (!$util.isInteger(message.public_dependency[i]))
                                return "public_dependency: integer[] expected";
                    }
                    if (message.weak_dependency != null && message.hasOwnProperty("weak_dependency")) {
                        if (!Array.isArray(message.weak_dependency))
                            return "weak_dependency: array expected";
                        for (var i = 0; i < message.weak_dependency.length; ++i)
                            if (!$util.isInteger(message.weak_dependency[i]))
                                return "weak_dependency: integer[] expected";
                    }
                    if (message.message_type != null && message.hasOwnProperty("message_type")) {
                        if (!Array.isArray(message.message_type))
                            return "message_type: array expected";
                        for (var i = 0; i < message.message_type.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.message_type[i]);
                            if (error)
                                return "message_type." + error;
                        }
                    }
                    if (message.enum_type != null && message.hasOwnProperty("enum_type")) {
                        if (!Array.isArray(message.enum_type))
                            return "enum_type: array expected";
                        for (var i = 0; i < message.enum_type.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i]);
                            if (error)
                                return "enum_type." + error;
                        }
                    }
                    if (message.service != null && message.hasOwnProperty("service")) {
                        if (!Array.isArray(message.service))
                            return "service: array expected";
                        for (var i = 0; i < message.service.length; ++i) {
                            var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                            if (error)
                                return "service." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FileOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.source_code_info != null && message.hasOwnProperty("source_code_info")) {
                        var error = $root.google.protobuf.SourceCodeInfo.verify(message.source_code_info);
                        if (error)
                            return "source_code_info." + error;
                    }
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        if (!$util.isString(message.syntax))
                            return "syntax: string expected";
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 */
                FileDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object["package"] != null)
                        message["package"] = String(object["package"]);
                    if (object.dependency) {
                        if (!Array.isArray(object.dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                        message.dependency = [];
                        for (var i = 0; i < object.dependency.length; ++i)
                            message.dependency[i] = String(object.dependency[i]);
                    }
                    if (object.public_dependency) {
                        if (!Array.isArray(object.public_dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.public_dependency: array expected");
                        message.public_dependency = [];
                        for (var i = 0; i < object.public_dependency.length; ++i)
                            message.public_dependency[i] = object.public_dependency[i] | 0;
                    }
                    if (object.weak_dependency) {
                        if (!Array.isArray(object.weak_dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.weak_dependency: array expected");
                        message.weak_dependency = [];
                        for (var i = 0; i < object.weak_dependency.length; ++i)
                            message.weak_dependency[i] = object.weak_dependency[i] | 0;
                    }
                    if (object.message_type) {
                        if (!Array.isArray(object.message_type))
                            throw TypeError(".google.protobuf.FileDescriptorProto.message_type: array expected");
                        message.message_type = [];
                        for (var i = 0; i < object.message_type.length; ++i) {
                            if (typeof object.message_type[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.message_type: object expected");
                            message.message_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.message_type[i]);
                        }
                    }
                    if (object.enum_type) {
                        if (!Array.isArray(object.enum_type))
                            throw TypeError(".google.protobuf.FileDescriptorProto.enum_type: array expected");
                        message.enum_type = [];
                        for (var i = 0; i < object.enum_type.length; ++i) {
                            if (typeof object.enum_type[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.enum_type: object expected");
                            message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i]);
                        }
                    }
                    if (object.service) {
                        if (!Array.isArray(object.service))
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                        message.service = [];
                        for (var i = 0; i < object.service.length; ++i) {
                            if (typeof object.service[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                            message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                    }
                    if (object.source_code_info != null) {
                        if (typeof object.source_code_info !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.source_code_info: object expected");
                        message.source_code_info = $root.google.protobuf.SourceCodeInfo.fromObject(object.source_code_info);
                    }
                    if (object.syntax != null)
                        message.syntax = String(object.syntax);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.dependency = [];
                        object.message_type = [];
                        object.enum_type = [];
                        object.service = [];
                        object.extension = [];
                        object.public_dependency = [];
                        object.weak_dependency = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object["package"] = "";
                        object.options = null;
                        object.source_code_info = null;
                        object.syntax = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        object["package"] = message["package"];
                    if (message.dependency && message.dependency.length) {
                        object.dependency = [];
                        for (var j = 0; j < message.dependency.length; ++j)
                            object.dependency[j] = message.dependency[j];
                    }
                    if (message.message_type && message.message_type.length) {
                        object.message_type = [];
                        for (var j = 0; j < message.message_type.length; ++j)
                            object.message_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.message_type[j], options);
                    }
                    if (message.enum_type && message.enum_type.length) {
                        object.enum_type = [];
                        for (var j = 0; j < message.enum_type.length; ++j)
                            object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options);
                    }
                    if (message.service && message.service.length) {
                        object.service = [];
                        for (var j = 0; j < message.service.length; ++j)
                            object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                    if (message.source_code_info != null && message.hasOwnProperty("source_code_info"))
                        object.source_code_info = $root.google.protobuf.SourceCodeInfo.toObject(message.source_code_info, options);
                    if (message.public_dependency && message.public_dependency.length) {
                        object.public_dependency = [];
                        for (var j = 0; j < message.public_dependency.length; ++j)
                            object.public_dependency[j] = message.public_dependency[j];
                    }
                    if (message.weak_dependency && message.weak_dependency.length) {
                        object.weak_dependency = [];
                        for (var j = 0; j < message.weak_dependency.length; ++j)
                            object.weak_dependency[j] = message.weak_dependency[j];
                    }
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        object.syntax = message.syntax;
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FileDescriptorProto;
            })();
    
            protobuf.DescriptorProto = (function() {
    
                /**
                 * Properties of a DescriptorProto.
                 * @memberof google.protobuf
                 * @interface IDescriptorProto
                 * @property {string|null} [name] DescriptorProto name
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [nested_type] DescriptorProto nested_type
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enum_type] DescriptorProto enum_type
                 * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extension_range] DescriptorProto extension_range
                 * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneof_decl] DescriptorProto oneof_decl
                 * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
                 * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reserved_range] DescriptorProto reserved_range
                 * @property {Array.<string>|null} [reserved_name] DescriptorProto reserved_name
                 */
    
                /**
                 * Constructs a new DescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a DescriptorProto.
                 * @implements IDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 */
                function DescriptorProto(properties) {
                    this.field = [];
                    this.extension = [];
                    this.nested_type = [];
                    this.enum_type = [];
                    this.extension_range = [];
                    this.oneof_decl = [];
                    this.reserved_range = [];
                    this.reserved_name = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.name = "";
    
                /**
                 * DescriptorProto field.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.field = $util.emptyArray;
    
                /**
                 * DescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * DescriptorProto nested_type.
                 * @member {Array.<google.protobuf.IDescriptorProto>} nested_type
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.nested_type = $util.emptyArray;
    
                /**
                 * DescriptorProto enum_type.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enum_type
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.enum_type = $util.emptyArray;
    
                /**
                 * DescriptorProto extension_range.
                 * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extension_range
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension_range = $util.emptyArray;
    
                /**
                 * DescriptorProto oneof_decl.
                 * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneof_decl
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.oneof_decl = $util.emptyArray;
    
                /**
                 * DescriptorProto options.
                 * @member {google.protobuf.IMessageOptions|null|undefined} options
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.options = null;
    
                /**
                 * DescriptorProto reserved_range.
                 * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reserved_range
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reserved_range = $util.emptyArray;
    
                /**
                 * DescriptorProto reserved_name.
                 * @member {Array.<string>} reserved_name
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reserved_name = $util.emptyArray;
    
                /**
                 * Creates a new DescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
                 */
                DescriptorProto.create = function create(properties) {
                    return new DescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.field != null && message.field.length)
                        for (var i = 0; i < message.field.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.nested_type != null && message.nested_type.length)
                        for (var i = 0; i < message.nested_type.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.nested_type[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.enum_type != null && message.enum_type.length)
                        for (var i = 0; i < message.enum_type.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.extension_range != null && message.extension_range.length)
                        for (var i = 0; i < message.extension_range.length; ++i)
                            $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extension_range[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.oneof_decl != null && message.oneof_decl.length)
                        for (var i = 0; i < message.oneof_decl.length; ++i)
                            $root.google.protobuf.OneofDescriptorProto.encode(message.oneof_decl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.reserved_range != null && message.reserved_range.length)
                        for (var i = 0; i < message.reserved_range.length; ++i)
                            $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reserved_range[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.reserved_name != null && message.reserved_name.length)
                        for (var i = 0; i < message.reserved_name.length; ++i)
                            writer.uint32(/* id 10, wireType 2 =*/82).string(message.reserved_name[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.field && message.field.length))
                                message.field = [];
                            message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            if (!(message.nested_type && message.nested_type.length))
                                message.nested_type = [];
                            message.nested_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            if (!(message.enum_type && message.enum_type.length))
                                message.enum_type = [];
                            message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.extension_range && message.extension_range.length))
                                message.extension_range = [];
                            message.extension_range.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            if (!(message.oneof_decl && message.oneof_decl.length))
                                message.oneof_decl = [];
                            message.oneof_decl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                            break;
                        case 9:
                            if (!(message.reserved_range && message.reserved_range.length))
                                message.reserved_range = [];
                            message.reserved_range.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                            break;
                        case 10:
                            if (!(message.reserved_name && message.reserved_name.length))
                                message.reserved_name = [];
                            message.reserved_name.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.field != null && message.hasOwnProperty("field")) {
                        if (!Array.isArray(message.field))
                            return "field: array expected";
                        for (var i = 0; i < message.field.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                            if (error)
                                return "field." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.nested_type != null && message.hasOwnProperty("nested_type")) {
                        if (!Array.isArray(message.nested_type))
                            return "nested_type: array expected";
                        for (var i = 0; i < message.nested_type.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.nested_type[i]);
                            if (error)
                                return "nested_type." + error;
                        }
                    }
                    if (message.enum_type != null && message.hasOwnProperty("enum_type")) {
                        if (!Array.isArray(message.enum_type))
                            return "enum_type: array expected";
                        for (var i = 0; i < message.enum_type.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i]);
                            if (error)
                                return "enum_type." + error;
                        }
                    }
                    if (message.extension_range != null && message.hasOwnProperty("extension_range")) {
                        if (!Array.isArray(message.extension_range))
                            return "extension_range: array expected";
                        for (var i = 0; i < message.extension_range.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extension_range[i]);
                            if (error)
                                return "extension_range." + error;
                        }
                    }
                    if (message.oneof_decl != null && message.hasOwnProperty("oneof_decl")) {
                        if (!Array.isArray(message.oneof_decl))
                            return "oneof_decl: array expected";
                        for (var i = 0; i < message.oneof_decl.length; ++i) {
                            var error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneof_decl[i]);
                            if (error)
                                return "oneof_decl." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MessageOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.reserved_range != null && message.hasOwnProperty("reserved_range")) {
                        if (!Array.isArray(message.reserved_range))
                            return "reserved_range: array expected";
                        for (var i = 0; i < message.reserved_range.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reserved_range[i]);
                            if (error)
                                return "reserved_range." + error;
                        }
                    }
                    if (message.reserved_name != null && message.hasOwnProperty("reserved_name")) {
                        if (!Array.isArray(message.reserved_name))
                            return "reserved_name: array expected";
                        for (var i = 0; i < message.reserved_name.length; ++i)
                            if (!$util.isString(message.reserved_name[i]))
                                return "reserved_name: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 */
                DescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.field) {
                        if (!Array.isArray(object.field))
                            throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                        message.field = [];
                        for (var i = 0; i < object.field.length; ++i) {
                            if (typeof object.field[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                            message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.nested_type) {
                        if (!Array.isArray(object.nested_type))
                            throw TypeError(".google.protobuf.DescriptorProto.nested_type: array expected");
                        message.nested_type = [];
                        for (var i = 0; i < object.nested_type.length; ++i) {
                            if (typeof object.nested_type[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.nested_type: object expected");
                            message.nested_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nested_type[i]);
                        }
                    }
                    if (object.enum_type) {
                        if (!Array.isArray(object.enum_type))
                            throw TypeError(".google.protobuf.DescriptorProto.enum_type: array expected");
                        message.enum_type = [];
                        for (var i = 0; i < object.enum_type.length; ++i) {
                            if (typeof object.enum_type[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.enum_type: object expected");
                            message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i]);
                        }
                    }
                    if (object.extension_range) {
                        if (!Array.isArray(object.extension_range))
                            throw TypeError(".google.protobuf.DescriptorProto.extension_range: array expected");
                        message.extension_range = [];
                        for (var i = 0; i < object.extension_range.length; ++i) {
                            if (typeof object.extension_range[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension_range: object expected");
                            message.extension_range[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extension_range[i]);
                        }
                    }
                    if (object.oneof_decl) {
                        if (!Array.isArray(object.oneof_decl))
                            throw TypeError(".google.protobuf.DescriptorProto.oneof_decl: array expected");
                        message.oneof_decl = [];
                        for (var i = 0; i < object.oneof_decl.length; ++i) {
                            if (typeof object.oneof_decl[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.oneof_decl: object expected");
                            message.oneof_decl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneof_decl[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                    }
                    if (object.reserved_range) {
                        if (!Array.isArray(object.reserved_range))
                            throw TypeError(".google.protobuf.DescriptorProto.reserved_range: array expected");
                        message.reserved_range = [];
                        for (var i = 0; i < object.reserved_range.length; ++i) {
                            if (typeof object.reserved_range[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.reserved_range: object expected");
                            message.reserved_range[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reserved_range[i]);
                        }
                    }
                    if (object.reserved_name) {
                        if (!Array.isArray(object.reserved_name))
                            throw TypeError(".google.protobuf.DescriptorProto.reserved_name: array expected");
                        message.reserved_name = [];
                        for (var i = 0; i < object.reserved_name.length; ++i)
                            message.reserved_name[i] = String(object.reserved_name[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.DescriptorProto} message DescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.field = [];
                        object.nested_type = [];
                        object.enum_type = [];
                        object.extension_range = [];
                        object.extension = [];
                        object.oneof_decl = [];
                        object.reserved_range = [];
                        object.reserved_name = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.field && message.field.length) {
                        object.field = [];
                        for (var j = 0; j < message.field.length; ++j)
                            object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                    }
                    if (message.nested_type && message.nested_type.length) {
                        object.nested_type = [];
                        for (var j = 0; j < message.nested_type.length; ++j)
                            object.nested_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.nested_type[j], options);
                    }
                    if (message.enum_type && message.enum_type.length) {
                        object.enum_type = [];
                        for (var j = 0; j < message.enum_type.length; ++j)
                            object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options);
                    }
                    if (message.extension_range && message.extension_range.length) {
                        object.extension_range = [];
                        for (var j = 0; j < message.extension_range.length; ++j)
                            object.extension_range[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extension_range[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                    if (message.oneof_decl && message.oneof_decl.length) {
                        object.oneof_decl = [];
                        for (var j = 0; j < message.oneof_decl.length; ++j)
                            object.oneof_decl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneof_decl[j], options);
                    }
                    if (message.reserved_range && message.reserved_range.length) {
                        object.reserved_range = [];
                        for (var j = 0; j < message.reserved_range.length; ++j)
                            object.reserved_range[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reserved_range[j], options);
                    }
                    if (message.reserved_name && message.reserved_name.length) {
                        object.reserved_name = [];
                        for (var j = 0; j < message.reserved_name.length; ++j)
                            object.reserved_name[j] = message.reserved_name[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this DescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                DescriptorProto.ExtensionRange = (function() {
    
                    /**
                     * Properties of an ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IExtensionRange
                     * @property {number|null} [start] ExtensionRange start
                     * @property {number|null} [end] ExtensionRange end
                     */
    
                    /**
                     * Constructs a new ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents an ExtensionRange.
                     * @implements IExtensionRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     */
                    function ExtensionRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ExtensionRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.start = 0;
    
                    /**
                     * ExtensionRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.end = 0;
    
                    /**
                     * Creates a new ExtensionRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                     */
                    ExtensionRange.create = function create(properties) {
                        return new ExtensionRange(properties);
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an ExtensionRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ExtensionRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     */
                    ExtensionRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ExtensionRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this ExtensionRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ExtensionRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ExtensionRange;
                })();
    
                DescriptorProto.ReservedRange = (function() {
    
                    /**
                     * Properties of a ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IReservedRange
                     * @property {number|null} [start] ReservedRange start
                     * @property {number|null} [end] ReservedRange end
                     */
    
                    /**
                     * Constructs a new ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents a ReservedRange.
                     * @implements IReservedRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     */
                    function ReservedRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReservedRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.start = 0;
    
                    /**
                     * ReservedRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.end = 0;
    
                    /**
                     * Creates a new ReservedRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                     */
                    ReservedRange.create = function create(properties) {
                        return new ReservedRange(properties);
                    };
    
                    /**
                     * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReservedRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReservedRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     */
                    ReservedRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReservedRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this ReservedRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReservedRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ReservedRange;
                })();
    
                return DescriptorProto;
            })();
    
            protobuf.FieldDescriptorProto = (function() {
    
                /**
                 * Properties of a FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFieldDescriptorProto
                 * @property {string|null} [name] FieldDescriptorProto name
                 * @property {number|null} [number] FieldDescriptorProto number
                 * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
                 * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
                 * @property {string|null} [type_name] FieldDescriptorProto type_name
                 * @property {string|null} [extendee] FieldDescriptorProto extendee
                 * @property {string|null} [default_value] FieldDescriptorProto default_value
                 * @property {number|null} [oneof_index] FieldDescriptorProto oneof_index
                 * @property {string|null} [json_name] FieldDescriptorProto json_name
                 * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
                 */
    
                /**
                 * Constructs a new FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldDescriptorProto.
                 * @implements IFieldDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 */
                function FieldDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.name = "";
    
                /**
                 * FieldDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.number = 0;
    
                /**
                 * FieldDescriptorProto label.
                 * @member {google.protobuf.FieldDescriptorProto.Label} label
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.label = 1;
    
                /**
                 * FieldDescriptorProto type.
                 * @member {google.protobuf.FieldDescriptorProto.Type} type
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type = 1;
    
                /**
                 * FieldDescriptorProto type_name.
                 * @member {string} type_name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type_name = "";
    
                /**
                 * FieldDescriptorProto extendee.
                 * @member {string} extendee
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.extendee = "";
    
                /**
                 * FieldDescriptorProto default_value.
                 * @member {string} default_value
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.default_value = "";
    
                /**
                 * FieldDescriptorProto oneof_index.
                 * @member {number} oneof_index
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.oneof_index = 0;
    
                /**
                 * FieldDescriptorProto json_name.
                 * @member {string} json_name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.json_name = "";
    
                /**
                 * FieldDescriptorProto options.
                 * @member {google.protobuf.IFieldOptions|null|undefined} options
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new FieldDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
                 */
                FieldDescriptorProto.create = function create(properties) {
                    return new FieldDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.extendee != null && Object.hasOwnProperty.call(message, "extendee"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                    if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                    if (message.type_name != null && Object.hasOwnProperty.call(message, "type_name"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.type_name);
                    if (message.default_value != null && Object.hasOwnProperty.call(message, "default_value"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.default_value);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.oneof_index != null && Object.hasOwnProperty.call(message, "oneof_index"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneof_index);
                    if (message.json_name != null && Object.hasOwnProperty.call(message, "json_name"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.json_name);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.number = reader.int32();
                            break;
                        case 4:
                            message.label = reader.int32();
                            break;
                        case 5:
                            message.type = reader.int32();
                            break;
                        case 6:
                            message.type_name = reader.string();
                            break;
                        case 2:
                            message.extendee = reader.string();
                            break;
                        case 7:
                            message.default_value = reader.string();
                            break;
                        case 9:
                            message.oneof_index = reader.int32();
                            break;
                        case 10:
                            message.json_name = reader.string();
                            break;
                        case 8:
                            message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.label != null && message.hasOwnProperty("label"))
                        switch (message.label) {
                        default:
                            return "label: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                            break;
                        }
                    if (message.type_name != null && message.hasOwnProperty("type_name"))
                        if (!$util.isString(message.type_name))
                            return "type_name: string expected";
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        if (!$util.isString(message.extendee))
                            return "extendee: string expected";
                    if (message.default_value != null && message.hasOwnProperty("default_value"))
                        if (!$util.isString(message.default_value))
                            return "default_value: string expected";
                    if (message.oneof_index != null && message.hasOwnProperty("oneof_index"))
                        if (!$util.isInteger(message.oneof_index))
                            return "oneof_index: integer expected";
                    if (message.json_name != null && message.hasOwnProperty("json_name"))
                        if (!$util.isString(message.json_name))
                            return "json_name: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FieldOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 */
                FieldDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FieldDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    switch (object.label) {
                    case "LABEL_OPTIONAL":
                    case 1:
                        message.label = 1;
                        break;
                    case "LABEL_REQUIRED":
                    case 2:
                        message.label = 2;
                        break;
                    case "LABEL_REPEATED":
                    case 3:
                        message.label = 3;
                        break;
                    }
                    switch (object.type) {
                    case "TYPE_DOUBLE":
                    case 1:
                        message.type = 1;
                        break;
                    case "TYPE_FLOAT":
                    case 2:
                        message.type = 2;
                        break;
                    case "TYPE_INT64":
                    case 3:
                        message.type = 3;
                        break;
                    case "TYPE_UINT64":
                    case 4:
                        message.type = 4;
                        break;
                    case "TYPE_INT32":
                    case 5:
                        message.type = 5;
                        break;
                    case "TYPE_FIXED64":
                    case 6:
                        message.type = 6;
                        break;
                    case "TYPE_FIXED32":
                    case 7:
                        message.type = 7;
                        break;
                    case "TYPE_BOOL":
                    case 8:
                        message.type = 8;
                        break;
                    case "TYPE_STRING":
                    case 9:
                        message.type = 9;
                        break;
                    case "TYPE_GROUP":
                    case 10:
                        message.type = 10;
                        break;
                    case "TYPE_MESSAGE":
                    case 11:
                        message.type = 11;
                        break;
                    case "TYPE_BYTES":
                    case 12:
                        message.type = 12;
                        break;
                    case "TYPE_UINT32":
                    case 13:
                        message.type = 13;
                        break;
                    case "TYPE_ENUM":
                    case 14:
                        message.type = 14;
                        break;
                    case "TYPE_SFIXED32":
                    case 15:
                        message.type = 15;
                        break;
                    case "TYPE_SFIXED64":
                    case 16:
                        message.type = 16;
                        break;
                    case "TYPE_SINT32":
                    case 17:
                        message.type = 17;
                        break;
                    case "TYPE_SINT64":
                    case 18:
                        message.type = 18;
                        break;
                    }
                    if (object.type_name != null)
                        message.type_name = String(object.type_name);
                    if (object.extendee != null)
                        message.extendee = String(object.extendee);
                    if (object.default_value != null)
                        message.default_value = String(object.default_value);
                    if (object.oneof_index != null)
                        message.oneof_index = object.oneof_index | 0;
                    if (object.json_name != null)
                        message.json_name = String(object.json_name);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.extendee = "";
                        object.number = 0;
                        object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                        object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                        object.type_name = "";
                        object.default_value = "";
                        object.options = null;
                        object.oneof_index = 0;
                        object.json_name = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        object.extendee = message.extendee;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.label != null && message.hasOwnProperty("label"))
                        object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                    if (message.type_name != null && message.hasOwnProperty("type_name"))
                        object.type_name = message.type_name;
                    if (message.default_value != null && message.hasOwnProperty("default_value"))
                        object.default_value = message.default_value;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                    if (message.oneof_index != null && message.hasOwnProperty("oneof_index"))
                        object.oneof_index = message.oneof_index;
                    if (message.json_name != null && message.hasOwnProperty("json_name"))
                        object.json_name = message.json_name;
                    return object;
                };
    
                /**
                 * Converts this FieldDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Type enum.
                 * @name google.protobuf.FieldDescriptorProto.Type
                 * @enum {number}
                 * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
                 * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
                 * @property {number} TYPE_INT64=3 TYPE_INT64 value
                 * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
                 * @property {number} TYPE_INT32=5 TYPE_INT32 value
                 * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
                 * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
                 * @property {number} TYPE_BOOL=8 TYPE_BOOL value
                 * @property {number} TYPE_STRING=9 TYPE_STRING value
                 * @property {number} TYPE_GROUP=10 TYPE_GROUP value
                 * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
                 * @property {number} TYPE_BYTES=12 TYPE_BYTES value
                 * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
                 * @property {number} TYPE_ENUM=14 TYPE_ENUM value
                 * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
                 * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
                 * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
                 * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
                 */
                FieldDescriptorProto.Type = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                    values[valuesById[2] = "TYPE_FLOAT"] = 2;
                    values[valuesById[3] = "TYPE_INT64"] = 3;
                    values[valuesById[4] = "TYPE_UINT64"] = 4;
                    values[valuesById[5] = "TYPE_INT32"] = 5;
                    values[valuesById[6] = "TYPE_FIXED64"] = 6;
                    values[valuesById[7] = "TYPE_FIXED32"] = 7;
                    values[valuesById[8] = "TYPE_BOOL"] = 8;
                    values[valuesById[9] = "TYPE_STRING"] = 9;
                    values[valuesById[10] = "TYPE_GROUP"] = 10;
                    values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                    values[valuesById[12] = "TYPE_BYTES"] = 12;
                    values[valuesById[13] = "TYPE_UINT32"] = 13;
                    values[valuesById[14] = "TYPE_ENUM"] = 14;
                    values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                    values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                    values[valuesById[17] = "TYPE_SINT32"] = 17;
                    values[valuesById[18] = "TYPE_SINT64"] = 18;
                    return values;
                })();
    
                /**
                 * Label enum.
                 * @name google.protobuf.FieldDescriptorProto.Label
                 * @enum {number}
                 * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
                 * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
                 * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
                 */
                FieldDescriptorProto.Label = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                    values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                    values[valuesById[3] = "LABEL_REPEATED"] = 3;
                    return values;
                })();
    
                return FieldDescriptorProto;
            })();
    
            protobuf.OneofDescriptorProto = (function() {
    
                /**
                 * Properties of an OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IOneofDescriptorProto
                 * @property {string|null} [name] OneofDescriptorProto name
                 * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
                 */
    
                /**
                 * Constructs a new OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofDescriptorProto.
                 * @implements IOneofDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 */
                function OneofDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.name = "";
    
                /**
                 * OneofDescriptorProto options.
                 * @member {google.protobuf.IOneofOptions|null|undefined} options
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new OneofDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
                 */
                OneofDescriptorProto.create = function create(properties) {
                    return new OneofDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.OneofOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 */
                OneofDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.OneofDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this OneofDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return OneofDescriptorProto;
            })();
    
            protobuf.EnumDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumDescriptorProto
                 * @property {string|null} [name] EnumDescriptorProto name
                 * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
                 * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumDescriptorProto.
                 * @implements IEnumDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 */
                function EnumDescriptorProto(properties) {
                    this.value = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.name = "";
    
                /**
                 * EnumDescriptorProto value.
                 * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.value = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto options.
                 * @member {google.protobuf.IEnumOptions|null|undefined} options
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
                 */
                EnumDescriptorProto.create = function create(properties) {
                    return new EnumDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.value != null && message.value.length)
                        for (var i = 0; i < message.value.length; ++i)
                            $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.value && message.value.length))
                                message.value = [];
                            message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.value != null && message.hasOwnProperty("value")) {
                        if (!Array.isArray(message.value))
                            return "value: array expected";
                        for (var i = 0; i < message.value.length; ++i) {
                            var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                            if (error)
                                return "value." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 */
                EnumDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.value) {
                        if (!Array.isArray(object.value))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                        message.value = [];
                        for (var i = 0; i < object.value.length; ++i) {
                            if (typeof object.value[i] !== "object")
                                throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                            message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.value = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.value && message.value.length) {
                        object.value = [];
                        for (var j = 0; j < message.value.length; ++j)
                            object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumDescriptorProto;
            })();
    
            protobuf.EnumValueDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumValueDescriptorProto
                 * @property {string|null} [name] EnumValueDescriptorProto name
                 * @property {number|null} [number] EnumValueDescriptorProto number
                 * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueDescriptorProto.
                 * @implements IEnumValueDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 */
                function EnumValueDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.name = "";
    
                /**
                 * EnumValueDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.number = 0;
    
                /**
                 * EnumValueDescriptorProto options.
                 * @member {google.protobuf.IEnumValueOptions|null|undefined} options
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumValueDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
                 */
                EnumValueDescriptorProto.create = function create(properties) {
                    return new EnumValueDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.number = reader.int32();
                            break;
                        case 3:
                            message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 */
                EnumValueDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumValueDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.number = 0;
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumValueDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumValueDescriptorProto;
            })();
    
            protobuf.ServiceDescriptorProto = (function() {
    
                /**
                 * Properties of a ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IServiceDescriptorProto
                 * @property {string|null} [name] ServiceDescriptorProto name
                 * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
                 * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
                 */
    
                /**
                 * Constructs a new ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceDescriptorProto.
                 * @implements IServiceDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 */
                function ServiceDescriptorProto(properties) {
                    this.method = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.name = "";
    
                /**
                 * ServiceDescriptorProto method.
                 * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.method = $util.emptyArray;
    
                /**
                 * ServiceDescriptorProto options.
                 * @member {google.protobuf.IServiceOptions|null|undefined} options
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new ServiceDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
                 */
                ServiceDescriptorProto.create = function create(properties) {
                    return new ServiceDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.method != null && message.method.length)
                        for (var i = 0; i < message.method.length; ++i)
                            $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.method && message.method.length))
                                message.method = [];
                            message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.method != null && message.hasOwnProperty("method")) {
                        if (!Array.isArray(message.method))
                            return "method: array expected";
                        for (var i = 0; i < message.method.length; ++i) {
                            var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                            if (error)
                                return "method." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.ServiceOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 */
                ServiceDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.ServiceDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.method) {
                        if (!Array.isArray(object.method))
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                        message.method = [];
                        for (var i = 0; i < object.method.length; ++i) {
                            if (typeof object.method[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                            message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.method = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.method && message.method.length) {
                        object.method = [];
                        for (var j = 0; j < message.method.length; ++j)
                            object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this ServiceDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ServiceDescriptorProto;
            })();
    
            protobuf.MethodDescriptorProto = (function() {
    
                /**
                 * Properties of a MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IMethodDescriptorProto
                 * @property {string|null} [name] MethodDescriptorProto name
                 * @property {string|null} [input_type] MethodDescriptorProto input_type
                 * @property {string|null} [output_type] MethodDescriptorProto output_type
                 * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
                 * @property {boolean|null} [client_streaming] MethodDescriptorProto client_streaming
                 * @property {boolean|null} [server_streaming] MethodDescriptorProto server_streaming
                 */
    
                /**
                 * Constructs a new MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodDescriptorProto.
                 * @implements IMethodDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 */
                function MethodDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.name = "";
    
                /**
                 * MethodDescriptorProto input_type.
                 * @member {string} input_type
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.input_type = "";
    
                /**
                 * MethodDescriptorProto output_type.
                 * @member {string} output_type
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.output_type = "";
    
                /**
                 * MethodDescriptorProto options.
                 * @member {google.protobuf.IMethodOptions|null|undefined} options
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.options = null;
    
                /**
                 * MethodDescriptorProto client_streaming.
                 * @member {boolean} client_streaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.client_streaming = false;
    
                /**
                 * MethodDescriptorProto server_streaming.
                 * @member {boolean} server_streaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.server_streaming = false;
    
                /**
                 * Creates a new MethodDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
                 */
                MethodDescriptorProto.create = function create(properties) {
                    return new MethodDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.input_type != null && Object.hasOwnProperty.call(message, "input_type"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.input_type);
                    if (message.output_type != null && Object.hasOwnProperty.call(message, "output_type"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.output_type);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.client_streaming != null && Object.hasOwnProperty.call(message, "client_streaming"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.client_streaming);
                    if (message.server_streaming != null && Object.hasOwnProperty.call(message, "server_streaming"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.server_streaming);
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.input_type = reader.string();
                            break;
                        case 3:
                            message.output_type = reader.string();
                            break;
                        case 4:
                            message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.client_streaming = reader.bool();
                            break;
                        case 6:
                            message.server_streaming = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.input_type != null && message.hasOwnProperty("input_type"))
                        if (!$util.isString(message.input_type))
                            return "input_type: string expected";
                    if (message.output_type != null && message.hasOwnProperty("output_type"))
                        if (!$util.isString(message.output_type))
                            return "output_type: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MethodOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.client_streaming != null && message.hasOwnProperty("client_streaming"))
                        if (typeof message.client_streaming !== "boolean")
                            return "client_streaming: boolean expected";
                    if (message.server_streaming != null && message.hasOwnProperty("server_streaming"))
                        if (typeof message.server_streaming !== "boolean")
                            return "server_streaming: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 */
                MethodDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.MethodDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.input_type != null)
                        message.input_type = String(object.input_type);
                    if (object.output_type != null)
                        message.output_type = String(object.output_type);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                    }
                    if (object.client_streaming != null)
                        message.client_streaming = Boolean(object.client_streaming);
                    if (object.server_streaming != null)
                        message.server_streaming = Boolean(object.server_streaming);
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.input_type = "";
                        object.output_type = "";
                        object.options = null;
                        object.client_streaming = false;
                        object.server_streaming = false;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.input_type != null && message.hasOwnProperty("input_type"))
                        object.input_type = message.input_type;
                    if (message.output_type != null && message.hasOwnProperty("output_type"))
                        object.output_type = message.output_type;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                    if (message.client_streaming != null && message.hasOwnProperty("client_streaming"))
                        object.client_streaming = message.client_streaming;
                    if (message.server_streaming != null && message.hasOwnProperty("server_streaming"))
                        object.server_streaming = message.server_streaming;
                    return object;
                };
    
                /**
                 * Converts this MethodDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MethodDescriptorProto;
            })();
    
            protobuf.FileOptions = (function() {
    
                /**
                 * Properties of a FileOptions.
                 * @memberof google.protobuf
                 * @interface IFileOptions
                 * @property {string|null} [java_package] FileOptions java_package
                 * @property {string|null} [java_outer_classname] FileOptions java_outer_classname
                 * @property {boolean|null} [java_multiple_files] FileOptions java_multiple_files
                 * @property {boolean|null} [java_generate_equals_and_hash] FileOptions java_generate_equals_and_hash
                 * @property {boolean|null} [java_string_check_utf8] FileOptions java_string_check_utf8
                 * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimize_for] FileOptions optimize_for
                 * @property {string|null} [go_package] FileOptions go_package
                 * @property {boolean|null} [cc_generic_services] FileOptions cc_generic_services
                 * @property {boolean|null} [java_generic_services] FileOptions java_generic_services
                 * @property {boolean|null} [py_generic_services] FileOptions py_generic_services
                 * @property {boolean|null} [deprecated] FileOptions deprecated
                 * @property {boolean|null} [cc_enable_arenas] FileOptions cc_enable_arenas
                 * @property {string|null} [objc_class_prefix] FileOptions objc_class_prefix
                 * @property {string|null} [csharp_namespace] FileOptions csharp_namespace
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] FileOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new FileOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileOptions.
                 * @implements IFileOptions
                 * @constructor
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 */
                function FileOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileOptions java_package.
                 * @member {string} java_package
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_package = "";
    
                /**
                 * FileOptions java_outer_classname.
                 * @member {string} java_outer_classname
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_outer_classname = "";
    
                /**
                 * FileOptions java_multiple_files.
                 * @member {boolean} java_multiple_files
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_multiple_files = false;
    
                /**
                 * FileOptions java_generate_equals_and_hash.
                 * @member {boolean} java_generate_equals_and_hash
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_generate_equals_and_hash = false;
    
                /**
                 * FileOptions java_string_check_utf8.
                 * @member {boolean} java_string_check_utf8
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_string_check_utf8 = false;
    
                /**
                 * FileOptions optimize_for.
                 * @member {google.protobuf.FileOptions.OptimizeMode} optimize_for
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.optimize_for = 1;
    
                /**
                 * FileOptions go_package.
                 * @member {string} go_package
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.go_package = "";
    
                /**
                 * FileOptions cc_generic_services.
                 * @member {boolean} cc_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.cc_generic_services = false;
    
                /**
                 * FileOptions java_generic_services.
                 * @member {boolean} java_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_generic_services = false;
    
                /**
                 * FileOptions py_generic_services.
                 * @member {boolean} py_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.py_generic_services = false;
    
                /**
                 * FileOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.deprecated = false;
    
                /**
                 * FileOptions cc_enable_arenas.
                 * @member {boolean} cc_enable_arenas
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.cc_enable_arenas = false;
    
                /**
                 * FileOptions objc_class_prefix.
                 * @member {string} objc_class_prefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.objc_class_prefix = "";
    
                /**
                 * FileOptions csharp_namespace.
                 * @member {string} csharp_namespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.csharp_namespace = "";
    
                /**
                 * FileOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new FileOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FileOptions} FileOptions instance
                 */
                FileOptions.create = function create(properties) {
                    return new FileOptions(properties);
                };
    
                /**
                 * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.java_package != null && Object.hasOwnProperty.call(message, "java_package"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.java_package);
                    if (message.java_outer_classname != null && Object.hasOwnProperty.call(message, "java_outer_classname"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.java_outer_classname);
                    if (message.optimize_for != null && Object.hasOwnProperty.call(message, "optimize_for"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimize_for);
                    if (message.java_multiple_files != null && Object.hasOwnProperty.call(message, "java_multiple_files"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.java_multiple_files);
                    if (message.go_package != null && Object.hasOwnProperty.call(message, "go_package"))
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.go_package);
                    if (message.cc_generic_services != null && Object.hasOwnProperty.call(message, "cc_generic_services"))
                        writer.uint32(/* id 16, wireType 0 =*/128).bool(message.cc_generic_services);
                    if (message.java_generic_services != null && Object.hasOwnProperty.call(message, "java_generic_services"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.java_generic_services);
                    if (message.py_generic_services != null && Object.hasOwnProperty.call(message, "py_generic_services"))
                        writer.uint32(/* id 18, wireType 0 =*/144).bool(message.py_generic_services);
                    if (message.java_generate_equals_and_hash != null && Object.hasOwnProperty.call(message, "java_generate_equals_and_hash"))
                        writer.uint32(/* id 20, wireType 0 =*/160).bool(message.java_generate_equals_and_hash);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                    if (message.java_string_check_utf8 != null && Object.hasOwnProperty.call(message, "java_string_check_utf8"))
                        writer.uint32(/* id 27, wireType 0 =*/216).bool(message.java_string_check_utf8);
                    if (message.cc_enable_arenas != null && Object.hasOwnProperty.call(message, "cc_enable_arenas"))
                        writer.uint32(/* id 31, wireType 0 =*/248).bool(message.cc_enable_arenas);
                    if (message.objc_class_prefix != null && Object.hasOwnProperty.call(message, "objc_class_prefix"))
                        writer.uint32(/* id 36, wireType 2 =*/290).string(message.objc_class_prefix);
                    if (message.csharp_namespace != null && Object.hasOwnProperty.call(message, "csharp_namespace"))
                        writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharp_namespace);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.java_package = reader.string();
                            break;
                        case 8:
                            message.java_outer_classname = reader.string();
                            break;
                        case 10:
                            message.java_multiple_files = reader.bool();
                            break;
                        case 20:
                            message.java_generate_equals_and_hash = reader.bool();
                            break;
                        case 27:
                            message.java_string_check_utf8 = reader.bool();
                            break;
                        case 9:
                            message.optimize_for = reader.int32();
                            break;
                        case 11:
                            message.go_package = reader.string();
                            break;
                        case 16:
                            message.cc_generic_services = reader.bool();
                            break;
                        case 17:
                            message.java_generic_services = reader.bool();
                            break;
                        case 18:
                            message.py_generic_services = reader.bool();
                            break;
                        case 23:
                            message.deprecated = reader.bool();
                            break;
                        case 31:
                            message.cc_enable_arenas = reader.bool();
                            break;
                        case 36:
                            message.objc_class_prefix = reader.string();
                            break;
                        case 37:
                            message.csharp_namespace = reader.string();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileOptions message.
                 * @function verify
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.java_package != null && message.hasOwnProperty("java_package"))
                        if (!$util.isString(message.java_package))
                            return "java_package: string expected";
                    if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                        if (!$util.isString(message.java_outer_classname))
                            return "java_outer_classname: string expected";
                    if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                        if (typeof message.java_multiple_files !== "boolean")
                            return "java_multiple_files: boolean expected";
                    if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                        if (typeof message.java_generate_equals_and_hash !== "boolean")
                            return "java_generate_equals_and_hash: boolean expected";
                    if (message.java_string_check_utf8 != null && message.hasOwnProperty("java_string_check_utf8"))
                        if (typeof message.java_string_check_utf8 !== "boolean")
                            return "java_string_check_utf8: boolean expected";
                    if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                        switch (message.optimize_for) {
                        default:
                            return "optimize_for: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.go_package != null && message.hasOwnProperty("go_package"))
                        if (!$util.isString(message.go_package))
                            return "go_package: string expected";
                    if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                        if (typeof message.cc_generic_services !== "boolean")
                            return "cc_generic_services: boolean expected";
                    if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                        if (typeof message.java_generic_services !== "boolean")
                            return "java_generic_services: boolean expected";
                    if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                        if (typeof message.py_generic_services !== "boolean")
                            return "py_generic_services: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.cc_enable_arenas != null && message.hasOwnProperty("cc_enable_arenas"))
                        if (typeof message.cc_enable_arenas !== "boolean")
                            return "cc_enable_arenas: boolean expected";
                    if (message.objc_class_prefix != null && message.hasOwnProperty("objc_class_prefix"))
                        if (!$util.isString(message.objc_class_prefix))
                            return "objc_class_prefix: string expected";
                    if (message.csharp_namespace != null && message.hasOwnProperty("csharp_namespace"))
                        if (!$util.isString(message.csharp_namespace))
                            return "csharp_namespace: string expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileOptions} FileOptions
                 */
                FileOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileOptions)
                        return object;
                    var message = new $root.google.protobuf.FileOptions();
                    if (object.java_package != null)
                        message.java_package = String(object.java_package);
                    if (object.java_outer_classname != null)
                        message.java_outer_classname = String(object.java_outer_classname);
                    if (object.java_multiple_files != null)
                        message.java_multiple_files = Boolean(object.java_multiple_files);
                    if (object.java_generate_equals_and_hash != null)
                        message.java_generate_equals_and_hash = Boolean(object.java_generate_equals_and_hash);
                    if (object.java_string_check_utf8 != null)
                        message.java_string_check_utf8 = Boolean(object.java_string_check_utf8);
                    switch (object.optimize_for) {
                    case "SPEED":
                    case 1:
                        message.optimize_for = 1;
                        break;
                    case "CODE_SIZE":
                    case 2:
                        message.optimize_for = 2;
                        break;
                    case "LITE_RUNTIME":
                    case 3:
                        message.optimize_for = 3;
                        break;
                    }
                    if (object.go_package != null)
                        message.go_package = String(object.go_package);
                    if (object.cc_generic_services != null)
                        message.cc_generic_services = Boolean(object.cc_generic_services);
                    if (object.java_generic_services != null)
                        message.java_generic_services = Boolean(object.java_generic_services);
                    if (object.py_generic_services != null)
                        message.py_generic_services = Boolean(object.py_generic_services);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.cc_enable_arenas != null)
                        message.cc_enable_arenas = Boolean(object.cc_enable_arenas);
                    if (object.objc_class_prefix != null)
                        message.objc_class_prefix = String(object.objc_class_prefix);
                    if (object.csharp_namespace != null)
                        message.csharp_namespace = String(object.csharp_namespace);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.FileOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.FileOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.FileOptions} message FileOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.java_package = "";
                        object.java_outer_classname = "";
                        object.optimize_for = options.enums === String ? "SPEED" : 1;
                        object.java_multiple_files = false;
                        object.go_package = "";
                        object.cc_generic_services = false;
                        object.java_generic_services = false;
                        object.py_generic_services = false;
                        object.java_generate_equals_and_hash = false;
                        object.deprecated = false;
                        object.java_string_check_utf8 = false;
                        object.cc_enable_arenas = false;
                        object.objc_class_prefix = "";
                        object.csharp_namespace = "";
                    }
                    if (message.java_package != null && message.hasOwnProperty("java_package"))
                        object.java_package = message.java_package;
                    if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                        object.java_outer_classname = message.java_outer_classname;
                    if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                        object.optimize_for = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimize_for] : message.optimize_for;
                    if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                        object.java_multiple_files = message.java_multiple_files;
                    if (message.go_package != null && message.hasOwnProperty("go_package"))
                        object.go_package = message.go_package;
                    if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                        object.cc_generic_services = message.cc_generic_services;
                    if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                        object.java_generic_services = message.java_generic_services;
                    if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                        object.py_generic_services = message.py_generic_services;
                    if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                        object.java_generate_equals_and_hash = message.java_generate_equals_and_hash;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.java_string_check_utf8 != null && message.hasOwnProperty("java_string_check_utf8"))
                        object.java_string_check_utf8 = message.java_string_check_utf8;
                    if (message.cc_enable_arenas != null && message.hasOwnProperty("cc_enable_arenas"))
                        object.cc_enable_arenas = message.cc_enable_arenas;
                    if (message.objc_class_prefix != null && message.hasOwnProperty("objc_class_prefix"))
                        object.objc_class_prefix = message.objc_class_prefix;
                    if (message.csharp_namespace != null && message.hasOwnProperty("csharp_namespace"))
                        object.csharp_namespace = message.csharp_namespace;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * OptimizeMode enum.
                 * @name google.protobuf.FileOptions.OptimizeMode
                 * @enum {number}
                 * @property {number} SPEED=1 SPEED value
                 * @property {number} CODE_SIZE=2 CODE_SIZE value
                 * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
                 */
                FileOptions.OptimizeMode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "SPEED"] = 1;
                    values[valuesById[2] = "CODE_SIZE"] = 2;
                    values[valuesById[3] = "LITE_RUNTIME"] = 3;
                    return values;
                })();
    
                return FileOptions;
            })();
    
            protobuf.MessageOptions = (function() {
    
                /**
                 * Properties of a MessageOptions.
                 * @memberof google.protobuf
                 * @interface IMessageOptions
                 * @property {boolean|null} [message_set_wire_format] MessageOptions message_set_wire_format
                 * @property {boolean|null} [no_standard_descriptor_accessor] MessageOptions no_standard_descriptor_accessor
                 * @property {boolean|null} [deprecated] MessageOptions deprecated
                 * @property {boolean|null} [map_entry] MessageOptions map_entry
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] MessageOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new MessageOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MessageOptions.
                 * @implements IMessageOptions
                 * @constructor
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 */
                function MessageOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MessageOptions message_set_wire_format.
                 * @member {boolean} message_set_wire_format
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.message_set_wire_format = false;
    
                /**
                 * MessageOptions no_standard_descriptor_accessor.
                 * @member {boolean} no_standard_descriptor_accessor
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.no_standard_descriptor_accessor = false;
    
                /**
                 * MessageOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.deprecated = false;
    
                /**
                 * MessageOptions map_entry.
                 * @member {boolean} map_entry
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.map_entry = false;
    
                /**
                 * MessageOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new MessageOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MessageOptions} MessageOptions instance
                 */
                MessageOptions.create = function create(properties) {
                    return new MessageOptions(properties);
                };
    
                /**
                 * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.message_set_wire_format != null && Object.hasOwnProperty.call(message, "message_set_wire_format"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.message_set_wire_format);
                    if (message.no_standard_descriptor_accessor != null && Object.hasOwnProperty.call(message, "no_standard_descriptor_accessor"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.no_standard_descriptor_accessor);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.map_entry != null && Object.hasOwnProperty.call(message, "map_entry"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.map_entry);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.message_set_wire_format = reader.bool();
                            break;
                        case 2:
                            message.no_standard_descriptor_accessor = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 7:
                            message.map_entry = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MessageOptions message.
                 * @function verify
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                        if (typeof message.message_set_wire_format !== "boolean")
                            return "message_set_wire_format: boolean expected";
                    if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                        if (typeof message.no_standard_descriptor_accessor !== "boolean")
                            return "no_standard_descriptor_accessor: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.map_entry != null && message.hasOwnProperty("map_entry"))
                        if (typeof message.map_entry !== "boolean")
                            return "map_entry: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 */
                MessageOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MessageOptions)
                        return object;
                    var message = new $root.google.protobuf.MessageOptions();
                    if (object.message_set_wire_format != null)
                        message.message_set_wire_format = Boolean(object.message_set_wire_format);
                    if (object.no_standard_descriptor_accessor != null)
                        message.no_standard_descriptor_accessor = Boolean(object.no_standard_descriptor_accessor);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.map_entry != null)
                        message.map_entry = Boolean(object.map_entry);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.MessageOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.MessageOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.MessageOptions} message MessageOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.message_set_wire_format = false;
                        object.no_standard_descriptor_accessor = false;
                        object.deprecated = false;
                        object.map_entry = false;
                    }
                    if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                        object.message_set_wire_format = message.message_set_wire_format;
                    if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                        object.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.map_entry != null && message.hasOwnProperty("map_entry"))
                        object.map_entry = message.map_entry;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this MessageOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MessageOptions;
            })();
    
            protobuf.FieldOptions = (function() {
    
                /**
                 * Properties of a FieldOptions.
                 * @memberof google.protobuf
                 * @interface IFieldOptions
                 * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
                 * @property {boolean|null} [packed] FieldOptions packed
                 * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
                 * @property {boolean|null} [lazy] FieldOptions lazy
                 * @property {boolean|null} [deprecated] FieldOptions deprecated
                 * @property {boolean|null} [weak] FieldOptions weak
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] FieldOptions uninterpreted_option
                 * @property {string|null} [".description"] FieldOptions .description
                 */
    
                /**
                 * Constructs a new FieldOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldOptions.
                 * @implements IFieldOptions
                 * @constructor
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 */
                function FieldOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldOptions ctype.
                 * @member {google.protobuf.FieldOptions.CType} ctype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.ctype = 0;
    
                /**
                 * FieldOptions packed.
                 * @member {boolean} packed
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.packed = false;
    
                /**
                 * FieldOptions jstype.
                 * @member {google.protobuf.FieldOptions.JSType} jstype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.jstype = 0;
    
                /**
                 * FieldOptions lazy.
                 * @member {boolean} lazy
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.lazy = false;
    
                /**
                 * FieldOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.deprecated = false;
    
                /**
                 * FieldOptions weak.
                 * @member {boolean} weak
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.weak = false;
    
                /**
                 * FieldOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * FieldOptions .description.
                 * @member {string} .description
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype[".description"] = "";
    
                /**
                 * Creates a new FieldOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FieldOptions} FieldOptions instance
                 */
                FieldOptions.create = function create(properties) {
                    return new FieldOptions(properties);
                };
    
                /**
                 * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ctype != null && Object.hasOwnProperty.call(message, "ctype"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                    if (message.packed != null && Object.hasOwnProperty.call(message, "packed"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.lazy != null && Object.hasOwnProperty.call(message, "lazy"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                    if (message.jstype != null && Object.hasOwnProperty.call(message, "jstype"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                    if (message.weak != null && Object.hasOwnProperty.call(message, "weak"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".description"] != null && Object.hasOwnProperty.call(message, ".description"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".description"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.ctype = reader.int32();
                            break;
                        case 2:
                            message.packed = reader.bool();
                            break;
                        case 6:
                            message.jstype = reader.int32();
                            break;
                        case 5:
                            message.lazy = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 10:
                            message.weak = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 50000:
                            message[".description"] = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldOptions message.
                 * @function verify
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        switch (message.ctype) {
                        default:
                            return "ctype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        if (typeof message.packed !== "boolean")
                            return "packed: boolean expected";
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        switch (message.jstype) {
                        default:
                            return "jstype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        if (typeof message.lazy !== "boolean")
                            return "lazy: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        if (typeof message.weak !== "boolean")
                            return "weak: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".description"] != null && message.hasOwnProperty(".description"))
                        if (!$util.isString(message[".description"]))
                            return ".description: string expected";
                    return null;
                };
    
                /**
                 * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 */
                FieldOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldOptions)
                        return object;
                    var message = new $root.google.protobuf.FieldOptions();
                    switch (object.ctype) {
                    case "STRING":
                    case 0:
                        message.ctype = 0;
                        break;
                    case "CORD":
                    case 1:
                        message.ctype = 1;
                        break;
                    case "STRING_PIECE":
                    case 2:
                        message.ctype = 2;
                        break;
                    }
                    if (object.packed != null)
                        message.packed = Boolean(object.packed);
                    switch (object.jstype) {
                    case "JS_NORMAL":
                    case 0:
                        message.jstype = 0;
                        break;
                    case "JS_STRING":
                    case 1:
                        message.jstype = 1;
                        break;
                    case "JS_NUMBER":
                    case 2:
                        message.jstype = 2;
                        break;
                    }
                    if (object.lazy != null)
                        message.lazy = Boolean(object.lazy);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.weak != null)
                        message.weak = Boolean(object.weak);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.FieldOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.FieldOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    if (object[".description"] != null)
                        message[".description"] = String(object[".description"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.FieldOptions} message FieldOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.ctype = options.enums === String ? "STRING" : 0;
                        object.packed = false;
                        object.deprecated = false;
                        object.lazy = false;
                        object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                        object.weak = false;
                        object[".description"] = "";
                    }
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        object.packed = message.packed;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        object.lazy = message.lazy;
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        object.weak = message.weak;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".description"] != null && message.hasOwnProperty(".description"))
                        object[".description"] = message[".description"];
                    return object;
                };
    
                /**
                 * Converts this FieldOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * CType enum.
                 * @name google.protobuf.FieldOptions.CType
                 * @enum {number}
                 * @property {number} STRING=0 STRING value
                 * @property {number} CORD=1 CORD value
                 * @property {number} STRING_PIECE=2 STRING_PIECE value
                 */
                FieldOptions.CType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STRING"] = 0;
                    values[valuesById[1] = "CORD"] = 1;
                    values[valuesById[2] = "STRING_PIECE"] = 2;
                    return values;
                })();
    
                /**
                 * JSType enum.
                 * @name google.protobuf.FieldOptions.JSType
                 * @enum {number}
                 * @property {number} JS_NORMAL=0 JS_NORMAL value
                 * @property {number} JS_STRING=1 JS_STRING value
                 * @property {number} JS_NUMBER=2 JS_NUMBER value
                 */
                FieldOptions.JSType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "JS_NORMAL"] = 0;
                    values[valuesById[1] = "JS_STRING"] = 1;
                    values[valuesById[2] = "JS_NUMBER"] = 2;
                    return values;
                })();
    
                return FieldOptions;
            })();
    
            protobuf.OneofOptions = (function() {
    
                /**
                 * Properties of an OneofOptions.
                 * @memberof google.protobuf
                 * @interface IOneofOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] OneofOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new OneofOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofOptions.
                 * @implements IOneofOptions
                 * @constructor
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 */
                function OneofOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 */
                OneofOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new OneofOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 * @returns {google.protobuf.OneofOptions} OneofOptions instance
                 */
                OneofOptions.create = function create(properties) {
                    return new OneofOptions(properties);
                };
    
                /**
                 * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofOptions message.
                 * @function verify
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 */
                OneofOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofOptions)
                        return object;
                    var message = new $root.google.protobuf.OneofOptions();
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.OneofOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.OneofOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.OneofOptions} message OneofOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this OneofOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return OneofOptions;
            })();
    
            protobuf.EnumOptions = (function() {
    
                /**
                 * Properties of an EnumOptions.
                 * @memberof google.protobuf
                 * @interface IEnumOptions
                 * @property {boolean|null} [allow_alias] EnumOptions allow_alias
                 * @property {boolean|null} [deprecated] EnumOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] EnumOptions uninterpreted_option
                 * @property {string|null} [".enum_description"] EnumOptions .enum_description
                 */
    
                /**
                 * Constructs a new EnumOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumOptions.
                 * @implements IEnumOptions
                 * @constructor
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 */
                function EnumOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumOptions allow_alias.
                 * @member {boolean} allow_alias
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.allow_alias = false;
    
                /**
                 * EnumOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.deprecated = false;
    
                /**
                 * EnumOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * EnumOptions .enum_description.
                 * @member {string} .enum_description
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype[".enum_description"] = "";
    
                /**
                 * Creates a new EnumOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumOptions} EnumOptions instance
                 */
                EnumOptions.create = function create(properties) {
                    return new EnumOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.allow_alias != null && Object.hasOwnProperty.call(message, "allow_alias"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allow_alias);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".enum_description"] != null && Object.hasOwnProperty.call(message, ".enum_description"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".enum_description"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            message.allow_alias = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 50000:
                            message[".enum_description"] = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.allow_alias != null && message.hasOwnProperty("allow_alias"))
                        if (typeof message.allow_alias !== "boolean")
                            return "allow_alias: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".enum_description"] != null && message.hasOwnProperty(".enum_description"))
                        if (!$util.isString(message[".enum_description"]))
                            return ".enum_description: string expected";
                    return null;
                };
    
                /**
                 * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 */
                EnumOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumOptions();
                    if (object.allow_alias != null)
                        message.allow_alias = Boolean(object.allow_alias);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.EnumOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.EnumOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    if (object[".enum_description"] != null)
                        message[".enum_description"] = String(object[".enum_description"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.EnumOptions} message EnumOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.allow_alias = false;
                        object.deprecated = false;
                        object[".enum_description"] = "";
                    }
                    if (message.allow_alias != null && message.hasOwnProperty("allow_alias"))
                        object.allow_alias = message.allow_alias;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".enum_description"] != null && message.hasOwnProperty(".enum_description"))
                        object[".enum_description"] = message[".enum_description"];
                    return object;
                };
    
                /**
                 * Converts this EnumOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumOptions;
            })();
    
            protobuf.EnumValueOptions = (function() {
    
                /**
                 * Properties of an EnumValueOptions.
                 * @memberof google.protobuf
                 * @interface IEnumValueOptions
                 * @property {boolean|null} [deprecated] EnumValueOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] EnumValueOptions uninterpreted_option
                 * @property {string|null} [".enum_value_description"] EnumValueOptions .enum_value_description
                 */
    
                /**
                 * Constructs a new EnumValueOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueOptions.
                 * @implements IEnumValueOptions
                 * @constructor
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 */
                function EnumValueOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.deprecated = false;
    
                /**
                 * EnumValueOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * EnumValueOptions .enum_value_description.
                 * @member {string} .enum_value_description
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype[".enum_value_description"] = "";
    
                /**
                 * Creates a new EnumValueOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
                 */
                EnumValueOptions.create = function create(properties) {
                    return new EnumValueOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".enum_value_description"] != null && Object.hasOwnProperty.call(message, ".enum_value_description"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".enum_value_description"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 50000:
                            message[".enum_value_description"] = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".enum_value_description"] != null && message.hasOwnProperty(".enum_value_description"))
                        if (!$util.isString(message[".enum_value_description"]))
                            return ".enum_value_description: string expected";
                    return null;
                };
    
                /**
                 * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 */
                EnumValueOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumValueOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    if (object[".enum_value_description"] != null)
                        message[".enum_value_description"] = String(object[".enum_value_description"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.deprecated = false;
                        object[".enum_value_description"] = "";
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".enum_value_description"] != null && message.hasOwnProperty(".enum_value_description"))
                        object[".enum_value_description"] = message[".enum_value_description"];
                    return object;
                };
    
                /**
                 * Converts this EnumValueOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumValueOptions;
            })();
    
            protobuf.ServiceOptions = (function() {
    
                /**
                 * Properties of a ServiceOptions.
                 * @memberof google.protobuf
                 * @interface IServiceOptions
                 * @property {boolean|null} [deprecated] ServiceOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] ServiceOptions uninterpreted_option
                 * @property {string|null} [".service_description"] ServiceOptions .service_description
                 * @property {EProtoExecutionSite|null} [".service_execution_site"] ServiceOptions .service_execution_site
                 */
    
                /**
                 * Constructs a new ServiceOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceOptions.
                 * @implements IServiceOptions
                 * @constructor
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 */
                function ServiceOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.deprecated = false;
    
                /**
                 * ServiceOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * ServiceOptions .service_description.
                 * @member {string} .service_description
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype[".service_description"] = "";
    
                /**
                 * ServiceOptions .service_execution_site.
                 * @member {EProtoExecutionSite} .service_execution_site
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype[".service_execution_site"] = 0;
    
                /**
                 * Creates a new ServiceOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
                 */
                ServiceOptions.create = function create(properties) {
                    return new ServiceOptions(properties);
                };
    
                /**
                 * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".service_description"] != null && Object.hasOwnProperty.call(message, ".service_description"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".service_description"]);
                    if (message[".service_execution_site"] != null && Object.hasOwnProperty.call(message, ".service_execution_site"))
                        writer.uint32(/* id 50008, wireType 0 =*/400064).int32(message[".service_execution_site"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 50000:
                            message[".service_description"] = reader.string();
                            break;
                        case 50008:
                            message[".service_execution_site"] = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceOptions message.
                 * @function verify
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".service_description"] != null && message.hasOwnProperty(".service_description"))
                        if (!$util.isString(message[".service_description"]))
                            return ".service_description: string expected";
                    if (message[".service_execution_site"] != null && message.hasOwnProperty(".service_execution_site"))
                        switch (message[".service_execution_site"]) {
                        default:
                            return ".service_execution_site: enum value expected";
                        case 0:
                        case 2:
                            break;
                        }
                    return null;
                };
    
                /**
                 * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 */
                ServiceOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceOptions)
                        return object;
                    var message = new $root.google.protobuf.ServiceOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    if (object[".service_description"] != null)
                        message[".service_description"] = String(object[".service_description"]);
                    switch (object[".service_execution_site"]) {
                    case "k_EProtoExecutionSiteUnknown":
                    case 0:
                        message[".service_execution_site"] = 0;
                        break;
                    case "k_EProtoExecutionSiteSteamClient":
                    case 2:
                        message[".service_execution_site"] = 2;
                        break;
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.ServiceOptions} message ServiceOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.deprecated = false;
                        object[".service_description"] = "";
                        object[".service_execution_site"] = options.enums === String ? "k_EProtoExecutionSiteUnknown" : 0;
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".service_description"] != null && message.hasOwnProperty(".service_description"))
                        object[".service_description"] = message[".service_description"];
                    if (message[".service_execution_site"] != null && message.hasOwnProperty(".service_execution_site"))
                        object[".service_execution_site"] = options.enums === String ? $root.EProtoExecutionSite[message[".service_execution_site"]] : message[".service_execution_site"];
                    return object;
                };
    
                /**
                 * Converts this ServiceOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ServiceOptions;
            })();
    
            protobuf.MethodOptions = (function() {
    
                /**
                 * Properties of a MethodOptions.
                 * @memberof google.protobuf
                 * @interface IMethodOptions
                 * @property {boolean|null} [deprecated] MethodOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] MethodOptions uninterpreted_option
                 * @property {string|null} [".method_description"] MethodOptions .method_description
                 */
    
                /**
                 * Constructs a new MethodOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodOptions.
                 * @implements IMethodOptions
                 * @constructor
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 */
                function MethodOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.deprecated = false;
    
                /**
                 * MethodOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * MethodOptions .method_description.
                 * @member {string} .method_description
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype[".method_description"] = "";
    
                /**
                 * Creates a new MethodOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MethodOptions} MethodOptions instance
                 */
                MethodOptions.create = function create(properties) {
                    return new MethodOptions(properties);
                };
    
                /**
                 * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".method_description"] != null && Object.hasOwnProperty.call(message, ".method_description"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".method_description"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 50000:
                            message[".method_description"] = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodOptions message.
                 * @function verify
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".method_description"] != null && message.hasOwnProperty(".method_description"))
                        if (!$util.isString(message[".method_description"]))
                            return ".method_description: string expected";
                    return null;
                };
    
                /**
                 * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 */
                MethodOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodOptions)
                        return object;
                    var message = new $root.google.protobuf.MethodOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.MethodOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.MethodOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    if (object[".method_description"] != null)
                        message[".method_description"] = String(object[".method_description"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.MethodOptions} message MethodOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.deprecated = false;
                        object[".method_description"] = "";
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".method_description"] != null && message.hasOwnProperty(".method_description"))
                        object[".method_description"] = message[".method_description"];
                    return object;
                };
    
                /**
                 * Converts this MethodOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MethodOptions;
            })();
    
            protobuf.UninterpretedOption = (function() {
    
                /**
                 * Properties of an UninterpretedOption.
                 * @memberof google.protobuf
                 * @interface IUninterpretedOption
                 * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
                 * @property {string|null} [identifier_value] UninterpretedOption identifier_value
                 * @property {number|Long|null} [positive_int_value] UninterpretedOption positive_int_value
                 * @property {number|Long|null} [negative_int_value] UninterpretedOption negative_int_value
                 * @property {number|null} [double_value] UninterpretedOption double_value
                 * @property {Uint8Array|null} [string_value] UninterpretedOption string_value
                 * @property {string|null} [aggregate_value] UninterpretedOption aggregate_value
                 */
    
                /**
                 * Constructs a new UninterpretedOption.
                 * @memberof google.protobuf
                 * @classdesc Represents an UninterpretedOption.
                 * @implements IUninterpretedOption
                 * @constructor
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 */
                function UninterpretedOption(properties) {
                    this.name = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UninterpretedOption name.
                 * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.name = $util.emptyArray;
    
                /**
                 * UninterpretedOption identifier_value.
                 * @member {string} identifier_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.identifier_value = "";
    
                /**
                 * UninterpretedOption positive_int_value.
                 * @member {number|Long} positive_int_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.positive_int_value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * UninterpretedOption negative_int_value.
                 * @member {number|Long} negative_int_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.negative_int_value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * UninterpretedOption double_value.
                 * @member {number} double_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.double_value = 0;
    
                /**
                 * UninterpretedOption string_value.
                 * @member {Uint8Array} string_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.string_value = $util.newBuffer([]);
    
                /**
                 * UninterpretedOption aggregate_value.
                 * @member {string} aggregate_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.aggregate_value = "";
    
                /**
                 * Creates a new UninterpretedOption instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
                 */
                UninterpretedOption.create = function create(properties) {
                    return new UninterpretedOption(properties);
                };
    
                /**
                 * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.name.length)
                        for (var i = 0; i < message.name.length; ++i)
                            $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.identifier_value != null && Object.hasOwnProperty.call(message, "identifier_value"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifier_value);
                    if (message.positive_int_value != null && Object.hasOwnProperty.call(message, "positive_int_value"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positive_int_value);
                    if (message.negative_int_value != null && Object.hasOwnProperty.call(message, "negative_int_value"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negative_int_value);
                    if (message.double_value != null && Object.hasOwnProperty.call(message, "double_value"))
                        writer.uint32(/* id 6, wireType 1 =*/49).double(message.double_value);
                    if (message.string_value != null && Object.hasOwnProperty.call(message, "string_value"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.string_value);
                    if (message.aggregate_value != null && Object.hasOwnProperty.call(message, "aggregate_value"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregate_value);
                    return writer;
                };
    
                /**
                 * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            if (!(message.name && message.name.length))
                                message.name = [];
                            message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.identifier_value = reader.string();
                            break;
                        case 4:
                            message.positive_int_value = reader.uint64();
                            break;
                        case 5:
                            message.negative_int_value = reader.int64();
                            break;
                        case 6:
                            message.double_value = reader.double();
                            break;
                        case 7:
                            message.string_value = reader.bytes();
                            break;
                        case 8:
                            message.aggregate_value = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an UninterpretedOption message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UninterpretedOption.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name")) {
                        if (!Array.isArray(message.name))
                            return "name: array expected";
                        for (var i = 0; i < message.name.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                            if (error)
                                return "name." + error;
                        }
                    }
                    if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                        if (!$util.isString(message.identifier_value))
                            return "identifier_value: string expected";
                    if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                        if (!$util.isInteger(message.positive_int_value) && !(message.positive_int_value && $util.isInteger(message.positive_int_value.low) && $util.isInteger(message.positive_int_value.high)))
                            return "positive_int_value: integer|Long expected";
                    if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                        if (!$util.isInteger(message.negative_int_value) && !(message.negative_int_value && $util.isInteger(message.negative_int_value.low) && $util.isInteger(message.negative_int_value.high)))
                            return "negative_int_value: integer|Long expected";
                    if (message.double_value != null && message.hasOwnProperty("double_value"))
                        if (typeof message.double_value !== "number")
                            return "double_value: number expected";
                    if (message.string_value != null && message.hasOwnProperty("string_value"))
                        if (!(message.string_value && typeof message.string_value.length === "number" || $util.isString(message.string_value)))
                            return "string_value: buffer expected";
                    if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                        if (!$util.isString(message.aggregate_value))
                            return "aggregate_value: string expected";
                    return null;
                };
    
                /**
                 * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 */
                UninterpretedOption.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption();
                    if (object.name) {
                        if (!Array.isArray(object.name))
                            throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                        message.name = [];
                        for (var i = 0; i < object.name.length; ++i) {
                            if (typeof object.name[i] !== "object")
                                throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                            message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                        }
                    }
                    if (object.identifier_value != null)
                        message.identifier_value = String(object.identifier_value);
                    if (object.positive_int_value != null)
                        if ($util.Long)
                            (message.positive_int_value = $util.Long.fromValue(object.positive_int_value)).unsigned = true;
                        else if (typeof object.positive_int_value === "string")
                            message.positive_int_value = parseInt(object.positive_int_value, 10);
                        else if (typeof object.positive_int_value === "number")
                            message.positive_int_value = object.positive_int_value;
                        else if (typeof object.positive_int_value === "object")
                            message.positive_int_value = new $util.LongBits(object.positive_int_value.low >>> 0, object.positive_int_value.high >>> 0).toNumber(true);
                    if (object.negative_int_value != null)
                        if ($util.Long)
                            (message.negative_int_value = $util.Long.fromValue(object.negative_int_value)).unsigned = false;
                        else if (typeof object.negative_int_value === "string")
                            message.negative_int_value = parseInt(object.negative_int_value, 10);
                        else if (typeof object.negative_int_value === "number")
                            message.negative_int_value = object.negative_int_value;
                        else if (typeof object.negative_int_value === "object")
                            message.negative_int_value = new $util.LongBits(object.negative_int_value.low >>> 0, object.negative_int_value.high >>> 0).toNumber();
                    if (object.double_value != null)
                        message.double_value = Number(object.double_value);
                    if (object.string_value != null)
                        if (typeof object.string_value === "string")
                            $util.base64.decode(object.string_value, message.string_value = $util.newBuffer($util.base64.length(object.string_value)), 0);
                        else if (object.string_value.length)
                            message.string_value = object.string_value;
                    if (object.aggregate_value != null)
                        message.aggregate_value = String(object.aggregate_value);
                    return message;
                };
    
                /**
                 * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UninterpretedOption.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.name = [];
                    if (options.defaults) {
                        object.identifier_value = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.positive_int_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.positive_int_value = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.negative_int_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.negative_int_value = options.longs === String ? "0" : 0;
                        object.double_value = 0;
                        if (options.bytes === String)
                            object.string_value = "";
                        else {
                            object.string_value = [];
                            if (options.bytes !== Array)
                                object.string_value = $util.newBuffer(object.string_value);
                        }
                        object.aggregate_value = "";
                    }
                    if (message.name && message.name.length) {
                        object.name = [];
                        for (var j = 0; j < message.name.length; ++j)
                            object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                    }
                    if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                        object.identifier_value = message.identifier_value;
                    if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                        if (typeof message.positive_int_value === "number")
                            object.positive_int_value = options.longs === String ? String(message.positive_int_value) : message.positive_int_value;
                        else
                            object.positive_int_value = options.longs === String ? $util.Long.prototype.toString.call(message.positive_int_value) : options.longs === Number ? new $util.LongBits(message.positive_int_value.low >>> 0, message.positive_int_value.high >>> 0).toNumber(true) : message.positive_int_value;
                    if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                        if (typeof message.negative_int_value === "number")
                            object.negative_int_value = options.longs === String ? String(message.negative_int_value) : message.negative_int_value;
                        else
                            object.negative_int_value = options.longs === String ? $util.Long.prototype.toString.call(message.negative_int_value) : options.longs === Number ? new $util.LongBits(message.negative_int_value.low >>> 0, message.negative_int_value.high >>> 0).toNumber() : message.negative_int_value;
                    if (message.double_value != null && message.hasOwnProperty("double_value"))
                        object.double_value = options.json && !isFinite(message.double_value) ? String(message.double_value) : message.double_value;
                    if (message.string_value != null && message.hasOwnProperty("string_value"))
                        object.string_value = options.bytes === String ? $util.base64.encode(message.string_value, 0, message.string_value.length) : options.bytes === Array ? Array.prototype.slice.call(message.string_value) : message.string_value;
                    if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                        object.aggregate_value = message.aggregate_value;
                    return object;
                };
    
                /**
                 * Converts this UninterpretedOption to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UninterpretedOption.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                UninterpretedOption.NamePart = (function() {
    
                    /**
                     * Properties of a NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @interface INamePart
                     * @property {string} name_part NamePart name_part
                     * @property {boolean} is_extension NamePart is_extension
                     */
    
                    /**
                     * Constructs a new NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @classdesc Represents a NamePart.
                     * @implements INamePart
                     * @constructor
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     */
                    function NamePart(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * NamePart name_part.
                     * @member {string} name_part
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.name_part = "";
    
                    /**
                     * NamePart is_extension.
                     * @member {boolean} is_extension
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.is_extension = false;
    
                    /**
                     * Creates a new NamePart instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                     */
                    NamePart.create = function create(properties) {
                        return new NamePart(properties);
                    };
    
                    /**
                     * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name_part);
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_extension);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name_part = reader.string();
                                break;
                            case 2:
                                message.is_extension = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("name_part"))
                            throw $util.ProtocolError("missing required 'name_part'", { instance: message });
                        if (!message.hasOwnProperty("is_extension"))
                            throw $util.ProtocolError("missing required 'is_extension'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a NamePart message.
                     * @function verify
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NamePart.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.name_part))
                            return "name_part: string expected";
                        if (typeof message.is_extension !== "boolean")
                            return "is_extension: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     */
                    NamePart.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                            return object;
                        var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        if (object.name_part != null)
                            message.name_part = String(object.name_part);
                        if (object.is_extension != null)
                            message.is_extension = Boolean(object.is_extension);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NamePart.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.name_part = "";
                            object.is_extension = false;
                        }
                        if (message.name_part != null && message.hasOwnProperty("name_part"))
                            object.name_part = message.name_part;
                        if (message.is_extension != null && message.hasOwnProperty("is_extension"))
                            object.is_extension = message.is_extension;
                        return object;
                    };
    
                    /**
                     * Converts this NamePart to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NamePart.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return NamePart;
                })();
    
                return UninterpretedOption;
            })();
    
            protobuf.SourceCodeInfo = (function() {
    
                /**
                 * Properties of a SourceCodeInfo.
                 * @memberof google.protobuf
                 * @interface ISourceCodeInfo
                 * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
                 */
    
                /**
                 * Constructs a new SourceCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a SourceCodeInfo.
                 * @implements ISourceCodeInfo
                 * @constructor
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 */
                function SourceCodeInfo(properties) {
                    this.location = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SourceCodeInfo location.
                 * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 */
                SourceCodeInfo.prototype.location = $util.emptyArray;
    
                /**
                 * Creates a new SourceCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
                 */
                SourceCodeInfo.create = function create(properties) {
                    return new SourceCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.location != null && message.location.length)
                        for (var i = 0; i < message.location.length; ++i)
                            $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.location && message.location.length))
                                message.location = [];
                            message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SourceCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SourceCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.location != null && message.hasOwnProperty("location")) {
                        if (!Array.isArray(message.location))
                            return "location: array expected";
                        for (var i = 0; i < message.location.length; ++i) {
                            var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                            if (error)
                                return "location." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 */
                SourceCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo();
                    if (object.location) {
                        if (!Array.isArray(object.location))
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                        message.location = [];
                        for (var i = 0; i < object.location.length; ++i) {
                            if (typeof object.location[i] !== "object")
                                throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                            message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SourceCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.location = [];
                    if (message.location && message.location.length) {
                        object.location = [];
                        for (var j = 0; j < message.location.length; ++j)
                            object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this SourceCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SourceCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                SourceCodeInfo.Location = (function() {
    
                    /**
                     * Properties of a Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @interface ILocation
                     * @property {Array.<number>|null} [path] Location path
                     * @property {Array.<number>|null} [span] Location span
                     * @property {string|null} [leading_comments] Location leading_comments
                     * @property {string|null} [trailing_comments] Location trailing_comments
                     * @property {Array.<string>|null} [leading_detached_comments] Location leading_detached_comments
                     */
    
                    /**
                     * Constructs a new Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @classdesc Represents a Location.
                     * @implements ILocation
                     * @constructor
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     */
                    function Location(properties) {
                        this.path = [];
                        this.span = [];
                        this.leading_detached_comments = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Location path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.path = $util.emptyArray;
    
                    /**
                     * Location span.
                     * @member {Array.<number>} span
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.span = $util.emptyArray;
    
                    /**
                     * Location leading_comments.
                     * @member {string} leading_comments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leading_comments = "";
    
                    /**
                     * Location trailing_comments.
                     * @member {string} trailing_comments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.trailing_comments = "";
    
                    /**
                     * Location leading_detached_comments.
                     * @member {Array.<string>} leading_detached_comments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leading_detached_comments = $util.emptyArray;
    
                    /**
                     * Creates a new Location instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                     */
                    Location.create = function create(properties) {
                        return new Location(properties);
                    };
    
                    /**
                     * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.span != null && message.span.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.span.length; ++i)
                                writer.int32(message.span[i]);
                            writer.ldelim();
                        }
                        if (message.leading_comments != null && Object.hasOwnProperty.call(message, "leading_comments"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.leading_comments);
                        if (message.trailing_comments != null && Object.hasOwnProperty.call(message, "trailing_comments"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailing_comments);
                        if (message.leading_detached_comments != null && message.leading_detached_comments.length)
                            for (var i = 0; i < message.leading_detached_comments.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.leading_detached_comments[i]);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            case 2:
                                if (!(message.span && message.span.length))
                                    message.span = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.span.push(reader.int32());
                                } else
                                    message.span.push(reader.int32());
                                break;
                            case 3:
                                message.leading_comments = reader.string();
                                break;
                            case 4:
                                message.trailing_comments = reader.string();
                                break;
                            case 6:
                                if (!(message.leading_detached_comments && message.leading_detached_comments.length))
                                    message.leading_detached_comments = [];
                                message.leading_detached_comments.push(reader.string());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Location message.
                     * @function verify
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Location.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.span != null && message.hasOwnProperty("span")) {
                            if (!Array.isArray(message.span))
                                return "span: array expected";
                            for (var i = 0; i < message.span.length; ++i)
                                if (!$util.isInteger(message.span[i]))
                                    return "span: integer[] expected";
                        }
                        if (message.leading_comments != null && message.hasOwnProperty("leading_comments"))
                            if (!$util.isString(message.leading_comments))
                                return "leading_comments: string expected";
                        if (message.trailing_comments != null && message.hasOwnProperty("trailing_comments"))
                            if (!$util.isString(message.trailing_comments))
                                return "trailing_comments: string expected";
                        if (message.leading_detached_comments != null && message.hasOwnProperty("leading_detached_comments")) {
                            if (!Array.isArray(message.leading_detached_comments))
                                return "leading_detached_comments: array expected";
                            for (var i = 0; i < message.leading_detached_comments.length; ++i)
                                if (!$util.isString(message.leading_detached_comments[i]))
                                    return "leading_detached_comments: string[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     */
                    Location.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                            return object;
                        var message = new $root.google.protobuf.SourceCodeInfo.Location();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.span) {
                            if (!Array.isArray(object.span))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                            message.span = [];
                            for (var i = 0; i < object.span.length; ++i)
                                message.span[i] = object.span[i] | 0;
                        }
                        if (object.leading_comments != null)
                            message.leading_comments = String(object.leading_comments);
                        if (object.trailing_comments != null)
                            message.trailing_comments = String(object.trailing_comments);
                        if (object.leading_detached_comments) {
                            if (!Array.isArray(object.leading_detached_comments))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.leading_detached_comments: array expected");
                            message.leading_detached_comments = [];
                            for (var i = 0; i < object.leading_detached_comments.length; ++i)
                                message.leading_detached_comments[i] = String(object.leading_detached_comments[i]);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.Location} message Location
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Location.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.path = [];
                            object.span = [];
                            object.leading_detached_comments = [];
                        }
                        if (options.defaults) {
                            object.leading_comments = "";
                            object.trailing_comments = "";
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.span && message.span.length) {
                            object.span = [];
                            for (var j = 0; j < message.span.length; ++j)
                                object.span[j] = message.span[j];
                        }
                        if (message.leading_comments != null && message.hasOwnProperty("leading_comments"))
                            object.leading_comments = message.leading_comments;
                        if (message.trailing_comments != null && message.hasOwnProperty("trailing_comments"))
                            object.trailing_comments = message.trailing_comments;
                        if (message.leading_detached_comments && message.leading_detached_comments.length) {
                            object.leading_detached_comments = [];
                            for (var j = 0; j < message.leading_detached_comments.length; ++j)
                                object.leading_detached_comments[j] = message.leading_detached_comments[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this Location to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Location.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Location;
                })();
    
                return SourceCodeInfo;
            })();
    
            protobuf.GeneratedCodeInfo = (function() {
    
                /**
                 * Properties of a GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @interface IGeneratedCodeInfo
                 * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
                 */
    
                /**
                 * Constructs a new GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a GeneratedCodeInfo.
                 * @implements IGeneratedCodeInfo
                 * @constructor
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 */
                function GeneratedCodeInfo(properties) {
                    this.annotation = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * GeneratedCodeInfo annotation.
                 * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 */
                GeneratedCodeInfo.prototype.annotation = $util.emptyArray;
    
                /**
                 * Creates a new GeneratedCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
                 */
                GeneratedCodeInfo.create = function create(properties) {
                    return new GeneratedCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.annotation != null && message.annotation.length)
                        for (var i = 0; i < message.annotation.length; ++i)
                            $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.annotation && message.annotation.length))
                                message.annotation = [];
                            message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a GeneratedCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GeneratedCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.annotation != null && message.hasOwnProperty("annotation")) {
                        if (!Array.isArray(message.annotation))
                            return "annotation: array expected";
                        for (var i = 0; i < message.annotation.length; ++i) {
                            var error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                            if (error)
                                return "annotation." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 */
                GeneratedCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.GeneratedCodeInfo();
                    if (object.annotation) {
                        if (!Array.isArray(object.annotation))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                        message.annotation = [];
                        for (var i = 0; i < object.annotation.length; ++i) {
                            if (typeof object.annotation[i] !== "object")
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                            message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GeneratedCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.annotation = [];
                    if (message.annotation && message.annotation.length) {
                        object.annotation = [];
                        for (var j = 0; j < message.annotation.length; ++j)
                            object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this GeneratedCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                GeneratedCodeInfo.Annotation = (function() {
    
                    /**
                     * Properties of an Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @interface IAnnotation
                     * @property {Array.<number>|null} [path] Annotation path
                     * @property {string|null} [source_file] Annotation source_file
                     * @property {number|null} [begin] Annotation begin
                     * @property {number|null} [end] Annotation end
                     */
    
                    /**
                     * Constructs a new Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @classdesc Represents an Annotation.
                     * @implements IAnnotation
                     * @constructor
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     */
                    function Annotation(properties) {
                        this.path = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Annotation path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.path = $util.emptyArray;
    
                    /**
                     * Annotation source_file.
                     * @member {string} source_file
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.source_file = "";
    
                    /**
                     * Annotation begin.
                     * @member {number} begin
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.begin = 0;
    
                    /**
                     * Annotation end.
                     * @member {number} end
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.end = 0;
    
                    /**
                     * Creates a new Annotation instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                     */
                    Annotation.create = function create(properties) {
                        return new Annotation(properties);
                    };
    
                    /**
                     * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.source_file != null && Object.hasOwnProperty.call(message, "source_file"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.source_file);
                        if (message.begin != null && Object.hasOwnProperty.call(message, "begin"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            case 2:
                                message.source_file = reader.string();
                                break;
                            case 3:
                                message.begin = reader.int32();
                                break;
                            case 4:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an Annotation message.
                     * @function verify
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Annotation.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.source_file != null && message.hasOwnProperty("source_file"))
                            if (!$util.isString(message.source_file))
                                return "source_file: string expected";
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            if (!$util.isInteger(message.begin))
                                return "begin: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     */
                    Annotation.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                            return object;
                        var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.source_file != null)
                            message.source_file = String(object.source_file);
                        if (object.begin != null)
                            message.begin = object.begin | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Annotation.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.path = [];
                        if (options.defaults) {
                            object.source_file = "";
                            object.begin = 0;
                            object.end = 0;
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.source_file != null && message.hasOwnProperty("source_file"))
                            object.source_file = message.source_file;
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            object.begin = message.begin;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this Annotation to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Annotation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Annotation;
                })();
    
                return GeneratedCodeInfo;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();
    
    $root.CRemoteClient_CreateSession_Request = (function() {
    
        /**
         * Properties of a CRemoteClient_CreateSession_Request.
         * @exports ICRemoteClient_CreateSession_Request
         * @interface ICRemoteClient_CreateSession_Request
         */
    
        /**
         * Constructs a new CRemoteClient_CreateSession_Request.
         * @exports CRemoteClient_CreateSession_Request
         * @classdesc Represents a CRemoteClient_CreateSession_Request.
         * @implements ICRemoteClient_CreateSession_Request
         * @constructor
         * @param {ICRemoteClient_CreateSession_Request=} [properties] Properties to set
         */
        function CRemoteClient_CreateSession_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CRemoteClient_CreateSession_Request instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_CreateSession_Request
         * @static
         * @param {ICRemoteClient_CreateSession_Request=} [properties] Properties to set
         * @returns {CRemoteClient_CreateSession_Request} CRemoteClient_CreateSession_Request instance
         */
        CRemoteClient_CreateSession_Request.create = function create(properties) {
            return new CRemoteClient_CreateSession_Request(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_CreateSession_Request message. Does not implicitly {@link CRemoteClient_CreateSession_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_CreateSession_Request
         * @static
         * @param {ICRemoteClient_CreateSession_Request} message CRemoteClient_CreateSession_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_CreateSession_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_CreateSession_Request message, length delimited. Does not implicitly {@link CRemoteClient_CreateSession_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_CreateSession_Request
         * @static
         * @param {ICRemoteClient_CreateSession_Request} message CRemoteClient_CreateSession_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_CreateSession_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_CreateSession_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_CreateSession_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_CreateSession_Request} CRemoteClient_CreateSession_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_CreateSession_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_CreateSession_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_CreateSession_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_CreateSession_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_CreateSession_Request} CRemoteClient_CreateSession_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_CreateSession_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_CreateSession_Request message.
         * @function verify
         * @memberof CRemoteClient_CreateSession_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_CreateSession_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_CreateSession_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_CreateSession_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_CreateSession_Request} CRemoteClient_CreateSession_Request
         */
        CRemoteClient_CreateSession_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_CreateSession_Request)
                return object;
            return new $root.CRemoteClient_CreateSession_Request();
        };
    
        /**
         * Creates a plain object from a CRemoteClient_CreateSession_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_CreateSession_Request
         * @static
         * @param {CRemoteClient_CreateSession_Request} message CRemoteClient_CreateSession_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_CreateSession_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CRemoteClient_CreateSession_Request to JSON.
         * @function toJSON
         * @memberof CRemoteClient_CreateSession_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_CreateSession_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_CreateSession_Request;
    })();
    
    $root.CRemoteClient_CreateSession_Response = (function() {
    
        /**
         * Properties of a CRemoteClient_CreateSession_Response.
         * @exports ICRemoteClient_CreateSession_Response
         * @interface ICRemoteClient_CreateSession_Response
         * @property {number|Long|null} [session_id] CRemoteClient_CreateSession_Response session_id
         * @property {number|null} [euniverse] CRemoteClient_CreateSession_Response euniverse
         */
    
        /**
         * Constructs a new CRemoteClient_CreateSession_Response.
         * @exports CRemoteClient_CreateSession_Response
         * @classdesc Represents a CRemoteClient_CreateSession_Response.
         * @implements ICRemoteClient_CreateSession_Response
         * @constructor
         * @param {ICRemoteClient_CreateSession_Response=} [properties] Properties to set
         */
        function CRemoteClient_CreateSession_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_CreateSession_Response session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_CreateSession_Response
         * @instance
         */
        CRemoteClient_CreateSession_Response.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_CreateSession_Response euniverse.
         * @member {number} euniverse
         * @memberof CRemoteClient_CreateSession_Response
         * @instance
         */
        CRemoteClient_CreateSession_Response.prototype.euniverse = 0;
    
        /**
         * Creates a new CRemoteClient_CreateSession_Response instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_CreateSession_Response
         * @static
         * @param {ICRemoteClient_CreateSession_Response=} [properties] Properties to set
         * @returns {CRemoteClient_CreateSession_Response} CRemoteClient_CreateSession_Response instance
         */
        CRemoteClient_CreateSession_Response.create = function create(properties) {
            return new CRemoteClient_CreateSession_Response(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_CreateSession_Response message. Does not implicitly {@link CRemoteClient_CreateSession_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_CreateSession_Response
         * @static
         * @param {ICRemoteClient_CreateSession_Response} message CRemoteClient_CreateSession_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_CreateSession_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && Object.hasOwnProperty.call(message, "session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            if (message.euniverse != null && Object.hasOwnProperty.call(message, "euniverse"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.euniverse);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_CreateSession_Response message, length delimited. Does not implicitly {@link CRemoteClient_CreateSession_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_CreateSession_Response
         * @static
         * @param {ICRemoteClient_CreateSession_Response} message CRemoteClient_CreateSession_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_CreateSession_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_CreateSession_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_CreateSession_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_CreateSession_Response} CRemoteClient_CreateSession_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_CreateSession_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_CreateSession_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                case 2:
                    message.euniverse = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_CreateSession_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_CreateSession_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_CreateSession_Response} CRemoteClient_CreateSession_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_CreateSession_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_CreateSession_Response message.
         * @function verify
         * @memberof CRemoteClient_CreateSession_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_CreateSession_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            if (message.euniverse != null && message.hasOwnProperty("euniverse"))
                if (!$util.isInteger(message.euniverse))
                    return "euniverse: integer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_CreateSession_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_CreateSession_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_CreateSession_Response} CRemoteClient_CreateSession_Response
         */
        CRemoteClient_CreateSession_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_CreateSession_Response)
                return object;
            var message = new $root.CRemoteClient_CreateSession_Response();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
            if (object.euniverse != null)
                message.euniverse = object.euniverse | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_CreateSession_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_CreateSession_Response
         * @static
         * @param {CRemoteClient_CreateSession_Response} message CRemoteClient_CreateSession_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_CreateSession_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
                object.euniverse = 0;
            }
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            if (message.euniverse != null && message.hasOwnProperty("euniverse"))
                object.euniverse = message.euniverse;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_CreateSession_Response to JSON.
         * @function toJSON
         * @memberof CRemoteClient_CreateSession_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_CreateSession_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_CreateSession_Response;
    })();
    
    $root.CRemoteClient_StartPairing_Request = (function() {
    
        /**
         * Properties of a CRemoteClient_StartPairing_Request.
         * @exports ICRemoteClient_StartPairing_Request
         * @interface ICRemoteClient_StartPairing_Request
         * @property {number|Long|null} [session_id] CRemoteClient_StartPairing_Request session_id
         */
    
        /**
         * Constructs a new CRemoteClient_StartPairing_Request.
         * @exports CRemoteClient_StartPairing_Request
         * @classdesc Represents a CRemoteClient_StartPairing_Request.
         * @implements ICRemoteClient_StartPairing_Request
         * @constructor
         * @param {ICRemoteClient_StartPairing_Request=} [properties] Properties to set
         */
        function CRemoteClient_StartPairing_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_StartPairing_Request session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_StartPairing_Request
         * @instance
         */
        CRemoteClient_StartPairing_Request.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CRemoteClient_StartPairing_Request instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_StartPairing_Request
         * @static
         * @param {ICRemoteClient_StartPairing_Request=} [properties] Properties to set
         * @returns {CRemoteClient_StartPairing_Request} CRemoteClient_StartPairing_Request instance
         */
        CRemoteClient_StartPairing_Request.create = function create(properties) {
            return new CRemoteClient_StartPairing_Request(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_StartPairing_Request message. Does not implicitly {@link CRemoteClient_StartPairing_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_StartPairing_Request
         * @static
         * @param {ICRemoteClient_StartPairing_Request} message CRemoteClient_StartPairing_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_StartPairing_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && Object.hasOwnProperty.call(message, "session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_StartPairing_Request message, length delimited. Does not implicitly {@link CRemoteClient_StartPairing_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_StartPairing_Request
         * @static
         * @param {ICRemoteClient_StartPairing_Request} message CRemoteClient_StartPairing_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_StartPairing_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_StartPairing_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_StartPairing_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_StartPairing_Request} CRemoteClient_StartPairing_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_StartPairing_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_StartPairing_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_StartPairing_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_StartPairing_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_StartPairing_Request} CRemoteClient_StartPairing_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_StartPairing_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_StartPairing_Request message.
         * @function verify
         * @memberof CRemoteClient_StartPairing_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_StartPairing_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_StartPairing_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_StartPairing_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_StartPairing_Request} CRemoteClient_StartPairing_Request
         */
        CRemoteClient_StartPairing_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_StartPairing_Request)
                return object;
            var message = new $root.CRemoteClient_StartPairing_Request();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_StartPairing_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_StartPairing_Request
         * @static
         * @param {CRemoteClient_StartPairing_Request} message CRemoteClient_StartPairing_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_StartPairing_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_StartPairing_Request to JSON.
         * @function toJSON
         * @memberof CRemoteClient_StartPairing_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_StartPairing_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_StartPairing_Request;
    })();
    
    $root.CRemoteClient_StartPairing_Response = (function() {
    
        /**
         * Properties of a CRemoteClient_StartPairing_Response.
         * @exports ICRemoteClient_StartPairing_Response
         * @interface ICRemoteClient_StartPairing_Response
         * @property {number|null} [pin] CRemoteClient_StartPairing_Response pin
         */
    
        /**
         * Constructs a new CRemoteClient_StartPairing_Response.
         * @exports CRemoteClient_StartPairing_Response
         * @classdesc Represents a CRemoteClient_StartPairing_Response.
         * @implements ICRemoteClient_StartPairing_Response
         * @constructor
         * @param {ICRemoteClient_StartPairing_Response=} [properties] Properties to set
         */
        function CRemoteClient_StartPairing_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_StartPairing_Response pin.
         * @member {number} pin
         * @memberof CRemoteClient_StartPairing_Response
         * @instance
         */
        CRemoteClient_StartPairing_Response.prototype.pin = 0;
    
        /**
         * Creates a new CRemoteClient_StartPairing_Response instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_StartPairing_Response
         * @static
         * @param {ICRemoteClient_StartPairing_Response=} [properties] Properties to set
         * @returns {CRemoteClient_StartPairing_Response} CRemoteClient_StartPairing_Response instance
         */
        CRemoteClient_StartPairing_Response.create = function create(properties) {
            return new CRemoteClient_StartPairing_Response(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_StartPairing_Response message. Does not implicitly {@link CRemoteClient_StartPairing_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_StartPairing_Response
         * @static
         * @param {ICRemoteClient_StartPairing_Response} message CRemoteClient_StartPairing_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_StartPairing_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pin != null && Object.hasOwnProperty.call(message, "pin"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.pin);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_StartPairing_Response message, length delimited. Does not implicitly {@link CRemoteClient_StartPairing_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_StartPairing_Response
         * @static
         * @param {ICRemoteClient_StartPairing_Response} message CRemoteClient_StartPairing_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_StartPairing_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_StartPairing_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_StartPairing_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_StartPairing_Response} CRemoteClient_StartPairing_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_StartPairing_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_StartPairing_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pin = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_StartPairing_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_StartPairing_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_StartPairing_Response} CRemoteClient_StartPairing_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_StartPairing_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_StartPairing_Response message.
         * @function verify
         * @memberof CRemoteClient_StartPairing_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_StartPairing_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pin != null && message.hasOwnProperty("pin"))
                if (!$util.isInteger(message.pin))
                    return "pin: integer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_StartPairing_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_StartPairing_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_StartPairing_Response} CRemoteClient_StartPairing_Response
         */
        CRemoteClient_StartPairing_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_StartPairing_Response)
                return object;
            var message = new $root.CRemoteClient_StartPairing_Response();
            if (object.pin != null)
                message.pin = object.pin >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_StartPairing_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_StartPairing_Response
         * @static
         * @param {CRemoteClient_StartPairing_Response} message CRemoteClient_StartPairing_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_StartPairing_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.pin = 0;
            if (message.pin != null && message.hasOwnProperty("pin"))
                object.pin = message.pin;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_StartPairing_Response to JSON.
         * @function toJSON
         * @memberof CRemoteClient_StartPairing_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_StartPairing_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_StartPairing_Response;
    })();
    
    $root.CRemoteClient_SetPairingInfo_Request = (function() {
    
        /**
         * Properties of a CRemoteClient_SetPairingInfo_Request.
         * @exports ICRemoteClient_SetPairingInfo_Request
         * @interface ICRemoteClient_SetPairingInfo_Request
         * @property {number|Long|null} [session_id] CRemoteClient_SetPairingInfo_Request session_id
         * @property {number|Long|null} [device_id] CRemoteClient_SetPairingInfo_Request device_id
         * @property {Uint8Array|null} [request] CRemoteClient_SetPairingInfo_Request request
         */
    
        /**
         * Constructs a new CRemoteClient_SetPairingInfo_Request.
         * @exports CRemoteClient_SetPairingInfo_Request
         * @classdesc Represents a CRemoteClient_SetPairingInfo_Request.
         * @implements ICRemoteClient_SetPairingInfo_Request
         * @constructor
         * @param {ICRemoteClient_SetPairingInfo_Request=} [properties] Properties to set
         */
        function CRemoteClient_SetPairingInfo_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_SetPairingInfo_Request session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @instance
         */
        CRemoteClient_SetPairingInfo_Request.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_SetPairingInfo_Request device_id.
         * @member {number|Long} device_id
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @instance
         */
        CRemoteClient_SetPairingInfo_Request.prototype.device_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_SetPairingInfo_Request request.
         * @member {Uint8Array} request
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @instance
         */
        CRemoteClient_SetPairingInfo_Request.prototype.request = $util.newBuffer([]);
    
        /**
         * Creates a new CRemoteClient_SetPairingInfo_Request instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @static
         * @param {ICRemoteClient_SetPairingInfo_Request=} [properties] Properties to set
         * @returns {CRemoteClient_SetPairingInfo_Request} CRemoteClient_SetPairingInfo_Request instance
         */
        CRemoteClient_SetPairingInfo_Request.create = function create(properties) {
            return new CRemoteClient_SetPairingInfo_Request(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_SetPairingInfo_Request message. Does not implicitly {@link CRemoteClient_SetPairingInfo_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @static
         * @param {ICRemoteClient_SetPairingInfo_Request} message CRemoteClient_SetPairingInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_SetPairingInfo_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && Object.hasOwnProperty.call(message, "session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            if (message.device_id != null && Object.hasOwnProperty.call(message, "device_id"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.device_id);
            if (message.request != null && Object.hasOwnProperty.call(message, "request"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.request);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_SetPairingInfo_Request message, length delimited. Does not implicitly {@link CRemoteClient_SetPairingInfo_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @static
         * @param {ICRemoteClient_SetPairingInfo_Request} message CRemoteClient_SetPairingInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_SetPairingInfo_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_SetPairingInfo_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_SetPairingInfo_Request} CRemoteClient_SetPairingInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_SetPairingInfo_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_SetPairingInfo_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                case 2:
                    message.device_id = reader.fixed64();
                    break;
                case 3:
                    message.request = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_SetPairingInfo_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_SetPairingInfo_Request} CRemoteClient_SetPairingInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_SetPairingInfo_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_SetPairingInfo_Request message.
         * @function verify
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_SetPairingInfo_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (!$util.isInteger(message.device_id) && !(message.device_id && $util.isInteger(message.device_id.low) && $util.isInteger(message.device_id.high)))
                    return "device_id: integer|Long expected";
            if (message.request != null && message.hasOwnProperty("request"))
                if (!(message.request && typeof message.request.length === "number" || $util.isString(message.request)))
                    return "request: buffer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_SetPairingInfo_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_SetPairingInfo_Request} CRemoteClient_SetPairingInfo_Request
         */
        CRemoteClient_SetPairingInfo_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_SetPairingInfo_Request)
                return object;
            var message = new $root.CRemoteClient_SetPairingInfo_Request();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
            if (object.device_id != null)
                if ($util.Long)
                    (message.device_id = $util.Long.fromValue(object.device_id)).unsigned = false;
                else if (typeof object.device_id === "string")
                    message.device_id = parseInt(object.device_id, 10);
                else if (typeof object.device_id === "number")
                    message.device_id = object.device_id;
                else if (typeof object.device_id === "object")
                    message.device_id = new $util.LongBits(object.device_id.low >>> 0, object.device_id.high >>> 0).toNumber();
            if (object.request != null)
                if (typeof object.request === "string")
                    $util.base64.decode(object.request, message.request = $util.newBuffer($util.base64.length(object.request)), 0);
                else if (object.request.length)
                    message.request = object.request;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_SetPairingInfo_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @static
         * @param {CRemoteClient_SetPairingInfo_Request} message CRemoteClient_SetPairingInfo_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_SetPairingInfo_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.device_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.device_id = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.request = "";
                else {
                    object.request = [];
                    if (options.bytes !== Array)
                        object.request = $util.newBuffer(object.request);
                }
            }
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (typeof message.device_id === "number")
                    object.device_id = options.longs === String ? String(message.device_id) : message.device_id;
                else
                    object.device_id = options.longs === String ? $util.Long.prototype.toString.call(message.device_id) : options.longs === Number ? new $util.LongBits(message.device_id.low >>> 0, message.device_id.high >>> 0).toNumber() : message.device_id;
            if (message.request != null && message.hasOwnProperty("request"))
                object.request = options.bytes === String ? $util.base64.encode(message.request, 0, message.request.length) : options.bytes === Array ? Array.prototype.slice.call(message.request) : message.request;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_SetPairingInfo_Request to JSON.
         * @function toJSON
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_SetPairingInfo_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_SetPairingInfo_Request;
    })();
    
    $root.CRemoteClient_SetPairingInfo_Response = (function() {
    
        /**
         * Properties of a CRemoteClient_SetPairingInfo_Response.
         * @exports ICRemoteClient_SetPairingInfo_Response
         * @interface ICRemoteClient_SetPairingInfo_Response
         */
    
        /**
         * Constructs a new CRemoteClient_SetPairingInfo_Response.
         * @exports CRemoteClient_SetPairingInfo_Response
         * @classdesc Represents a CRemoteClient_SetPairingInfo_Response.
         * @implements ICRemoteClient_SetPairingInfo_Response
         * @constructor
         * @param {ICRemoteClient_SetPairingInfo_Response=} [properties] Properties to set
         */
        function CRemoteClient_SetPairingInfo_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CRemoteClient_SetPairingInfo_Response instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_SetPairingInfo_Response
         * @static
         * @param {ICRemoteClient_SetPairingInfo_Response=} [properties] Properties to set
         * @returns {CRemoteClient_SetPairingInfo_Response} CRemoteClient_SetPairingInfo_Response instance
         */
        CRemoteClient_SetPairingInfo_Response.create = function create(properties) {
            return new CRemoteClient_SetPairingInfo_Response(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_SetPairingInfo_Response message. Does not implicitly {@link CRemoteClient_SetPairingInfo_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_SetPairingInfo_Response
         * @static
         * @param {ICRemoteClient_SetPairingInfo_Response} message CRemoteClient_SetPairingInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_SetPairingInfo_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_SetPairingInfo_Response message, length delimited. Does not implicitly {@link CRemoteClient_SetPairingInfo_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_SetPairingInfo_Response
         * @static
         * @param {ICRemoteClient_SetPairingInfo_Response} message CRemoteClient_SetPairingInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_SetPairingInfo_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_SetPairingInfo_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_SetPairingInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_SetPairingInfo_Response} CRemoteClient_SetPairingInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_SetPairingInfo_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_SetPairingInfo_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_SetPairingInfo_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_SetPairingInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_SetPairingInfo_Response} CRemoteClient_SetPairingInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_SetPairingInfo_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_SetPairingInfo_Response message.
         * @function verify
         * @memberof CRemoteClient_SetPairingInfo_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_SetPairingInfo_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_SetPairingInfo_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_SetPairingInfo_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_SetPairingInfo_Response} CRemoteClient_SetPairingInfo_Response
         */
        CRemoteClient_SetPairingInfo_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_SetPairingInfo_Response)
                return object;
            return new $root.CRemoteClient_SetPairingInfo_Response();
        };
    
        /**
         * Creates a plain object from a CRemoteClient_SetPairingInfo_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_SetPairingInfo_Response
         * @static
         * @param {CRemoteClient_SetPairingInfo_Response} message CRemoteClient_SetPairingInfo_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_SetPairingInfo_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CRemoteClient_SetPairingInfo_Response to JSON.
         * @function toJSON
         * @memberof CRemoteClient_SetPairingInfo_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_SetPairingInfo_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_SetPairingInfo_Response;
    })();
    
    $root.CRemoteClient_GetPairingInfo_Request = (function() {
    
        /**
         * Properties of a CRemoteClient_GetPairingInfo_Request.
         * @exports ICRemoteClient_GetPairingInfo_Request
         * @interface ICRemoteClient_GetPairingInfo_Request
         * @property {number|null} [pin] CRemoteClient_GetPairingInfo_Request pin
         */
    
        /**
         * Constructs a new CRemoteClient_GetPairingInfo_Request.
         * @exports CRemoteClient_GetPairingInfo_Request
         * @classdesc Represents a CRemoteClient_GetPairingInfo_Request.
         * @implements ICRemoteClient_GetPairingInfo_Request
         * @constructor
         * @param {ICRemoteClient_GetPairingInfo_Request=} [properties] Properties to set
         */
        function CRemoteClient_GetPairingInfo_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_GetPairingInfo_Request pin.
         * @member {number} pin
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @instance
         */
        CRemoteClient_GetPairingInfo_Request.prototype.pin = 0;
    
        /**
         * Creates a new CRemoteClient_GetPairingInfo_Request instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @static
         * @param {ICRemoteClient_GetPairingInfo_Request=} [properties] Properties to set
         * @returns {CRemoteClient_GetPairingInfo_Request} CRemoteClient_GetPairingInfo_Request instance
         */
        CRemoteClient_GetPairingInfo_Request.create = function create(properties) {
            return new CRemoteClient_GetPairingInfo_Request(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_GetPairingInfo_Request message. Does not implicitly {@link CRemoteClient_GetPairingInfo_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @static
         * @param {ICRemoteClient_GetPairingInfo_Request} message CRemoteClient_GetPairingInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_GetPairingInfo_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pin != null && Object.hasOwnProperty.call(message, "pin"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.pin);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_GetPairingInfo_Request message, length delimited. Does not implicitly {@link CRemoteClient_GetPairingInfo_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @static
         * @param {ICRemoteClient_GetPairingInfo_Request} message CRemoteClient_GetPairingInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_GetPairingInfo_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_GetPairingInfo_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_GetPairingInfo_Request} CRemoteClient_GetPairingInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_GetPairingInfo_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_GetPairingInfo_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pin = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_GetPairingInfo_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_GetPairingInfo_Request} CRemoteClient_GetPairingInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_GetPairingInfo_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_GetPairingInfo_Request message.
         * @function verify
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_GetPairingInfo_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pin != null && message.hasOwnProperty("pin"))
                if (!$util.isInteger(message.pin))
                    return "pin: integer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_GetPairingInfo_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_GetPairingInfo_Request} CRemoteClient_GetPairingInfo_Request
         */
        CRemoteClient_GetPairingInfo_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_GetPairingInfo_Request)
                return object;
            var message = new $root.CRemoteClient_GetPairingInfo_Request();
            if (object.pin != null)
                message.pin = object.pin >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_GetPairingInfo_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @static
         * @param {CRemoteClient_GetPairingInfo_Request} message CRemoteClient_GetPairingInfo_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_GetPairingInfo_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.pin = 0;
            if (message.pin != null && message.hasOwnProperty("pin"))
                object.pin = message.pin;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_GetPairingInfo_Request to JSON.
         * @function toJSON
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_GetPairingInfo_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_GetPairingInfo_Request;
    })();
    
    $root.CRemoteClient_GetPairingInfo_Response = (function() {
    
        /**
         * Properties of a CRemoteClient_GetPairingInfo_Response.
         * @exports ICRemoteClient_GetPairingInfo_Response
         * @interface ICRemoteClient_GetPairingInfo_Response
         * @property {number|Long|null} [session_id] CRemoteClient_GetPairingInfo_Response session_id
         * @property {number|Long|null} [device_id] CRemoteClient_GetPairingInfo_Response device_id
         * @property {Uint8Array|null} [request] CRemoteClient_GetPairingInfo_Response request
         */
    
        /**
         * Constructs a new CRemoteClient_GetPairingInfo_Response.
         * @exports CRemoteClient_GetPairingInfo_Response
         * @classdesc Represents a CRemoteClient_GetPairingInfo_Response.
         * @implements ICRemoteClient_GetPairingInfo_Response
         * @constructor
         * @param {ICRemoteClient_GetPairingInfo_Response=} [properties] Properties to set
         */
        function CRemoteClient_GetPairingInfo_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_GetPairingInfo_Response session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @instance
         */
        CRemoteClient_GetPairingInfo_Response.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_GetPairingInfo_Response device_id.
         * @member {number|Long} device_id
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @instance
         */
        CRemoteClient_GetPairingInfo_Response.prototype.device_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_GetPairingInfo_Response request.
         * @member {Uint8Array} request
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @instance
         */
        CRemoteClient_GetPairingInfo_Response.prototype.request = $util.newBuffer([]);
    
        /**
         * Creates a new CRemoteClient_GetPairingInfo_Response instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @static
         * @param {ICRemoteClient_GetPairingInfo_Response=} [properties] Properties to set
         * @returns {CRemoteClient_GetPairingInfo_Response} CRemoteClient_GetPairingInfo_Response instance
         */
        CRemoteClient_GetPairingInfo_Response.create = function create(properties) {
            return new CRemoteClient_GetPairingInfo_Response(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_GetPairingInfo_Response message. Does not implicitly {@link CRemoteClient_GetPairingInfo_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @static
         * @param {ICRemoteClient_GetPairingInfo_Response} message CRemoteClient_GetPairingInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_GetPairingInfo_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && Object.hasOwnProperty.call(message, "session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            if (message.device_id != null && Object.hasOwnProperty.call(message, "device_id"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.device_id);
            if (message.request != null && Object.hasOwnProperty.call(message, "request"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.request);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_GetPairingInfo_Response message, length delimited. Does not implicitly {@link CRemoteClient_GetPairingInfo_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @static
         * @param {ICRemoteClient_GetPairingInfo_Response} message CRemoteClient_GetPairingInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_GetPairingInfo_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_GetPairingInfo_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_GetPairingInfo_Response} CRemoteClient_GetPairingInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_GetPairingInfo_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_GetPairingInfo_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                case 2:
                    message.device_id = reader.fixed64();
                    break;
                case 3:
                    message.request = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_GetPairingInfo_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_GetPairingInfo_Response} CRemoteClient_GetPairingInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_GetPairingInfo_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_GetPairingInfo_Response message.
         * @function verify
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_GetPairingInfo_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (!$util.isInteger(message.device_id) && !(message.device_id && $util.isInteger(message.device_id.low) && $util.isInteger(message.device_id.high)))
                    return "device_id: integer|Long expected";
            if (message.request != null && message.hasOwnProperty("request"))
                if (!(message.request && typeof message.request.length === "number" || $util.isString(message.request)))
                    return "request: buffer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_GetPairingInfo_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_GetPairingInfo_Response} CRemoteClient_GetPairingInfo_Response
         */
        CRemoteClient_GetPairingInfo_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_GetPairingInfo_Response)
                return object;
            var message = new $root.CRemoteClient_GetPairingInfo_Response();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
            if (object.device_id != null)
                if ($util.Long)
                    (message.device_id = $util.Long.fromValue(object.device_id)).unsigned = false;
                else if (typeof object.device_id === "string")
                    message.device_id = parseInt(object.device_id, 10);
                else if (typeof object.device_id === "number")
                    message.device_id = object.device_id;
                else if (typeof object.device_id === "object")
                    message.device_id = new $util.LongBits(object.device_id.low >>> 0, object.device_id.high >>> 0).toNumber();
            if (object.request != null)
                if (typeof object.request === "string")
                    $util.base64.decode(object.request, message.request = $util.newBuffer($util.base64.length(object.request)), 0);
                else if (object.request.length)
                    message.request = object.request;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_GetPairingInfo_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @static
         * @param {CRemoteClient_GetPairingInfo_Response} message CRemoteClient_GetPairingInfo_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_GetPairingInfo_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.device_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.device_id = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.request = "";
                else {
                    object.request = [];
                    if (options.bytes !== Array)
                        object.request = $util.newBuffer(object.request);
                }
            }
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (typeof message.device_id === "number")
                    object.device_id = options.longs === String ? String(message.device_id) : message.device_id;
                else
                    object.device_id = options.longs === String ? $util.Long.prototype.toString.call(message.device_id) : options.longs === Number ? new $util.LongBits(message.device_id.low >>> 0, message.device_id.high >>> 0).toNumber() : message.device_id;
            if (message.request != null && message.hasOwnProperty("request"))
                object.request = options.bytes === String ? $util.base64.encode(message.request, 0, message.request.length) : options.bytes === Array ? Array.prototype.slice.call(message.request) : message.request;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_GetPairingInfo_Response to JSON.
         * @function toJSON
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_GetPairingInfo_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_GetPairingInfo_Response;
    })();
    
    $root.CRemoteClient_CancelPairing_Request = (function() {
    
        /**
         * Properties of a CRemoteClient_CancelPairing_Request.
         * @exports ICRemoteClient_CancelPairing_Request
         * @interface ICRemoteClient_CancelPairing_Request
         * @property {number|Long|null} [session_id] CRemoteClient_CancelPairing_Request session_id
         */
    
        /**
         * Constructs a new CRemoteClient_CancelPairing_Request.
         * @exports CRemoteClient_CancelPairing_Request
         * @classdesc Represents a CRemoteClient_CancelPairing_Request.
         * @implements ICRemoteClient_CancelPairing_Request
         * @constructor
         * @param {ICRemoteClient_CancelPairing_Request=} [properties] Properties to set
         */
        function CRemoteClient_CancelPairing_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_CancelPairing_Request session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_CancelPairing_Request
         * @instance
         */
        CRemoteClient_CancelPairing_Request.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CRemoteClient_CancelPairing_Request instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_CancelPairing_Request
         * @static
         * @param {ICRemoteClient_CancelPairing_Request=} [properties] Properties to set
         * @returns {CRemoteClient_CancelPairing_Request} CRemoteClient_CancelPairing_Request instance
         */
        CRemoteClient_CancelPairing_Request.create = function create(properties) {
            return new CRemoteClient_CancelPairing_Request(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_CancelPairing_Request message. Does not implicitly {@link CRemoteClient_CancelPairing_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_CancelPairing_Request
         * @static
         * @param {ICRemoteClient_CancelPairing_Request} message CRemoteClient_CancelPairing_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_CancelPairing_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && Object.hasOwnProperty.call(message, "session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_CancelPairing_Request message, length delimited. Does not implicitly {@link CRemoteClient_CancelPairing_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_CancelPairing_Request
         * @static
         * @param {ICRemoteClient_CancelPairing_Request} message CRemoteClient_CancelPairing_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_CancelPairing_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_CancelPairing_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_CancelPairing_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_CancelPairing_Request} CRemoteClient_CancelPairing_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_CancelPairing_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_CancelPairing_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_CancelPairing_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_CancelPairing_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_CancelPairing_Request} CRemoteClient_CancelPairing_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_CancelPairing_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_CancelPairing_Request message.
         * @function verify
         * @memberof CRemoteClient_CancelPairing_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_CancelPairing_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_CancelPairing_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_CancelPairing_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_CancelPairing_Request} CRemoteClient_CancelPairing_Request
         */
        CRemoteClient_CancelPairing_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_CancelPairing_Request)
                return object;
            var message = new $root.CRemoteClient_CancelPairing_Request();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_CancelPairing_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_CancelPairing_Request
         * @static
         * @param {CRemoteClient_CancelPairing_Request} message CRemoteClient_CancelPairing_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_CancelPairing_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_CancelPairing_Request to JSON.
         * @function toJSON
         * @memberof CRemoteClient_CancelPairing_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_CancelPairing_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_CancelPairing_Request;
    })();
    
    $root.CRemoteClient_CancelPairing_Response = (function() {
    
        /**
         * Properties of a CRemoteClient_CancelPairing_Response.
         * @exports ICRemoteClient_CancelPairing_Response
         * @interface ICRemoteClient_CancelPairing_Response
         */
    
        /**
         * Constructs a new CRemoteClient_CancelPairing_Response.
         * @exports CRemoteClient_CancelPairing_Response
         * @classdesc Represents a CRemoteClient_CancelPairing_Response.
         * @implements ICRemoteClient_CancelPairing_Response
         * @constructor
         * @param {ICRemoteClient_CancelPairing_Response=} [properties] Properties to set
         */
        function CRemoteClient_CancelPairing_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CRemoteClient_CancelPairing_Response instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_CancelPairing_Response
         * @static
         * @param {ICRemoteClient_CancelPairing_Response=} [properties] Properties to set
         * @returns {CRemoteClient_CancelPairing_Response} CRemoteClient_CancelPairing_Response instance
         */
        CRemoteClient_CancelPairing_Response.create = function create(properties) {
            return new CRemoteClient_CancelPairing_Response(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_CancelPairing_Response message. Does not implicitly {@link CRemoteClient_CancelPairing_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_CancelPairing_Response
         * @static
         * @param {ICRemoteClient_CancelPairing_Response} message CRemoteClient_CancelPairing_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_CancelPairing_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_CancelPairing_Response message, length delimited. Does not implicitly {@link CRemoteClient_CancelPairing_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_CancelPairing_Response
         * @static
         * @param {ICRemoteClient_CancelPairing_Response} message CRemoteClient_CancelPairing_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_CancelPairing_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_CancelPairing_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_CancelPairing_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_CancelPairing_Response} CRemoteClient_CancelPairing_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_CancelPairing_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_CancelPairing_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_CancelPairing_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_CancelPairing_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_CancelPairing_Response} CRemoteClient_CancelPairing_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_CancelPairing_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_CancelPairing_Response message.
         * @function verify
         * @memberof CRemoteClient_CancelPairing_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_CancelPairing_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_CancelPairing_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_CancelPairing_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_CancelPairing_Response} CRemoteClient_CancelPairing_Response
         */
        CRemoteClient_CancelPairing_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_CancelPairing_Response)
                return object;
            return new $root.CRemoteClient_CancelPairing_Response();
        };
    
        /**
         * Creates a plain object from a CRemoteClient_CancelPairing_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_CancelPairing_Response
         * @static
         * @param {CRemoteClient_CancelPairing_Response} message CRemoteClient_CancelPairing_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_CancelPairing_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CRemoteClient_CancelPairing_Response to JSON.
         * @function toJSON
         * @memberof CRemoteClient_CancelPairing_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_CancelPairing_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_CancelPairing_Response;
    })();
    
    $root.CRemoteClient_RegisterStatusUpdate_Notification = (function() {
    
        /**
         * Properties of a CRemoteClient_RegisterStatusUpdate_Notification.
         * @exports ICRemoteClient_RegisterStatusUpdate_Notification
         * @interface ICRemoteClient_RegisterStatusUpdate_Notification
         * @property {number|Long|null} [session_id] CRemoteClient_RegisterStatusUpdate_Notification session_id
         * @property {number|Long|null} [steamid] CRemoteClient_RegisterStatusUpdate_Notification steamid
         * @property {number|Long|null} [device_id] CRemoteClient_RegisterStatusUpdate_Notification device_id
         */
    
        /**
         * Constructs a new CRemoteClient_RegisterStatusUpdate_Notification.
         * @exports CRemoteClient_RegisterStatusUpdate_Notification
         * @classdesc Represents a CRemoteClient_RegisterStatusUpdate_Notification.
         * @implements ICRemoteClient_RegisterStatusUpdate_Notification
         * @constructor
         * @param {ICRemoteClient_RegisterStatusUpdate_Notification=} [properties] Properties to set
         */
        function CRemoteClient_RegisterStatusUpdate_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_RegisterStatusUpdate_Notification session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @instance
         */
        CRemoteClient_RegisterStatusUpdate_Notification.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_RegisterStatusUpdate_Notification steamid.
         * @member {number|Long} steamid
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @instance
         */
        CRemoteClient_RegisterStatusUpdate_Notification.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_RegisterStatusUpdate_Notification device_id.
         * @member {number|Long} device_id
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @instance
         */
        CRemoteClient_RegisterStatusUpdate_Notification.prototype.device_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CRemoteClient_RegisterStatusUpdate_Notification instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @static
         * @param {ICRemoteClient_RegisterStatusUpdate_Notification=} [properties] Properties to set
         * @returns {CRemoteClient_RegisterStatusUpdate_Notification} CRemoteClient_RegisterStatusUpdate_Notification instance
         */
        CRemoteClient_RegisterStatusUpdate_Notification.create = function create(properties) {
            return new CRemoteClient_RegisterStatusUpdate_Notification(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_RegisterStatusUpdate_Notification message. Does not implicitly {@link CRemoteClient_RegisterStatusUpdate_Notification.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @static
         * @param {ICRemoteClient_RegisterStatusUpdate_Notification} message CRemoteClient_RegisterStatusUpdate_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_RegisterStatusUpdate_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && Object.hasOwnProperty.call(message, "session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.steamid);
            if (message.device_id != null && Object.hasOwnProperty.call(message, "device_id"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.device_id);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_RegisterStatusUpdate_Notification message, length delimited. Does not implicitly {@link CRemoteClient_RegisterStatusUpdate_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @static
         * @param {ICRemoteClient_RegisterStatusUpdate_Notification} message CRemoteClient_RegisterStatusUpdate_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_RegisterStatusUpdate_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_RegisterStatusUpdate_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_RegisterStatusUpdate_Notification} CRemoteClient_RegisterStatusUpdate_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_RegisterStatusUpdate_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_RegisterStatusUpdate_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                case 2:
                    message.steamid = reader.fixed64();
                    break;
                case 3:
                    message.device_id = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_RegisterStatusUpdate_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_RegisterStatusUpdate_Notification} CRemoteClient_RegisterStatusUpdate_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_RegisterStatusUpdate_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_RegisterStatusUpdate_Notification message.
         * @function verify
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_RegisterStatusUpdate_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (!$util.isInteger(message.device_id) && !(message.device_id && $util.isInteger(message.device_id.low) && $util.isInteger(message.device_id.high)))
                    return "device_id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_RegisterStatusUpdate_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_RegisterStatusUpdate_Notification} CRemoteClient_RegisterStatusUpdate_Notification
         */
        CRemoteClient_RegisterStatusUpdate_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_RegisterStatusUpdate_Notification)
                return object;
            var message = new $root.CRemoteClient_RegisterStatusUpdate_Notification();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.device_id != null)
                if ($util.Long)
                    (message.device_id = $util.Long.fromValue(object.device_id)).unsigned = false;
                else if (typeof object.device_id === "string")
                    message.device_id = parseInt(object.device_id, 10);
                else if (typeof object.device_id === "number")
                    message.device_id = object.device_id;
                else if (typeof object.device_id === "object")
                    message.device_id = new $util.LongBits(object.device_id.low >>> 0, object.device_id.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_RegisterStatusUpdate_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @static
         * @param {CRemoteClient_RegisterStatusUpdate_Notification} message CRemoteClient_RegisterStatusUpdate_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_RegisterStatusUpdate_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.device_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.device_id = options.longs === String ? "0" : 0;
            }
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (typeof message.device_id === "number")
                    object.device_id = options.longs === String ? String(message.device_id) : message.device_id;
                else
                    object.device_id = options.longs === String ? $util.Long.prototype.toString.call(message.device_id) : options.longs === Number ? new $util.LongBits(message.device_id.low >>> 0, message.device_id.high >>> 0).toNumber() : message.device_id;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_RegisterStatusUpdate_Notification to JSON.
         * @function toJSON
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_RegisterStatusUpdate_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_RegisterStatusUpdate_Notification;
    })();
    
    $root.CRemoteClient_UnregisterStatusUpdate_Notification = (function() {
    
        /**
         * Properties of a CRemoteClient_UnregisterStatusUpdate_Notification.
         * @exports ICRemoteClient_UnregisterStatusUpdate_Notification
         * @interface ICRemoteClient_UnregisterStatusUpdate_Notification
         * @property {number|Long|null} [session_id] CRemoteClient_UnregisterStatusUpdate_Notification session_id
         * @property {number|Long|null} [steamid] CRemoteClient_UnregisterStatusUpdate_Notification steamid
         */
    
        /**
         * Constructs a new CRemoteClient_UnregisterStatusUpdate_Notification.
         * @exports CRemoteClient_UnregisterStatusUpdate_Notification
         * @classdesc Represents a CRemoteClient_UnregisterStatusUpdate_Notification.
         * @implements ICRemoteClient_UnregisterStatusUpdate_Notification
         * @constructor
         * @param {ICRemoteClient_UnregisterStatusUpdate_Notification=} [properties] Properties to set
         */
        function CRemoteClient_UnregisterStatusUpdate_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_UnregisterStatusUpdate_Notification session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @instance
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_UnregisterStatusUpdate_Notification steamid.
         * @member {number|Long} steamid
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @instance
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CRemoteClient_UnregisterStatusUpdate_Notification instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @static
         * @param {ICRemoteClient_UnregisterStatusUpdate_Notification=} [properties] Properties to set
         * @returns {CRemoteClient_UnregisterStatusUpdate_Notification} CRemoteClient_UnregisterStatusUpdate_Notification instance
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.create = function create(properties) {
            return new CRemoteClient_UnregisterStatusUpdate_Notification(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_UnregisterStatusUpdate_Notification message. Does not implicitly {@link CRemoteClient_UnregisterStatusUpdate_Notification.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @static
         * @param {ICRemoteClient_UnregisterStatusUpdate_Notification} message CRemoteClient_UnregisterStatusUpdate_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && Object.hasOwnProperty.call(message, "session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_UnregisterStatusUpdate_Notification message, length delimited. Does not implicitly {@link CRemoteClient_UnregisterStatusUpdate_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @static
         * @param {ICRemoteClient_UnregisterStatusUpdate_Notification} message CRemoteClient_UnregisterStatusUpdate_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_UnregisterStatusUpdate_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_UnregisterStatusUpdate_Notification} CRemoteClient_UnregisterStatusUpdate_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_UnregisterStatusUpdate_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                case 2:
                    message.steamid = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_UnregisterStatusUpdate_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_UnregisterStatusUpdate_Notification} CRemoteClient_UnregisterStatusUpdate_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_UnregisterStatusUpdate_Notification message.
         * @function verify
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_UnregisterStatusUpdate_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_UnregisterStatusUpdate_Notification} CRemoteClient_UnregisterStatusUpdate_Notification
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_UnregisterStatusUpdate_Notification)
                return object;
            var message = new $root.CRemoteClient_UnregisterStatusUpdate_Notification();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_UnregisterStatusUpdate_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @static
         * @param {CRemoteClient_UnregisterStatusUpdate_Notification} message CRemoteClient_UnregisterStatusUpdate_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            }
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_UnregisterStatusUpdate_Notification to JSON.
         * @function toJSON
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_UnregisterStatusUpdate_Notification;
    })();
    
    $root.CRemoteClient_Online_Notification = (function() {
    
        /**
         * Properties of a CRemoteClient_Online_Notification.
         * @exports ICRemoteClient_Online_Notification
         * @interface ICRemoteClient_Online_Notification
         * @property {number|Long|null} [steamid] CRemoteClient_Online_Notification steamid
         */
    
        /**
         * Constructs a new CRemoteClient_Online_Notification.
         * @exports CRemoteClient_Online_Notification
         * @classdesc Represents a CRemoteClient_Online_Notification.
         * @implements ICRemoteClient_Online_Notification
         * @constructor
         * @param {ICRemoteClient_Online_Notification=} [properties] Properties to set
         */
        function CRemoteClient_Online_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_Online_Notification steamid.
         * @member {number|Long} steamid
         * @memberof CRemoteClient_Online_Notification
         * @instance
         */
        CRemoteClient_Online_Notification.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CRemoteClient_Online_Notification instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_Online_Notification
         * @static
         * @param {ICRemoteClient_Online_Notification=} [properties] Properties to set
         * @returns {CRemoteClient_Online_Notification} CRemoteClient_Online_Notification instance
         */
        CRemoteClient_Online_Notification.create = function create(properties) {
            return new CRemoteClient_Online_Notification(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_Online_Notification message. Does not implicitly {@link CRemoteClient_Online_Notification.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_Online_Notification
         * @static
         * @param {ICRemoteClient_Online_Notification} message CRemoteClient_Online_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_Online_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_Online_Notification message, length delimited. Does not implicitly {@link CRemoteClient_Online_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_Online_Notification
         * @static
         * @param {ICRemoteClient_Online_Notification} message CRemoteClient_Online_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_Online_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_Online_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_Online_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_Online_Notification} CRemoteClient_Online_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_Online_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_Online_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_Online_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_Online_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_Online_Notification} CRemoteClient_Online_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_Online_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_Online_Notification message.
         * @function verify
         * @memberof CRemoteClient_Online_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_Online_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_Online_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_Online_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_Online_Notification} CRemoteClient_Online_Notification
         */
        CRemoteClient_Online_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_Online_Notification)
                return object;
            var message = new $root.CRemoteClient_Online_Notification();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_Online_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_Online_Notification
         * @static
         * @param {CRemoteClient_Online_Notification} message CRemoteClient_Online_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_Online_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_Online_Notification to JSON.
         * @function toJSON
         * @memberof CRemoteClient_Online_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_Online_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_Online_Notification;
    })();
    
    $root.CRemoteClient_RemotePacket_Notification = (function() {
    
        /**
         * Properties of a CRemoteClient_RemotePacket_Notification.
         * @exports ICRemoteClient_RemotePacket_Notification
         * @interface ICRemoteClient_RemotePacket_Notification
         * @property {number|Long|null} [session_id] CRemoteClient_RemotePacket_Notification session_id
         * @property {number|Long|null} [steamid] CRemoteClient_RemotePacket_Notification steamid
         * @property {Uint8Array|null} [payload] CRemoteClient_RemotePacket_Notification payload
         */
    
        /**
         * Constructs a new CRemoteClient_RemotePacket_Notification.
         * @exports CRemoteClient_RemotePacket_Notification
         * @classdesc Represents a CRemoteClient_RemotePacket_Notification.
         * @implements ICRemoteClient_RemotePacket_Notification
         * @constructor
         * @param {ICRemoteClient_RemotePacket_Notification=} [properties] Properties to set
         */
        function CRemoteClient_RemotePacket_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_RemotePacket_Notification session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_RemotePacket_Notification
         * @instance
         */
        CRemoteClient_RemotePacket_Notification.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_RemotePacket_Notification steamid.
         * @member {number|Long} steamid
         * @memberof CRemoteClient_RemotePacket_Notification
         * @instance
         */
        CRemoteClient_RemotePacket_Notification.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_RemotePacket_Notification payload.
         * @member {Uint8Array} payload
         * @memberof CRemoteClient_RemotePacket_Notification
         * @instance
         */
        CRemoteClient_RemotePacket_Notification.prototype.payload = $util.newBuffer([]);
    
        /**
         * Creates a new CRemoteClient_RemotePacket_Notification instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_RemotePacket_Notification
         * @static
         * @param {ICRemoteClient_RemotePacket_Notification=} [properties] Properties to set
         * @returns {CRemoteClient_RemotePacket_Notification} CRemoteClient_RemotePacket_Notification instance
         */
        CRemoteClient_RemotePacket_Notification.create = function create(properties) {
            return new CRemoteClient_RemotePacket_Notification(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_RemotePacket_Notification message. Does not implicitly {@link CRemoteClient_RemotePacket_Notification.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_RemotePacket_Notification
         * @static
         * @param {ICRemoteClient_RemotePacket_Notification} message CRemoteClient_RemotePacket_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_RemotePacket_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && Object.hasOwnProperty.call(message, "session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.steamid);
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.payload);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_RemotePacket_Notification message, length delimited. Does not implicitly {@link CRemoteClient_RemotePacket_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_RemotePacket_Notification
         * @static
         * @param {ICRemoteClient_RemotePacket_Notification} message CRemoteClient_RemotePacket_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_RemotePacket_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_RemotePacket_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_RemotePacket_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_RemotePacket_Notification} CRemoteClient_RemotePacket_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_RemotePacket_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_RemotePacket_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                case 2:
                    message.steamid = reader.fixed64();
                    break;
                case 4:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_RemotePacket_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_RemotePacket_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_RemotePacket_Notification} CRemoteClient_RemotePacket_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_RemotePacket_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_RemotePacket_Notification message.
         * @function verify
         * @memberof CRemoteClient_RemotePacket_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_RemotePacket_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_RemotePacket_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_RemotePacket_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_RemotePacket_Notification} CRemoteClient_RemotePacket_Notification
         */
        CRemoteClient_RemotePacket_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_RemotePacket_Notification)
                return object;
            var message = new $root.CRemoteClient_RemotePacket_Notification();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length)
                    message.payload = object.payload;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_RemotePacket_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_RemotePacket_Notification
         * @static
         * @param {CRemoteClient_RemotePacket_Notification} message CRemoteClient_RemotePacket_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_RemotePacket_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
            }
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_RemotePacket_Notification to JSON.
         * @function toJSON
         * @memberof CRemoteClient_RemotePacket_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_RemotePacket_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_RemotePacket_Notification;
    })();
    
    $root.CRemoteClient_ReplyPacket_Notification = (function() {
    
        /**
         * Properties of a CRemoteClient_ReplyPacket_Notification.
         * @exports ICRemoteClient_ReplyPacket_Notification
         * @interface ICRemoteClient_ReplyPacket_Notification
         * @property {number|Long|null} [session_id] CRemoteClient_ReplyPacket_Notification session_id
         * @property {Uint8Array|null} [payload] CRemoteClient_ReplyPacket_Notification payload
         */
    
        /**
         * Constructs a new CRemoteClient_ReplyPacket_Notification.
         * @exports CRemoteClient_ReplyPacket_Notification
         * @classdesc Represents a CRemoteClient_ReplyPacket_Notification.
         * @implements ICRemoteClient_ReplyPacket_Notification
         * @constructor
         * @param {ICRemoteClient_ReplyPacket_Notification=} [properties] Properties to set
         */
        function CRemoteClient_ReplyPacket_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_ReplyPacket_Notification session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @instance
         */
        CRemoteClient_ReplyPacket_Notification.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_ReplyPacket_Notification payload.
         * @member {Uint8Array} payload
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @instance
         */
        CRemoteClient_ReplyPacket_Notification.prototype.payload = $util.newBuffer([]);
    
        /**
         * Creates a new CRemoteClient_ReplyPacket_Notification instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @static
         * @param {ICRemoteClient_ReplyPacket_Notification=} [properties] Properties to set
         * @returns {CRemoteClient_ReplyPacket_Notification} CRemoteClient_ReplyPacket_Notification instance
         */
        CRemoteClient_ReplyPacket_Notification.create = function create(properties) {
            return new CRemoteClient_ReplyPacket_Notification(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_ReplyPacket_Notification message. Does not implicitly {@link CRemoteClient_ReplyPacket_Notification.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @static
         * @param {ICRemoteClient_ReplyPacket_Notification} message CRemoteClient_ReplyPacket_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_ReplyPacket_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && Object.hasOwnProperty.call(message, "session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_ReplyPacket_Notification message, length delimited. Does not implicitly {@link CRemoteClient_ReplyPacket_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @static
         * @param {ICRemoteClient_ReplyPacket_Notification} message CRemoteClient_ReplyPacket_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_ReplyPacket_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_ReplyPacket_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_ReplyPacket_Notification} CRemoteClient_ReplyPacket_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_ReplyPacket_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_ReplyPacket_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                case 2:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_ReplyPacket_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_ReplyPacket_Notification} CRemoteClient_ReplyPacket_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_ReplyPacket_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_ReplyPacket_Notification message.
         * @function verify
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_ReplyPacket_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_ReplyPacket_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_ReplyPacket_Notification} CRemoteClient_ReplyPacket_Notification
         */
        CRemoteClient_ReplyPacket_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_ReplyPacket_Notification)
                return object;
            var message = new $root.CRemoteClient_ReplyPacket_Notification();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length)
                    message.payload = object.payload;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_ReplyPacket_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @static
         * @param {CRemoteClient_ReplyPacket_Notification} message CRemoteClient_ReplyPacket_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_ReplyPacket_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
            }
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_ReplyPacket_Notification to JSON.
         * @function toJSON
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_ReplyPacket_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_ReplyPacket_Notification;
    })();
    
    $root.CRemoteClient_GetReplies_Request = (function() {
    
        /**
         * Properties of a CRemoteClient_GetReplies_Request.
         * @exports ICRemoteClient_GetReplies_Request
         * @interface ICRemoteClient_GetReplies_Request
         * @property {number|Long|null} [session_id] CRemoteClient_GetReplies_Request session_id
         */
    
        /**
         * Constructs a new CRemoteClient_GetReplies_Request.
         * @exports CRemoteClient_GetReplies_Request
         * @classdesc Represents a CRemoteClient_GetReplies_Request.
         * @implements ICRemoteClient_GetReplies_Request
         * @constructor
         * @param {ICRemoteClient_GetReplies_Request=} [properties] Properties to set
         */
        function CRemoteClient_GetReplies_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_GetReplies_Request session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_GetReplies_Request
         * @instance
         */
        CRemoteClient_GetReplies_Request.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CRemoteClient_GetReplies_Request instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_GetReplies_Request
         * @static
         * @param {ICRemoteClient_GetReplies_Request=} [properties] Properties to set
         * @returns {CRemoteClient_GetReplies_Request} CRemoteClient_GetReplies_Request instance
         */
        CRemoteClient_GetReplies_Request.create = function create(properties) {
            return new CRemoteClient_GetReplies_Request(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_GetReplies_Request message. Does not implicitly {@link CRemoteClient_GetReplies_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_GetReplies_Request
         * @static
         * @param {ICRemoteClient_GetReplies_Request} message CRemoteClient_GetReplies_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_GetReplies_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && Object.hasOwnProperty.call(message, "session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_GetReplies_Request message, length delimited. Does not implicitly {@link CRemoteClient_GetReplies_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_GetReplies_Request
         * @static
         * @param {ICRemoteClient_GetReplies_Request} message CRemoteClient_GetReplies_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_GetReplies_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_GetReplies_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_GetReplies_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_GetReplies_Request} CRemoteClient_GetReplies_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_GetReplies_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_GetReplies_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_GetReplies_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_GetReplies_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_GetReplies_Request} CRemoteClient_GetReplies_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_GetReplies_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_GetReplies_Request message.
         * @function verify
         * @memberof CRemoteClient_GetReplies_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_GetReplies_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_GetReplies_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_GetReplies_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_GetReplies_Request} CRemoteClient_GetReplies_Request
         */
        CRemoteClient_GetReplies_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_GetReplies_Request)
                return object;
            var message = new $root.CRemoteClient_GetReplies_Request();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_GetReplies_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_GetReplies_Request
         * @static
         * @param {CRemoteClient_GetReplies_Request} message CRemoteClient_GetReplies_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_GetReplies_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_GetReplies_Request to JSON.
         * @function toJSON
         * @memberof CRemoteClient_GetReplies_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_GetReplies_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_GetReplies_Request;
    })();
    
    $root.CRemoteClient_GetReplies_Response = (function() {
    
        /**
         * Properties of a CRemoteClient_GetReplies_Response.
         * @exports ICRemoteClient_GetReplies_Response
         * @interface ICRemoteClient_GetReplies_Response
         * @property {Array.<Uint8Array>|null} [payload] CRemoteClient_GetReplies_Response payload
         */
    
        /**
         * Constructs a new CRemoteClient_GetReplies_Response.
         * @exports CRemoteClient_GetReplies_Response
         * @classdesc Represents a CRemoteClient_GetReplies_Response.
         * @implements ICRemoteClient_GetReplies_Response
         * @constructor
         * @param {ICRemoteClient_GetReplies_Response=} [properties] Properties to set
         */
        function CRemoteClient_GetReplies_Response(properties) {
            this.payload = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_GetReplies_Response payload.
         * @member {Array.<Uint8Array>} payload
         * @memberof CRemoteClient_GetReplies_Response
         * @instance
         */
        CRemoteClient_GetReplies_Response.prototype.payload = $util.emptyArray;
    
        /**
         * Creates a new CRemoteClient_GetReplies_Response instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_GetReplies_Response
         * @static
         * @param {ICRemoteClient_GetReplies_Response=} [properties] Properties to set
         * @returns {CRemoteClient_GetReplies_Response} CRemoteClient_GetReplies_Response instance
         */
        CRemoteClient_GetReplies_Response.create = function create(properties) {
            return new CRemoteClient_GetReplies_Response(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_GetReplies_Response message. Does not implicitly {@link CRemoteClient_GetReplies_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_GetReplies_Response
         * @static
         * @param {ICRemoteClient_GetReplies_Response} message CRemoteClient_GetReplies_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_GetReplies_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.payload != null && message.payload.length)
                for (var i = 0; i < message.payload.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.payload[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_GetReplies_Response message, length delimited. Does not implicitly {@link CRemoteClient_GetReplies_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_GetReplies_Response
         * @static
         * @param {ICRemoteClient_GetReplies_Response} message CRemoteClient_GetReplies_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_GetReplies_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_GetReplies_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_GetReplies_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_GetReplies_Response} CRemoteClient_GetReplies_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_GetReplies_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_GetReplies_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.payload && message.payload.length))
                        message.payload = [];
                    message.payload.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_GetReplies_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_GetReplies_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_GetReplies_Response} CRemoteClient_GetReplies_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_GetReplies_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_GetReplies_Response message.
         * @function verify
         * @memberof CRemoteClient_GetReplies_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_GetReplies_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.payload != null && message.hasOwnProperty("payload")) {
                if (!Array.isArray(message.payload))
                    return "payload: array expected";
                for (var i = 0; i < message.payload.length; ++i)
                    if (!(message.payload[i] && typeof message.payload[i].length === "number" || $util.isString(message.payload[i])))
                        return "payload: buffer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CRemoteClient_GetReplies_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_GetReplies_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_GetReplies_Response} CRemoteClient_GetReplies_Response
         */
        CRemoteClient_GetReplies_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_GetReplies_Response)
                return object;
            var message = new $root.CRemoteClient_GetReplies_Response();
            if (object.payload) {
                if (!Array.isArray(object.payload))
                    throw TypeError(".CRemoteClient_GetReplies_Response.payload: array expected");
                message.payload = [];
                for (var i = 0; i < object.payload.length; ++i)
                    if (typeof object.payload[i] === "string")
                        $util.base64.decode(object.payload[i], message.payload[i] = $util.newBuffer($util.base64.length(object.payload[i])), 0);
                    else if (object.payload[i].length)
                        message.payload[i] = object.payload[i];
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_GetReplies_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_GetReplies_Response
         * @static
         * @param {CRemoteClient_GetReplies_Response} message CRemoteClient_GetReplies_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_GetReplies_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.payload = [];
            if (message.payload && message.payload.length) {
                object.payload = [];
                for (var j = 0; j < message.payload.length; ++j)
                    object.payload[j] = options.bytes === String ? $util.base64.encode(message.payload[j], 0, message.payload[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.payload[j]) : message.payload[j];
            }
            return object;
        };
    
        /**
         * Converts this CRemoteClient_GetReplies_Response to JSON.
         * @function toJSON
         * @memberof CRemoteClient_GetReplies_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_GetReplies_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_GetReplies_Response;
    })();
    
    $root.CRemoteClient_AllocateTURNServer_Request = (function() {
    
        /**
         * Properties of a CRemoteClient_AllocateTURNServer_Request.
         * @exports ICRemoteClient_AllocateTURNServer_Request
         * @interface ICRemoteClient_AllocateTURNServer_Request
         * @property {number|null} [cellid] CRemoteClient_AllocateTURNServer_Request cellid
         * @property {string|null} [credentials] CRemoteClient_AllocateTURNServer_Request credentials
         */
    
        /**
         * Constructs a new CRemoteClient_AllocateTURNServer_Request.
         * @exports CRemoteClient_AllocateTURNServer_Request
         * @classdesc Represents a CRemoteClient_AllocateTURNServer_Request.
         * @implements ICRemoteClient_AllocateTURNServer_Request
         * @constructor
         * @param {ICRemoteClient_AllocateTURNServer_Request=} [properties] Properties to set
         */
        function CRemoteClient_AllocateTURNServer_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_AllocateTURNServer_Request cellid.
         * @member {number} cellid
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @instance
         */
        CRemoteClient_AllocateTURNServer_Request.prototype.cellid = 0;
    
        /**
         * CRemoteClient_AllocateTURNServer_Request credentials.
         * @member {string} credentials
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @instance
         */
        CRemoteClient_AllocateTURNServer_Request.prototype.credentials = "";
    
        /**
         * Creates a new CRemoteClient_AllocateTURNServer_Request instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @static
         * @param {ICRemoteClient_AllocateTURNServer_Request=} [properties] Properties to set
         * @returns {CRemoteClient_AllocateTURNServer_Request} CRemoteClient_AllocateTURNServer_Request instance
         */
        CRemoteClient_AllocateTURNServer_Request.create = function create(properties) {
            return new CRemoteClient_AllocateTURNServer_Request(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateTURNServer_Request message. Does not implicitly {@link CRemoteClient_AllocateTURNServer_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @static
         * @param {ICRemoteClient_AllocateTURNServer_Request} message CRemoteClient_AllocateTURNServer_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateTURNServer_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cellid != null && Object.hasOwnProperty.call(message, "cellid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.cellid);
            if (message.credentials != null && Object.hasOwnProperty.call(message, "credentials"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.credentials);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateTURNServer_Request message, length delimited. Does not implicitly {@link CRemoteClient_AllocateTURNServer_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @static
         * @param {ICRemoteClient_AllocateTURNServer_Request} message CRemoteClient_AllocateTURNServer_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateTURNServer_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_AllocateTURNServer_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_AllocateTURNServer_Request} CRemoteClient_AllocateTURNServer_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateTURNServer_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_AllocateTURNServer_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cellid = reader.uint32();
                    break;
                case 2:
                    message.credentials = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_AllocateTURNServer_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_AllocateTURNServer_Request} CRemoteClient_AllocateTURNServer_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateTURNServer_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_AllocateTURNServer_Request message.
         * @function verify
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_AllocateTURNServer_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cellid != null && message.hasOwnProperty("cellid"))
                if (!$util.isInteger(message.cellid))
                    return "cellid: integer expected";
            if (message.credentials != null && message.hasOwnProperty("credentials"))
                if (!$util.isString(message.credentials))
                    return "credentials: string expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_AllocateTURNServer_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_AllocateTURNServer_Request} CRemoteClient_AllocateTURNServer_Request
         */
        CRemoteClient_AllocateTURNServer_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_AllocateTURNServer_Request)
                return object;
            var message = new $root.CRemoteClient_AllocateTURNServer_Request();
            if (object.cellid != null)
                message.cellid = object.cellid >>> 0;
            if (object.credentials != null)
                message.credentials = String(object.credentials);
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_AllocateTURNServer_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @static
         * @param {CRemoteClient_AllocateTURNServer_Request} message CRemoteClient_AllocateTURNServer_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_AllocateTURNServer_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cellid = 0;
                object.credentials = "";
            }
            if (message.cellid != null && message.hasOwnProperty("cellid"))
                object.cellid = message.cellid;
            if (message.credentials != null && message.hasOwnProperty("credentials"))
                object.credentials = message.credentials;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_AllocateTURNServer_Request to JSON.
         * @function toJSON
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_AllocateTURNServer_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_AllocateTURNServer_Request;
    })();
    
    $root.CRemoteClient_AllocateTURNServer_Response = (function() {
    
        /**
         * Properties of a CRemoteClient_AllocateTURNServer_Response.
         * @exports ICRemoteClient_AllocateTURNServer_Response
         * @interface ICRemoteClient_AllocateTURNServer_Response
         * @property {string|null} [turn_server] CRemoteClient_AllocateTURNServer_Response turn_server
         */
    
        /**
         * Constructs a new CRemoteClient_AllocateTURNServer_Response.
         * @exports CRemoteClient_AllocateTURNServer_Response
         * @classdesc Represents a CRemoteClient_AllocateTURNServer_Response.
         * @implements ICRemoteClient_AllocateTURNServer_Response
         * @constructor
         * @param {ICRemoteClient_AllocateTURNServer_Response=} [properties] Properties to set
         */
        function CRemoteClient_AllocateTURNServer_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_AllocateTURNServer_Response turn_server.
         * @member {string} turn_server
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @instance
         */
        CRemoteClient_AllocateTURNServer_Response.prototype.turn_server = "";
    
        /**
         * Creates a new CRemoteClient_AllocateTURNServer_Response instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @static
         * @param {ICRemoteClient_AllocateTURNServer_Response=} [properties] Properties to set
         * @returns {CRemoteClient_AllocateTURNServer_Response} CRemoteClient_AllocateTURNServer_Response instance
         */
        CRemoteClient_AllocateTURNServer_Response.create = function create(properties) {
            return new CRemoteClient_AllocateTURNServer_Response(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateTURNServer_Response message. Does not implicitly {@link CRemoteClient_AllocateTURNServer_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @static
         * @param {ICRemoteClient_AllocateTURNServer_Response} message CRemoteClient_AllocateTURNServer_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateTURNServer_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.turn_server != null && Object.hasOwnProperty.call(message, "turn_server"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.turn_server);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateTURNServer_Response message, length delimited. Does not implicitly {@link CRemoteClient_AllocateTURNServer_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @static
         * @param {ICRemoteClient_AllocateTURNServer_Response} message CRemoteClient_AllocateTURNServer_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateTURNServer_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_AllocateTURNServer_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_AllocateTURNServer_Response} CRemoteClient_AllocateTURNServer_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateTURNServer_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_AllocateTURNServer_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.turn_server = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_AllocateTURNServer_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_AllocateTURNServer_Response} CRemoteClient_AllocateTURNServer_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateTURNServer_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_AllocateTURNServer_Response message.
         * @function verify
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_AllocateTURNServer_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.turn_server != null && message.hasOwnProperty("turn_server"))
                if (!$util.isString(message.turn_server))
                    return "turn_server: string expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_AllocateTURNServer_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_AllocateTURNServer_Response} CRemoteClient_AllocateTURNServer_Response
         */
        CRemoteClient_AllocateTURNServer_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_AllocateTURNServer_Response)
                return object;
            var message = new $root.CRemoteClient_AllocateTURNServer_Response();
            if (object.turn_server != null)
                message.turn_server = String(object.turn_server);
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_AllocateTURNServer_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @static
         * @param {CRemoteClient_AllocateTURNServer_Response} message CRemoteClient_AllocateTURNServer_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_AllocateTURNServer_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.turn_server = "";
            if (message.turn_server != null && message.hasOwnProperty("turn_server"))
                object.turn_server = message.turn_server;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_AllocateTURNServer_Response to JSON.
         * @function toJSON
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_AllocateTURNServer_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_AllocateTURNServer_Response;
    })();
    
    $root.CRemoteClient_AllocateRelayServer_Request = (function() {
    
        /**
         * Properties of a CRemoteClient_AllocateRelayServer_Request.
         * @exports ICRemoteClient_AllocateRelayServer_Request
         * @interface ICRemoteClient_AllocateRelayServer_Request
         * @property {number|null} [cellid] CRemoteClient_AllocateRelayServer_Request cellid
         * @property {string|null} [credentials] CRemoteClient_AllocateRelayServer_Request credentials
         */
    
        /**
         * Constructs a new CRemoteClient_AllocateRelayServer_Request.
         * @exports CRemoteClient_AllocateRelayServer_Request
         * @classdesc Represents a CRemoteClient_AllocateRelayServer_Request.
         * @implements ICRemoteClient_AllocateRelayServer_Request
         * @constructor
         * @param {ICRemoteClient_AllocateRelayServer_Request=} [properties] Properties to set
         */
        function CRemoteClient_AllocateRelayServer_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_AllocateRelayServer_Request cellid.
         * @member {number} cellid
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @instance
         */
        CRemoteClient_AllocateRelayServer_Request.prototype.cellid = 0;
    
        /**
         * CRemoteClient_AllocateRelayServer_Request credentials.
         * @member {string} credentials
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @instance
         */
        CRemoteClient_AllocateRelayServer_Request.prototype.credentials = "";
    
        /**
         * Creates a new CRemoteClient_AllocateRelayServer_Request instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @static
         * @param {ICRemoteClient_AllocateRelayServer_Request=} [properties] Properties to set
         * @returns {CRemoteClient_AllocateRelayServer_Request} CRemoteClient_AllocateRelayServer_Request instance
         */
        CRemoteClient_AllocateRelayServer_Request.create = function create(properties) {
            return new CRemoteClient_AllocateRelayServer_Request(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateRelayServer_Request message. Does not implicitly {@link CRemoteClient_AllocateRelayServer_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @static
         * @param {ICRemoteClient_AllocateRelayServer_Request} message CRemoteClient_AllocateRelayServer_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateRelayServer_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cellid != null && Object.hasOwnProperty.call(message, "cellid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.cellid);
            if (message.credentials != null && Object.hasOwnProperty.call(message, "credentials"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.credentials);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateRelayServer_Request message, length delimited. Does not implicitly {@link CRemoteClient_AllocateRelayServer_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @static
         * @param {ICRemoteClient_AllocateRelayServer_Request} message CRemoteClient_AllocateRelayServer_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateRelayServer_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_AllocateRelayServer_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_AllocateRelayServer_Request} CRemoteClient_AllocateRelayServer_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateRelayServer_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_AllocateRelayServer_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cellid = reader.uint32();
                    break;
                case 2:
                    message.credentials = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_AllocateRelayServer_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_AllocateRelayServer_Request} CRemoteClient_AllocateRelayServer_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateRelayServer_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_AllocateRelayServer_Request message.
         * @function verify
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_AllocateRelayServer_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cellid != null && message.hasOwnProperty("cellid"))
                if (!$util.isInteger(message.cellid))
                    return "cellid: integer expected";
            if (message.credentials != null && message.hasOwnProperty("credentials"))
                if (!$util.isString(message.credentials))
                    return "credentials: string expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_AllocateRelayServer_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_AllocateRelayServer_Request} CRemoteClient_AllocateRelayServer_Request
         */
        CRemoteClient_AllocateRelayServer_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_AllocateRelayServer_Request)
                return object;
            var message = new $root.CRemoteClient_AllocateRelayServer_Request();
            if (object.cellid != null)
                message.cellid = object.cellid >>> 0;
            if (object.credentials != null)
                message.credentials = String(object.credentials);
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_AllocateRelayServer_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @static
         * @param {CRemoteClient_AllocateRelayServer_Request} message CRemoteClient_AllocateRelayServer_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_AllocateRelayServer_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cellid = 0;
                object.credentials = "";
            }
            if (message.cellid != null && message.hasOwnProperty("cellid"))
                object.cellid = message.cellid;
            if (message.credentials != null && message.hasOwnProperty("credentials"))
                object.credentials = message.credentials;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_AllocateRelayServer_Request to JSON.
         * @function toJSON
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_AllocateRelayServer_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_AllocateRelayServer_Request;
    })();
    
    $root.CRemoteClient_AllocateRelayServer_Response = (function() {
    
        /**
         * Properties of a CRemoteClient_AllocateRelayServer_Response.
         * @exports ICRemoteClient_AllocateRelayServer_Response
         * @interface ICRemoteClient_AllocateRelayServer_Response
         * @property {string|null} [relay_server] CRemoteClient_AllocateRelayServer_Response relay_server
         */
    
        /**
         * Constructs a new CRemoteClient_AllocateRelayServer_Response.
         * @exports CRemoteClient_AllocateRelayServer_Response
         * @classdesc Represents a CRemoteClient_AllocateRelayServer_Response.
         * @implements ICRemoteClient_AllocateRelayServer_Response
         * @constructor
         * @param {ICRemoteClient_AllocateRelayServer_Response=} [properties] Properties to set
         */
        function CRemoteClient_AllocateRelayServer_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_AllocateRelayServer_Response relay_server.
         * @member {string} relay_server
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @instance
         */
        CRemoteClient_AllocateRelayServer_Response.prototype.relay_server = "";
    
        /**
         * Creates a new CRemoteClient_AllocateRelayServer_Response instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @static
         * @param {ICRemoteClient_AllocateRelayServer_Response=} [properties] Properties to set
         * @returns {CRemoteClient_AllocateRelayServer_Response} CRemoteClient_AllocateRelayServer_Response instance
         */
        CRemoteClient_AllocateRelayServer_Response.create = function create(properties) {
            return new CRemoteClient_AllocateRelayServer_Response(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateRelayServer_Response message. Does not implicitly {@link CRemoteClient_AllocateRelayServer_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @static
         * @param {ICRemoteClient_AllocateRelayServer_Response} message CRemoteClient_AllocateRelayServer_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateRelayServer_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.relay_server != null && Object.hasOwnProperty.call(message, "relay_server"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.relay_server);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateRelayServer_Response message, length delimited. Does not implicitly {@link CRemoteClient_AllocateRelayServer_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @static
         * @param {ICRemoteClient_AllocateRelayServer_Response} message CRemoteClient_AllocateRelayServer_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateRelayServer_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_AllocateRelayServer_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_AllocateRelayServer_Response} CRemoteClient_AllocateRelayServer_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateRelayServer_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_AllocateRelayServer_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.relay_server = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_AllocateRelayServer_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_AllocateRelayServer_Response} CRemoteClient_AllocateRelayServer_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateRelayServer_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_AllocateRelayServer_Response message.
         * @function verify
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_AllocateRelayServer_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.relay_server != null && message.hasOwnProperty("relay_server"))
                if (!$util.isString(message.relay_server))
                    return "relay_server: string expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_AllocateRelayServer_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_AllocateRelayServer_Response} CRemoteClient_AllocateRelayServer_Response
         */
        CRemoteClient_AllocateRelayServer_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_AllocateRelayServer_Response)
                return object;
            var message = new $root.CRemoteClient_AllocateRelayServer_Response();
            if (object.relay_server != null)
                message.relay_server = String(object.relay_server);
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_AllocateRelayServer_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @static
         * @param {CRemoteClient_AllocateRelayServer_Response} message CRemoteClient_AllocateRelayServer_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_AllocateRelayServer_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.relay_server = "";
            if (message.relay_server != null && message.hasOwnProperty("relay_server"))
                object.relay_server = message.relay_server;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_AllocateRelayServer_Response to JSON.
         * @function toJSON
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_AllocateRelayServer_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_AllocateRelayServer_Response;
    })();
    
    $root.CRemoteClient_AllocateSDR_Request = (function() {
    
        /**
         * Properties of a CRemoteClient_AllocateSDR_Request.
         * @exports ICRemoteClient_AllocateSDR_Request
         * @interface ICRemoteClient_AllocateSDR_Request
         * @property {number|null} [appid] CRemoteClient_AllocateSDR_Request appid
         */
    
        /**
         * Constructs a new CRemoteClient_AllocateSDR_Request.
         * @exports CRemoteClient_AllocateSDR_Request
         * @classdesc Represents a CRemoteClient_AllocateSDR_Request.
         * @implements ICRemoteClient_AllocateSDR_Request
         * @constructor
         * @param {ICRemoteClient_AllocateSDR_Request=} [properties] Properties to set
         */
        function CRemoteClient_AllocateSDR_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_AllocateSDR_Request appid.
         * @member {number} appid
         * @memberof CRemoteClient_AllocateSDR_Request
         * @instance
         */
        CRemoteClient_AllocateSDR_Request.prototype.appid = 0;
    
        /**
         * Creates a new CRemoteClient_AllocateSDR_Request instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_AllocateSDR_Request
         * @static
         * @param {ICRemoteClient_AllocateSDR_Request=} [properties] Properties to set
         * @returns {CRemoteClient_AllocateSDR_Request} CRemoteClient_AllocateSDR_Request instance
         */
        CRemoteClient_AllocateSDR_Request.create = function create(properties) {
            return new CRemoteClient_AllocateSDR_Request(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateSDR_Request message. Does not implicitly {@link CRemoteClient_AllocateSDR_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_AllocateSDR_Request
         * @static
         * @param {ICRemoteClient_AllocateSDR_Request} message CRemoteClient_AllocateSDR_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateSDR_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateSDR_Request message, length delimited. Does not implicitly {@link CRemoteClient_AllocateSDR_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_AllocateSDR_Request
         * @static
         * @param {ICRemoteClient_AllocateSDR_Request} message CRemoteClient_AllocateSDR_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateSDR_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_AllocateSDR_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_AllocateSDR_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_AllocateSDR_Request} CRemoteClient_AllocateSDR_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateSDR_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_AllocateSDR_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_AllocateSDR_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_AllocateSDR_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_AllocateSDR_Request} CRemoteClient_AllocateSDR_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateSDR_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_AllocateSDR_Request message.
         * @function verify
         * @memberof CRemoteClient_AllocateSDR_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_AllocateSDR_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_AllocateSDR_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_AllocateSDR_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_AllocateSDR_Request} CRemoteClient_AllocateSDR_Request
         */
        CRemoteClient_AllocateSDR_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_AllocateSDR_Request)
                return object;
            var message = new $root.CRemoteClient_AllocateSDR_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_AllocateSDR_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_AllocateSDR_Request
         * @static
         * @param {CRemoteClient_AllocateSDR_Request} message CRemoteClient_AllocateSDR_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_AllocateSDR_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.appid = 0;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_AllocateSDR_Request to JSON.
         * @function toJSON
         * @memberof CRemoteClient_AllocateSDR_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_AllocateSDR_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_AllocateSDR_Request;
    })();
    
    $root.CRemoteClient_AllocateSDR_Response = (function() {
    
        /**
         * Properties of a CRemoteClient_AllocateSDR_Response.
         * @exports ICRemoteClient_AllocateSDR_Response
         * @interface ICRemoteClient_AllocateSDR_Response
         */
    
        /**
         * Constructs a new CRemoteClient_AllocateSDR_Response.
         * @exports CRemoteClient_AllocateSDR_Response
         * @classdesc Represents a CRemoteClient_AllocateSDR_Response.
         * @implements ICRemoteClient_AllocateSDR_Response
         * @constructor
         * @param {ICRemoteClient_AllocateSDR_Response=} [properties] Properties to set
         */
        function CRemoteClient_AllocateSDR_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CRemoteClient_AllocateSDR_Response instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_AllocateSDR_Response
         * @static
         * @param {ICRemoteClient_AllocateSDR_Response=} [properties] Properties to set
         * @returns {CRemoteClient_AllocateSDR_Response} CRemoteClient_AllocateSDR_Response instance
         */
        CRemoteClient_AllocateSDR_Response.create = function create(properties) {
            return new CRemoteClient_AllocateSDR_Response(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateSDR_Response message. Does not implicitly {@link CRemoteClient_AllocateSDR_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_AllocateSDR_Response
         * @static
         * @param {ICRemoteClient_AllocateSDR_Response} message CRemoteClient_AllocateSDR_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateSDR_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateSDR_Response message, length delimited. Does not implicitly {@link CRemoteClient_AllocateSDR_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_AllocateSDR_Response
         * @static
         * @param {ICRemoteClient_AllocateSDR_Response} message CRemoteClient_AllocateSDR_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateSDR_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_AllocateSDR_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_AllocateSDR_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_AllocateSDR_Response} CRemoteClient_AllocateSDR_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateSDR_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_AllocateSDR_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_AllocateSDR_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_AllocateSDR_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_AllocateSDR_Response} CRemoteClient_AllocateSDR_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateSDR_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_AllocateSDR_Response message.
         * @function verify
         * @memberof CRemoteClient_AllocateSDR_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_AllocateSDR_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_AllocateSDR_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_AllocateSDR_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_AllocateSDR_Response} CRemoteClient_AllocateSDR_Response
         */
        CRemoteClient_AllocateSDR_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_AllocateSDR_Response)
                return object;
            return new $root.CRemoteClient_AllocateSDR_Response();
        };
    
        /**
         * Creates a plain object from a CRemoteClient_AllocateSDR_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_AllocateSDR_Response
         * @static
         * @param {CRemoteClient_AllocateSDR_Response} message CRemoteClient_AllocateSDR_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_AllocateSDR_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CRemoteClient_AllocateSDR_Response to JSON.
         * @function toJSON
         * @memberof CRemoteClient_AllocateSDR_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_AllocateSDR_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_AllocateSDR_Response;
    })();
    
    $root.CRemoteClient_SteamBroadcast_Notification = (function() {
    
        /**
         * Properties of a CRemoteClient_SteamBroadcast_Notification.
         * @exports ICRemoteClient_SteamBroadcast_Notification
         * @interface ICRemoteClient_SteamBroadcast_Notification
         * @property {number|Long|null} [steamid] CRemoteClient_SteamBroadcast_Notification steamid
         * @property {number|Long|null} [clientid] CRemoteClient_SteamBroadcast_Notification clientid
         * @property {Uint8Array|null} [payload] CRemoteClient_SteamBroadcast_Notification payload
         */
    
        /**
         * Constructs a new CRemoteClient_SteamBroadcast_Notification.
         * @exports CRemoteClient_SteamBroadcast_Notification
         * @classdesc Represents a CRemoteClient_SteamBroadcast_Notification.
         * @implements ICRemoteClient_SteamBroadcast_Notification
         * @constructor
         * @param {ICRemoteClient_SteamBroadcast_Notification=} [properties] Properties to set
         */
        function CRemoteClient_SteamBroadcast_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_SteamBroadcast_Notification steamid.
         * @member {number|Long} steamid
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @instance
         */
        CRemoteClient_SteamBroadcast_Notification.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_SteamBroadcast_Notification clientid.
         * @member {number|Long} clientid
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @instance
         */
        CRemoteClient_SteamBroadcast_Notification.prototype.clientid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_SteamBroadcast_Notification payload.
         * @member {Uint8Array} payload
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @instance
         */
        CRemoteClient_SteamBroadcast_Notification.prototype.payload = $util.newBuffer([]);
    
        /**
         * Creates a new CRemoteClient_SteamBroadcast_Notification instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @static
         * @param {ICRemoteClient_SteamBroadcast_Notification=} [properties] Properties to set
         * @returns {CRemoteClient_SteamBroadcast_Notification} CRemoteClient_SteamBroadcast_Notification instance
         */
        CRemoteClient_SteamBroadcast_Notification.create = function create(properties) {
            return new CRemoteClient_SteamBroadcast_Notification(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_SteamBroadcast_Notification message. Does not implicitly {@link CRemoteClient_SteamBroadcast_Notification.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @static
         * @param {ICRemoteClient_SteamBroadcast_Notification} message CRemoteClient_SteamBroadcast_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_SteamBroadcast_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.clientid != null && Object.hasOwnProperty.call(message, "clientid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.clientid);
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.payload);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_SteamBroadcast_Notification message, length delimited. Does not implicitly {@link CRemoteClient_SteamBroadcast_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @static
         * @param {ICRemoteClient_SteamBroadcast_Notification} message CRemoteClient_SteamBroadcast_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_SteamBroadcast_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_SteamBroadcast_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_SteamBroadcast_Notification} CRemoteClient_SteamBroadcast_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_SteamBroadcast_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_SteamBroadcast_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.clientid = reader.fixed64();
                    break;
                case 3:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_SteamBroadcast_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_SteamBroadcast_Notification} CRemoteClient_SteamBroadcast_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_SteamBroadcast_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_SteamBroadcast_Notification message.
         * @function verify
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_SteamBroadcast_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.clientid != null && message.hasOwnProperty("clientid"))
                if (!$util.isInteger(message.clientid) && !(message.clientid && $util.isInteger(message.clientid.low) && $util.isInteger(message.clientid.high)))
                    return "clientid: integer|Long expected";
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_SteamBroadcast_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_SteamBroadcast_Notification} CRemoteClient_SteamBroadcast_Notification
         */
        CRemoteClient_SteamBroadcast_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_SteamBroadcast_Notification)
                return object;
            var message = new $root.CRemoteClient_SteamBroadcast_Notification();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.clientid != null)
                if ($util.Long)
                    (message.clientid = $util.Long.fromValue(object.clientid)).unsigned = false;
                else if (typeof object.clientid === "string")
                    message.clientid = parseInt(object.clientid, 10);
                else if (typeof object.clientid === "number")
                    message.clientid = object.clientid;
                else if (typeof object.clientid === "object")
                    message.clientid = new $util.LongBits(object.clientid.low >>> 0, object.clientid.high >>> 0).toNumber();
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length)
                    message.payload = object.payload;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_SteamBroadcast_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @static
         * @param {CRemoteClient_SteamBroadcast_Notification} message CRemoteClient_SteamBroadcast_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_SteamBroadcast_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.clientid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientid = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.clientid != null && message.hasOwnProperty("clientid"))
                if (typeof message.clientid === "number")
                    object.clientid = options.longs === String ? String(message.clientid) : message.clientid;
                else
                    object.clientid = options.longs === String ? $util.Long.prototype.toString.call(message.clientid) : options.longs === Number ? new $util.LongBits(message.clientid.low >>> 0, message.clientid.high >>> 0).toNumber() : message.clientid;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_SteamBroadcast_Notification to JSON.
         * @function toJSON
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_SteamBroadcast_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_SteamBroadcast_Notification;
    })();
    
    $root.CRemoteClient_SteamToSteam_Notification = (function() {
    
        /**
         * Properties of a CRemoteClient_SteamToSteam_Notification.
         * @exports ICRemoteClient_SteamToSteam_Notification
         * @interface ICRemoteClient_SteamToSteam_Notification
         * @property {number|Long|null} [steamid] CRemoteClient_SteamToSteam_Notification steamid
         * @property {number|Long|null} [src_clientid] CRemoteClient_SteamToSteam_Notification src_clientid
         * @property {number|Long|null} [dst_clientid] CRemoteClient_SteamToSteam_Notification dst_clientid
         * @property {number|null} [secretid] CRemoteClient_SteamToSteam_Notification secretid
         * @property {Uint8Array|null} [encrypted_payload] CRemoteClient_SteamToSteam_Notification encrypted_payload
         */
    
        /**
         * Constructs a new CRemoteClient_SteamToSteam_Notification.
         * @exports CRemoteClient_SteamToSteam_Notification
         * @classdesc Represents a CRemoteClient_SteamToSteam_Notification.
         * @implements ICRemoteClient_SteamToSteam_Notification
         * @constructor
         * @param {ICRemoteClient_SteamToSteam_Notification=} [properties] Properties to set
         */
        function CRemoteClient_SteamToSteam_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_SteamToSteam_Notification steamid.
         * @member {number|Long} steamid
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @instance
         */
        CRemoteClient_SteamToSteam_Notification.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_SteamToSteam_Notification src_clientid.
         * @member {number|Long} src_clientid
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @instance
         */
        CRemoteClient_SteamToSteam_Notification.prototype.src_clientid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_SteamToSteam_Notification dst_clientid.
         * @member {number|Long} dst_clientid
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @instance
         */
        CRemoteClient_SteamToSteam_Notification.prototype.dst_clientid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_SteamToSteam_Notification secretid.
         * @member {number} secretid
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @instance
         */
        CRemoteClient_SteamToSteam_Notification.prototype.secretid = 0;
    
        /**
         * CRemoteClient_SteamToSteam_Notification encrypted_payload.
         * @member {Uint8Array} encrypted_payload
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @instance
         */
        CRemoteClient_SteamToSteam_Notification.prototype.encrypted_payload = $util.newBuffer([]);
    
        /**
         * Creates a new CRemoteClient_SteamToSteam_Notification instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @static
         * @param {ICRemoteClient_SteamToSteam_Notification=} [properties] Properties to set
         * @returns {CRemoteClient_SteamToSteam_Notification} CRemoteClient_SteamToSteam_Notification instance
         */
        CRemoteClient_SteamToSteam_Notification.create = function create(properties) {
            return new CRemoteClient_SteamToSteam_Notification(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_SteamToSteam_Notification message. Does not implicitly {@link CRemoteClient_SteamToSteam_Notification.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @static
         * @param {ICRemoteClient_SteamToSteam_Notification} message CRemoteClient_SteamToSteam_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_SteamToSteam_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.src_clientid != null && Object.hasOwnProperty.call(message, "src_clientid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.src_clientid);
            if (message.dst_clientid != null && Object.hasOwnProperty.call(message, "dst_clientid"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.dst_clientid);
            if (message.secretid != null && Object.hasOwnProperty.call(message, "secretid"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.secretid);
            if (message.encrypted_payload != null && Object.hasOwnProperty.call(message, "encrypted_payload"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.encrypted_payload);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_SteamToSteam_Notification message, length delimited. Does not implicitly {@link CRemoteClient_SteamToSteam_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @static
         * @param {ICRemoteClient_SteamToSteam_Notification} message CRemoteClient_SteamToSteam_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_SteamToSteam_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_SteamToSteam_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_SteamToSteam_Notification} CRemoteClient_SteamToSteam_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_SteamToSteam_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_SteamToSteam_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.src_clientid = reader.fixed64();
                    break;
                case 3:
                    message.dst_clientid = reader.fixed64();
                    break;
                case 4:
                    message.secretid = reader.uint32();
                    break;
                case 5:
                    message.encrypted_payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_SteamToSteam_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_SteamToSteam_Notification} CRemoteClient_SteamToSteam_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_SteamToSteam_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_SteamToSteam_Notification message.
         * @function verify
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_SteamToSteam_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.src_clientid != null && message.hasOwnProperty("src_clientid"))
                if (!$util.isInteger(message.src_clientid) && !(message.src_clientid && $util.isInteger(message.src_clientid.low) && $util.isInteger(message.src_clientid.high)))
                    return "src_clientid: integer|Long expected";
            if (message.dst_clientid != null && message.hasOwnProperty("dst_clientid"))
                if (!$util.isInteger(message.dst_clientid) && !(message.dst_clientid && $util.isInteger(message.dst_clientid.low) && $util.isInteger(message.dst_clientid.high)))
                    return "dst_clientid: integer|Long expected";
            if (message.secretid != null && message.hasOwnProperty("secretid"))
                if (!$util.isInteger(message.secretid))
                    return "secretid: integer expected";
            if (message.encrypted_payload != null && message.hasOwnProperty("encrypted_payload"))
                if (!(message.encrypted_payload && typeof message.encrypted_payload.length === "number" || $util.isString(message.encrypted_payload)))
                    return "encrypted_payload: buffer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_SteamToSteam_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_SteamToSteam_Notification} CRemoteClient_SteamToSteam_Notification
         */
        CRemoteClient_SteamToSteam_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_SteamToSteam_Notification)
                return object;
            var message = new $root.CRemoteClient_SteamToSteam_Notification();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.src_clientid != null)
                if ($util.Long)
                    (message.src_clientid = $util.Long.fromValue(object.src_clientid)).unsigned = false;
                else if (typeof object.src_clientid === "string")
                    message.src_clientid = parseInt(object.src_clientid, 10);
                else if (typeof object.src_clientid === "number")
                    message.src_clientid = object.src_clientid;
                else if (typeof object.src_clientid === "object")
                    message.src_clientid = new $util.LongBits(object.src_clientid.low >>> 0, object.src_clientid.high >>> 0).toNumber();
            if (object.dst_clientid != null)
                if ($util.Long)
                    (message.dst_clientid = $util.Long.fromValue(object.dst_clientid)).unsigned = false;
                else if (typeof object.dst_clientid === "string")
                    message.dst_clientid = parseInt(object.dst_clientid, 10);
                else if (typeof object.dst_clientid === "number")
                    message.dst_clientid = object.dst_clientid;
                else if (typeof object.dst_clientid === "object")
                    message.dst_clientid = new $util.LongBits(object.dst_clientid.low >>> 0, object.dst_clientid.high >>> 0).toNumber();
            if (object.secretid != null)
                message.secretid = object.secretid >>> 0;
            if (object.encrypted_payload != null)
                if (typeof object.encrypted_payload === "string")
                    $util.base64.decode(object.encrypted_payload, message.encrypted_payload = $util.newBuffer($util.base64.length(object.encrypted_payload)), 0);
                else if (object.encrypted_payload.length)
                    message.encrypted_payload = object.encrypted_payload;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_SteamToSteam_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @static
         * @param {CRemoteClient_SteamToSteam_Notification} message CRemoteClient_SteamToSteam_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_SteamToSteam_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.src_clientid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.src_clientid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.dst_clientid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dst_clientid = options.longs === String ? "0" : 0;
                object.secretid = 0;
                if (options.bytes === String)
                    object.encrypted_payload = "";
                else {
                    object.encrypted_payload = [];
                    if (options.bytes !== Array)
                        object.encrypted_payload = $util.newBuffer(object.encrypted_payload);
                }
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.src_clientid != null && message.hasOwnProperty("src_clientid"))
                if (typeof message.src_clientid === "number")
                    object.src_clientid = options.longs === String ? String(message.src_clientid) : message.src_clientid;
                else
                    object.src_clientid = options.longs === String ? $util.Long.prototype.toString.call(message.src_clientid) : options.longs === Number ? new $util.LongBits(message.src_clientid.low >>> 0, message.src_clientid.high >>> 0).toNumber() : message.src_clientid;
            if (message.dst_clientid != null && message.hasOwnProperty("dst_clientid"))
                if (typeof message.dst_clientid === "number")
                    object.dst_clientid = options.longs === String ? String(message.dst_clientid) : message.dst_clientid;
                else
                    object.dst_clientid = options.longs === String ? $util.Long.prototype.toString.call(message.dst_clientid) : options.longs === Number ? new $util.LongBits(message.dst_clientid.low >>> 0, message.dst_clientid.high >>> 0).toNumber() : message.dst_clientid;
            if (message.secretid != null && message.hasOwnProperty("secretid"))
                object.secretid = message.secretid;
            if (message.encrypted_payload != null && message.hasOwnProperty("encrypted_payload"))
                object.encrypted_payload = options.bytes === String ? $util.base64.encode(message.encrypted_payload, 0, message.encrypted_payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.encrypted_payload) : message.encrypted_payload;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_SteamToSteam_Notification to JSON.
         * @function toJSON
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_SteamToSteam_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_SteamToSteam_Notification;
    })();
    
    $root.CRemotePlay_SessionStarted_Request = (function() {
    
        /**
         * Properties of a CRemotePlay_SessionStarted_Request.
         * @exports ICRemotePlay_SessionStarted_Request
         * @interface ICRemotePlay_SessionStarted_Request
         * @property {number|null} [host_account_id] CRemotePlay_SessionStarted_Request host_account_id
         * @property {number|null} [client_account_id] CRemotePlay_SessionStarted_Request client_account_id
         * @property {number|null} [appid] CRemotePlay_SessionStarted_Request appid
         * @property {number|null} [device_form_factor] CRemotePlay_SessionStarted_Request device_form_factor
         */
    
        /**
         * Constructs a new CRemotePlay_SessionStarted_Request.
         * @exports CRemotePlay_SessionStarted_Request
         * @classdesc Represents a CRemotePlay_SessionStarted_Request.
         * @implements ICRemotePlay_SessionStarted_Request
         * @constructor
         * @param {ICRemotePlay_SessionStarted_Request=} [properties] Properties to set
         */
        function CRemotePlay_SessionStarted_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemotePlay_SessionStarted_Request host_account_id.
         * @member {number} host_account_id
         * @memberof CRemotePlay_SessionStarted_Request
         * @instance
         */
        CRemotePlay_SessionStarted_Request.prototype.host_account_id = 0;
    
        /**
         * CRemotePlay_SessionStarted_Request client_account_id.
         * @member {number} client_account_id
         * @memberof CRemotePlay_SessionStarted_Request
         * @instance
         */
        CRemotePlay_SessionStarted_Request.prototype.client_account_id = 0;
    
        /**
         * CRemotePlay_SessionStarted_Request appid.
         * @member {number} appid
         * @memberof CRemotePlay_SessionStarted_Request
         * @instance
         */
        CRemotePlay_SessionStarted_Request.prototype.appid = 0;
    
        /**
         * CRemotePlay_SessionStarted_Request device_form_factor.
         * @member {number} device_form_factor
         * @memberof CRemotePlay_SessionStarted_Request
         * @instance
         */
        CRemotePlay_SessionStarted_Request.prototype.device_form_factor = 0;
    
        /**
         * Creates a new CRemotePlay_SessionStarted_Request instance using the specified properties.
         * @function create
         * @memberof CRemotePlay_SessionStarted_Request
         * @static
         * @param {ICRemotePlay_SessionStarted_Request=} [properties] Properties to set
         * @returns {CRemotePlay_SessionStarted_Request} CRemotePlay_SessionStarted_Request instance
         */
        CRemotePlay_SessionStarted_Request.create = function create(properties) {
            return new CRemotePlay_SessionStarted_Request(properties);
        };
    
        /**
         * Encodes the specified CRemotePlay_SessionStarted_Request message. Does not implicitly {@link CRemotePlay_SessionStarted_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemotePlay_SessionStarted_Request
         * @static
         * @param {ICRemotePlay_SessionStarted_Request} message CRemotePlay_SessionStarted_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemotePlay_SessionStarted_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.host_account_id != null && Object.hasOwnProperty.call(message, "host_account_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.host_account_id);
            if (message.client_account_id != null && Object.hasOwnProperty.call(message, "client_account_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.client_account_id);
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.appid);
            if (message.device_form_factor != null && Object.hasOwnProperty.call(message, "device_form_factor"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.device_form_factor);
            return writer;
        };
    
        /**
         * Encodes the specified CRemotePlay_SessionStarted_Request message, length delimited. Does not implicitly {@link CRemotePlay_SessionStarted_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemotePlay_SessionStarted_Request
         * @static
         * @param {ICRemotePlay_SessionStarted_Request} message CRemotePlay_SessionStarted_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemotePlay_SessionStarted_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemotePlay_SessionStarted_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemotePlay_SessionStarted_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemotePlay_SessionStarted_Request} CRemotePlay_SessionStarted_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemotePlay_SessionStarted_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemotePlay_SessionStarted_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.host_account_id = reader.uint32();
                    break;
                case 2:
                    message.client_account_id = reader.uint32();
                    break;
                case 3:
                    message.appid = reader.uint32();
                    break;
                case 4:
                    message.device_form_factor = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemotePlay_SessionStarted_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemotePlay_SessionStarted_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemotePlay_SessionStarted_Request} CRemotePlay_SessionStarted_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemotePlay_SessionStarted_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemotePlay_SessionStarted_Request message.
         * @function verify
         * @memberof CRemotePlay_SessionStarted_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemotePlay_SessionStarted_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.host_account_id != null && message.hasOwnProperty("host_account_id"))
                if (!$util.isInteger(message.host_account_id))
                    return "host_account_id: integer expected";
            if (message.client_account_id != null && message.hasOwnProperty("client_account_id"))
                if (!$util.isInteger(message.client_account_id))
                    return "client_account_id: integer expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.device_form_factor != null && message.hasOwnProperty("device_form_factor"))
                if (!$util.isInteger(message.device_form_factor))
                    return "device_form_factor: integer expected";
            return null;
        };
    
        /**
         * Creates a CRemotePlay_SessionStarted_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemotePlay_SessionStarted_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemotePlay_SessionStarted_Request} CRemotePlay_SessionStarted_Request
         */
        CRemotePlay_SessionStarted_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemotePlay_SessionStarted_Request)
                return object;
            var message = new $root.CRemotePlay_SessionStarted_Request();
            if (object.host_account_id != null)
                message.host_account_id = object.host_account_id >>> 0;
            if (object.client_account_id != null)
                message.client_account_id = object.client_account_id >>> 0;
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.device_form_factor != null)
                message.device_form_factor = object.device_form_factor | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemotePlay_SessionStarted_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemotePlay_SessionStarted_Request
         * @static
         * @param {CRemotePlay_SessionStarted_Request} message CRemotePlay_SessionStarted_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemotePlay_SessionStarted_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.host_account_id = 0;
                object.client_account_id = 0;
                object.appid = 0;
                object.device_form_factor = 0;
            }
            if (message.host_account_id != null && message.hasOwnProperty("host_account_id"))
                object.host_account_id = message.host_account_id;
            if (message.client_account_id != null && message.hasOwnProperty("client_account_id"))
                object.client_account_id = message.client_account_id;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.device_form_factor != null && message.hasOwnProperty("device_form_factor"))
                object.device_form_factor = message.device_form_factor;
            return object;
        };
    
        /**
         * Converts this CRemotePlay_SessionStarted_Request to JSON.
         * @function toJSON
         * @memberof CRemotePlay_SessionStarted_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemotePlay_SessionStarted_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemotePlay_SessionStarted_Request;
    })();
    
    $root.CRemotePlay_SessionStarted_Response = (function() {
    
        /**
         * Properties of a CRemotePlay_SessionStarted_Response.
         * @exports ICRemotePlay_SessionStarted_Response
         * @interface ICRemotePlay_SessionStarted_Response
         * @property {number|Long|null} [record_id] CRemotePlay_SessionStarted_Response record_id
         */
    
        /**
         * Constructs a new CRemotePlay_SessionStarted_Response.
         * @exports CRemotePlay_SessionStarted_Response
         * @classdesc Represents a CRemotePlay_SessionStarted_Response.
         * @implements ICRemotePlay_SessionStarted_Response
         * @constructor
         * @param {ICRemotePlay_SessionStarted_Response=} [properties] Properties to set
         */
        function CRemotePlay_SessionStarted_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemotePlay_SessionStarted_Response record_id.
         * @member {number|Long} record_id
         * @memberof CRemotePlay_SessionStarted_Response
         * @instance
         */
        CRemotePlay_SessionStarted_Response.prototype.record_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CRemotePlay_SessionStarted_Response instance using the specified properties.
         * @function create
         * @memberof CRemotePlay_SessionStarted_Response
         * @static
         * @param {ICRemotePlay_SessionStarted_Response=} [properties] Properties to set
         * @returns {CRemotePlay_SessionStarted_Response} CRemotePlay_SessionStarted_Response instance
         */
        CRemotePlay_SessionStarted_Response.create = function create(properties) {
            return new CRemotePlay_SessionStarted_Response(properties);
        };
    
        /**
         * Encodes the specified CRemotePlay_SessionStarted_Response message. Does not implicitly {@link CRemotePlay_SessionStarted_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemotePlay_SessionStarted_Response
         * @static
         * @param {ICRemotePlay_SessionStarted_Response} message CRemotePlay_SessionStarted_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemotePlay_SessionStarted_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.record_id != null && Object.hasOwnProperty.call(message, "record_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.record_id);
            return writer;
        };
    
        /**
         * Encodes the specified CRemotePlay_SessionStarted_Response message, length delimited. Does not implicitly {@link CRemotePlay_SessionStarted_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemotePlay_SessionStarted_Response
         * @static
         * @param {ICRemotePlay_SessionStarted_Response} message CRemotePlay_SessionStarted_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemotePlay_SessionStarted_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemotePlay_SessionStarted_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemotePlay_SessionStarted_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemotePlay_SessionStarted_Response} CRemotePlay_SessionStarted_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemotePlay_SessionStarted_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemotePlay_SessionStarted_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.record_id = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemotePlay_SessionStarted_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemotePlay_SessionStarted_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemotePlay_SessionStarted_Response} CRemotePlay_SessionStarted_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemotePlay_SessionStarted_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemotePlay_SessionStarted_Response message.
         * @function verify
         * @memberof CRemotePlay_SessionStarted_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemotePlay_SessionStarted_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.record_id != null && message.hasOwnProperty("record_id"))
                if (!$util.isInteger(message.record_id) && !(message.record_id && $util.isInteger(message.record_id.low) && $util.isInteger(message.record_id.high)))
                    return "record_id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CRemotePlay_SessionStarted_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemotePlay_SessionStarted_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemotePlay_SessionStarted_Response} CRemotePlay_SessionStarted_Response
         */
        CRemotePlay_SessionStarted_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemotePlay_SessionStarted_Response)
                return object;
            var message = new $root.CRemotePlay_SessionStarted_Response();
            if (object.record_id != null)
                if ($util.Long)
                    (message.record_id = $util.Long.fromValue(object.record_id)).unsigned = false;
                else if (typeof object.record_id === "string")
                    message.record_id = parseInt(object.record_id, 10);
                else if (typeof object.record_id === "number")
                    message.record_id = object.record_id;
                else if (typeof object.record_id === "object")
                    message.record_id = new $util.LongBits(object.record_id.low >>> 0, object.record_id.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CRemotePlay_SessionStarted_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemotePlay_SessionStarted_Response
         * @static
         * @param {CRemotePlay_SessionStarted_Response} message CRemotePlay_SessionStarted_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemotePlay_SessionStarted_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.record_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.record_id = options.longs === String ? "0" : 0;
            if (message.record_id != null && message.hasOwnProperty("record_id"))
                if (typeof message.record_id === "number")
                    object.record_id = options.longs === String ? String(message.record_id) : message.record_id;
                else
                    object.record_id = options.longs === String ? $util.Long.prototype.toString.call(message.record_id) : options.longs === Number ? new $util.LongBits(message.record_id.low >>> 0, message.record_id.high >>> 0).toNumber() : message.record_id;
            return object;
        };
    
        /**
         * Converts this CRemotePlay_SessionStarted_Response to JSON.
         * @function toJSON
         * @memberof CRemotePlay_SessionStarted_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemotePlay_SessionStarted_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemotePlay_SessionStarted_Response;
    })();
    
    $root.CRemotePlay_SessionStopped_Notification = (function() {
    
        /**
         * Properties of a CRemotePlay_SessionStopped_Notification.
         * @exports ICRemotePlay_SessionStopped_Notification
         * @interface ICRemotePlay_SessionStopped_Notification
         * @property {number|Long|null} [record_id] CRemotePlay_SessionStopped_Notification record_id
         * @property {boolean|null} [used_x264] CRemotePlay_SessionStopped_Notification used_x264
         * @property {boolean|null} [used_h264] CRemotePlay_SessionStopped_Notification used_h264
         * @property {boolean|null} [used_hevc] CRemotePlay_SessionStopped_Notification used_hevc
         */
    
        /**
         * Constructs a new CRemotePlay_SessionStopped_Notification.
         * @exports CRemotePlay_SessionStopped_Notification
         * @classdesc Represents a CRemotePlay_SessionStopped_Notification.
         * @implements ICRemotePlay_SessionStopped_Notification
         * @constructor
         * @param {ICRemotePlay_SessionStopped_Notification=} [properties] Properties to set
         */
        function CRemotePlay_SessionStopped_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemotePlay_SessionStopped_Notification record_id.
         * @member {number|Long} record_id
         * @memberof CRemotePlay_SessionStopped_Notification
         * @instance
         */
        CRemotePlay_SessionStopped_Notification.prototype.record_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemotePlay_SessionStopped_Notification used_x264.
         * @member {boolean} used_x264
         * @memberof CRemotePlay_SessionStopped_Notification
         * @instance
         */
        CRemotePlay_SessionStopped_Notification.prototype.used_x264 = false;
    
        /**
         * CRemotePlay_SessionStopped_Notification used_h264.
         * @member {boolean} used_h264
         * @memberof CRemotePlay_SessionStopped_Notification
         * @instance
         */
        CRemotePlay_SessionStopped_Notification.prototype.used_h264 = false;
    
        /**
         * CRemotePlay_SessionStopped_Notification used_hevc.
         * @member {boolean} used_hevc
         * @memberof CRemotePlay_SessionStopped_Notification
         * @instance
         */
        CRemotePlay_SessionStopped_Notification.prototype.used_hevc = false;
    
        /**
         * Creates a new CRemotePlay_SessionStopped_Notification instance using the specified properties.
         * @function create
         * @memberof CRemotePlay_SessionStopped_Notification
         * @static
         * @param {ICRemotePlay_SessionStopped_Notification=} [properties] Properties to set
         * @returns {CRemotePlay_SessionStopped_Notification} CRemotePlay_SessionStopped_Notification instance
         */
        CRemotePlay_SessionStopped_Notification.create = function create(properties) {
            return new CRemotePlay_SessionStopped_Notification(properties);
        };
    
        /**
         * Encodes the specified CRemotePlay_SessionStopped_Notification message. Does not implicitly {@link CRemotePlay_SessionStopped_Notification.verify|verify} messages.
         * @function encode
         * @memberof CRemotePlay_SessionStopped_Notification
         * @static
         * @param {ICRemotePlay_SessionStopped_Notification} message CRemotePlay_SessionStopped_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemotePlay_SessionStopped_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.record_id != null && Object.hasOwnProperty.call(message, "record_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.record_id);
            if (message.used_x264 != null && Object.hasOwnProperty.call(message, "used_x264"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.used_x264);
            if (message.used_h264 != null && Object.hasOwnProperty.call(message, "used_h264"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.used_h264);
            if (message.used_hevc != null && Object.hasOwnProperty.call(message, "used_hevc"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.used_hevc);
            return writer;
        };
    
        /**
         * Encodes the specified CRemotePlay_SessionStopped_Notification message, length delimited. Does not implicitly {@link CRemotePlay_SessionStopped_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemotePlay_SessionStopped_Notification
         * @static
         * @param {ICRemotePlay_SessionStopped_Notification} message CRemotePlay_SessionStopped_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemotePlay_SessionStopped_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemotePlay_SessionStopped_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CRemotePlay_SessionStopped_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemotePlay_SessionStopped_Notification} CRemotePlay_SessionStopped_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemotePlay_SessionStopped_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemotePlay_SessionStopped_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.record_id = reader.fixed64();
                    break;
                case 2:
                    message.used_x264 = reader.bool();
                    break;
                case 3:
                    message.used_h264 = reader.bool();
                    break;
                case 4:
                    message.used_hevc = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemotePlay_SessionStopped_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemotePlay_SessionStopped_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemotePlay_SessionStopped_Notification} CRemotePlay_SessionStopped_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemotePlay_SessionStopped_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemotePlay_SessionStopped_Notification message.
         * @function verify
         * @memberof CRemotePlay_SessionStopped_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemotePlay_SessionStopped_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.record_id != null && message.hasOwnProperty("record_id"))
                if (!$util.isInteger(message.record_id) && !(message.record_id && $util.isInteger(message.record_id.low) && $util.isInteger(message.record_id.high)))
                    return "record_id: integer|Long expected";
            if (message.used_x264 != null && message.hasOwnProperty("used_x264"))
                if (typeof message.used_x264 !== "boolean")
                    return "used_x264: boolean expected";
            if (message.used_h264 != null && message.hasOwnProperty("used_h264"))
                if (typeof message.used_h264 !== "boolean")
                    return "used_h264: boolean expected";
            if (message.used_hevc != null && message.hasOwnProperty("used_hevc"))
                if (typeof message.used_hevc !== "boolean")
                    return "used_hevc: boolean expected";
            return null;
        };
    
        /**
         * Creates a CRemotePlay_SessionStopped_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemotePlay_SessionStopped_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemotePlay_SessionStopped_Notification} CRemotePlay_SessionStopped_Notification
         */
        CRemotePlay_SessionStopped_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemotePlay_SessionStopped_Notification)
                return object;
            var message = new $root.CRemotePlay_SessionStopped_Notification();
            if (object.record_id != null)
                if ($util.Long)
                    (message.record_id = $util.Long.fromValue(object.record_id)).unsigned = false;
                else if (typeof object.record_id === "string")
                    message.record_id = parseInt(object.record_id, 10);
                else if (typeof object.record_id === "number")
                    message.record_id = object.record_id;
                else if (typeof object.record_id === "object")
                    message.record_id = new $util.LongBits(object.record_id.low >>> 0, object.record_id.high >>> 0).toNumber();
            if (object.used_x264 != null)
                message.used_x264 = Boolean(object.used_x264);
            if (object.used_h264 != null)
                message.used_h264 = Boolean(object.used_h264);
            if (object.used_hevc != null)
                message.used_hevc = Boolean(object.used_hevc);
            return message;
        };
    
        /**
         * Creates a plain object from a CRemotePlay_SessionStopped_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemotePlay_SessionStopped_Notification
         * @static
         * @param {CRemotePlay_SessionStopped_Notification} message CRemotePlay_SessionStopped_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemotePlay_SessionStopped_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.record_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.record_id = options.longs === String ? "0" : 0;
                object.used_x264 = false;
                object.used_h264 = false;
                object.used_hevc = false;
            }
            if (message.record_id != null && message.hasOwnProperty("record_id"))
                if (typeof message.record_id === "number")
                    object.record_id = options.longs === String ? String(message.record_id) : message.record_id;
                else
                    object.record_id = options.longs === String ? $util.Long.prototype.toString.call(message.record_id) : options.longs === Number ? new $util.LongBits(message.record_id.low >>> 0, message.record_id.high >>> 0).toNumber() : message.record_id;
            if (message.used_x264 != null && message.hasOwnProperty("used_x264"))
                object.used_x264 = message.used_x264;
            if (message.used_h264 != null && message.hasOwnProperty("used_h264"))
                object.used_h264 = message.used_h264;
            if (message.used_hevc != null && message.hasOwnProperty("used_hevc"))
                object.used_hevc = message.used_hevc;
            return object;
        };
    
        /**
         * Converts this CRemotePlay_SessionStopped_Notification to JSON.
         * @function toJSON
         * @memberof CRemotePlay_SessionStopped_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemotePlay_SessionStopped_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemotePlay_SessionStopped_Notification;
    })();
    
    $root.CRemotePlayTogether_Notification = (function() {
    
        /**
         * Properties of a CRemotePlayTogether_Notification.
         * @exports ICRemotePlayTogether_Notification
         * @interface ICRemotePlayTogether_Notification
         * @property {number|Long|null} [steamid] CRemotePlayTogether_Notification steamid
         * @property {CRemotePlayTogether_Notification.IGroupUpdated|null} [group_updated] CRemotePlayTogether_Notification group_updated
         */
    
        /**
         * Constructs a new CRemotePlayTogether_Notification.
         * @exports CRemotePlayTogether_Notification
         * @classdesc Represents a CRemotePlayTogether_Notification.
         * @implements ICRemotePlayTogether_Notification
         * @constructor
         * @param {ICRemotePlayTogether_Notification=} [properties] Properties to set
         */
        function CRemotePlayTogether_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemotePlayTogether_Notification steamid.
         * @member {number|Long} steamid
         * @memberof CRemotePlayTogether_Notification
         * @instance
         */
        CRemotePlayTogether_Notification.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemotePlayTogether_Notification group_updated.
         * @member {CRemotePlayTogether_Notification.IGroupUpdated|null|undefined} group_updated
         * @memberof CRemotePlayTogether_Notification
         * @instance
         */
        CRemotePlayTogether_Notification.prototype.group_updated = null;
    
        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;
    
        /**
         * CRemotePlayTogether_Notification Message.
         * @member {"group_updated"|undefined} Message
         * @memberof CRemotePlayTogether_Notification
         * @instance
         */
        Object.defineProperty(CRemotePlayTogether_Notification.prototype, "Message", {
            get: $util.oneOfGetter($oneOfFields = ["group_updated"]),
            set: $util.oneOfSetter($oneOfFields)
        });
    
        /**
         * Creates a new CRemotePlayTogether_Notification instance using the specified properties.
         * @function create
         * @memberof CRemotePlayTogether_Notification
         * @static
         * @param {ICRemotePlayTogether_Notification=} [properties] Properties to set
         * @returns {CRemotePlayTogether_Notification} CRemotePlayTogether_Notification instance
         */
        CRemotePlayTogether_Notification.create = function create(properties) {
            return new CRemotePlayTogether_Notification(properties);
        };
    
        /**
         * Encodes the specified CRemotePlayTogether_Notification message. Does not implicitly {@link CRemotePlayTogether_Notification.verify|verify} messages.
         * @function encode
         * @memberof CRemotePlayTogether_Notification
         * @static
         * @param {ICRemotePlayTogether_Notification} message CRemotePlayTogether_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemotePlayTogether_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.group_updated != null && Object.hasOwnProperty.call(message, "group_updated"))
                $root.CRemotePlayTogether_Notification.GroupUpdated.encode(message.group_updated, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CRemotePlayTogether_Notification message, length delimited. Does not implicitly {@link CRemotePlayTogether_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemotePlayTogether_Notification
         * @static
         * @param {ICRemotePlayTogether_Notification} message CRemotePlayTogether_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemotePlayTogether_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemotePlayTogether_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CRemotePlayTogether_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemotePlayTogether_Notification} CRemotePlayTogether_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemotePlayTogether_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemotePlayTogether_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.group_updated = $root.CRemotePlayTogether_Notification.GroupUpdated.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemotePlayTogether_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemotePlayTogether_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemotePlayTogether_Notification} CRemotePlayTogether_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemotePlayTogether_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemotePlayTogether_Notification message.
         * @function verify
         * @memberof CRemotePlayTogether_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemotePlayTogether_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.group_updated != null && message.hasOwnProperty("group_updated")) {
                properties.Message = 1;
                {
                    var error = $root.CRemotePlayTogether_Notification.GroupUpdated.verify(message.group_updated);
                    if (error)
                        return "group_updated." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CRemotePlayTogether_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemotePlayTogether_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemotePlayTogether_Notification} CRemotePlayTogether_Notification
         */
        CRemotePlayTogether_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemotePlayTogether_Notification)
                return object;
            var message = new $root.CRemotePlayTogether_Notification();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.group_updated != null) {
                if (typeof object.group_updated !== "object")
                    throw TypeError(".CRemotePlayTogether_Notification.group_updated: object expected");
                message.group_updated = $root.CRemotePlayTogether_Notification.GroupUpdated.fromObject(object.group_updated);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CRemotePlayTogether_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemotePlayTogether_Notification
         * @static
         * @param {CRemotePlayTogether_Notification} message CRemotePlayTogether_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemotePlayTogether_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.group_updated != null && message.hasOwnProperty("group_updated")) {
                object.group_updated = $root.CRemotePlayTogether_Notification.GroupUpdated.toObject(message.group_updated, options);
                if (options.oneofs)
                    object.Message = "group_updated";
            }
            return object;
        };
    
        /**
         * Converts this CRemotePlayTogether_Notification to JSON.
         * @function toJSON
         * @memberof CRemotePlayTogether_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemotePlayTogether_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CRemotePlayTogether_Notification.ControllerSlots = (function() {
    
            /**
             * Properties of a ControllerSlots.
             * @memberof CRemotePlayTogether_Notification
             * @interface IControllerSlots
             * @property {number|null} [slotid] ControllerSlots slotid
             * @property {number|Long|null} [steamid] ControllerSlots steamid
             */
    
            /**
             * Constructs a new ControllerSlots.
             * @memberof CRemotePlayTogether_Notification
             * @classdesc Represents a ControllerSlots.
             * @implements IControllerSlots
             * @constructor
             * @param {CRemotePlayTogether_Notification.IControllerSlots=} [properties] Properties to set
             */
            function ControllerSlots(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ControllerSlots slotid.
             * @member {number} slotid
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @instance
             */
            ControllerSlots.prototype.slotid = 0;
    
            /**
             * ControllerSlots steamid.
             * @member {number|Long} steamid
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @instance
             */
            ControllerSlots.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Creates a new ControllerSlots instance using the specified properties.
             * @function create
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @static
             * @param {CRemotePlayTogether_Notification.IControllerSlots=} [properties] Properties to set
             * @returns {CRemotePlayTogether_Notification.ControllerSlots} ControllerSlots instance
             */
            ControllerSlots.create = function create(properties) {
                return new ControllerSlots(properties);
            };
    
            /**
             * Encodes the specified ControllerSlots message. Does not implicitly {@link CRemotePlayTogether_Notification.ControllerSlots.verify|verify} messages.
             * @function encode
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @static
             * @param {CRemotePlayTogether_Notification.IControllerSlots} message ControllerSlots message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ControllerSlots.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.slotid != null && Object.hasOwnProperty.call(message, "slotid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.slotid);
                if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                    writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.steamid);
                return writer;
            };
    
            /**
             * Encodes the specified ControllerSlots message, length delimited. Does not implicitly {@link CRemotePlayTogether_Notification.ControllerSlots.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @static
             * @param {CRemotePlayTogether_Notification.IControllerSlots} message ControllerSlots message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ControllerSlots.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ControllerSlots message from the specified reader or buffer.
             * @function decode
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CRemotePlayTogether_Notification.ControllerSlots} ControllerSlots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ControllerSlots.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemotePlayTogether_Notification.ControllerSlots();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.slotid = reader.uint32();
                        break;
                    case 2:
                        message.steamid = reader.fixed64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ControllerSlots message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CRemotePlayTogether_Notification.ControllerSlots} ControllerSlots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ControllerSlots.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ControllerSlots message.
             * @function verify
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ControllerSlots.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.slotid != null && message.hasOwnProperty("slotid"))
                    if (!$util.isInteger(message.slotid))
                        return "slotid: integer expected";
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                        return "steamid: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a ControllerSlots message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CRemotePlayTogether_Notification.ControllerSlots} ControllerSlots
             */
            ControllerSlots.fromObject = function fromObject(object) {
                if (object instanceof $root.CRemotePlayTogether_Notification.ControllerSlots)
                    return object;
                var message = new $root.CRemotePlayTogether_Notification.ControllerSlots();
                if (object.slotid != null)
                    message.slotid = object.slotid >>> 0;
                if (object.steamid != null)
                    if ($util.Long)
                        (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                    else if (typeof object.steamid === "string")
                        message.steamid = parseInt(object.steamid, 10);
                    else if (typeof object.steamid === "number")
                        message.steamid = object.steamid;
                    else if (typeof object.steamid === "object")
                        message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from a ControllerSlots message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @static
             * @param {CRemotePlayTogether_Notification.ControllerSlots} message ControllerSlots
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ControllerSlots.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.slotid = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.steamid = options.longs === String ? "0" : 0;
                }
                if (message.slotid != null && message.hasOwnProperty("slotid"))
                    object.slotid = message.slotid;
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    if (typeof message.steamid === "number")
                        object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                    else
                        object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
                return object;
            };
    
            /**
             * Converts this ControllerSlots to JSON.
             * @function toJSON
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ControllerSlots.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ControllerSlots;
        })();
    
        CRemotePlayTogether_Notification.GroupUpdated = (function() {
    
            /**
             * Properties of a GroupUpdated.
             * @memberof CRemotePlayTogether_Notification
             * @interface IGroupUpdated
             * @property {number|Long|null} [host_steamid] GroupUpdated host_steamid
             * @property {number|Long|null} [host_clientid] GroupUpdated host_clientid
             * @property {Array.<number|Long>|null} [players] GroupUpdated players
             * @property {number|Long|null} [host_gameid] GroupUpdated host_gameid
             * @property {Array.<CRemotePlayTogether_Notification.IControllerSlots>|null} [controller_slots] GroupUpdated controller_slots
             */
    
            /**
             * Constructs a new GroupUpdated.
             * @memberof CRemotePlayTogether_Notification
             * @classdesc Represents a GroupUpdated.
             * @implements IGroupUpdated
             * @constructor
             * @param {CRemotePlayTogether_Notification.IGroupUpdated=} [properties] Properties to set
             */
            function GroupUpdated(properties) {
                this.players = [];
                this.controller_slots = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GroupUpdated host_steamid.
             * @member {number|Long} host_steamid
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @instance
             */
            GroupUpdated.prototype.host_steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * GroupUpdated host_clientid.
             * @member {number|Long} host_clientid
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @instance
             */
            GroupUpdated.prototype.host_clientid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * GroupUpdated players.
             * @member {Array.<number|Long>} players
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @instance
             */
            GroupUpdated.prototype.players = $util.emptyArray;
    
            /**
             * GroupUpdated host_gameid.
             * @member {number|Long} host_gameid
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @instance
             */
            GroupUpdated.prototype.host_gameid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * GroupUpdated controller_slots.
             * @member {Array.<CRemotePlayTogether_Notification.IControllerSlots>} controller_slots
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @instance
             */
            GroupUpdated.prototype.controller_slots = $util.emptyArray;
    
            /**
             * Creates a new GroupUpdated instance using the specified properties.
             * @function create
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @static
             * @param {CRemotePlayTogether_Notification.IGroupUpdated=} [properties] Properties to set
             * @returns {CRemotePlayTogether_Notification.GroupUpdated} GroupUpdated instance
             */
            GroupUpdated.create = function create(properties) {
                return new GroupUpdated(properties);
            };
    
            /**
             * Encodes the specified GroupUpdated message. Does not implicitly {@link CRemotePlayTogether_Notification.GroupUpdated.verify|verify} messages.
             * @function encode
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @static
             * @param {CRemotePlayTogether_Notification.IGroupUpdated} message GroupUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GroupUpdated.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.host_steamid != null && Object.hasOwnProperty.call(message, "host_steamid"))
                    writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.host_steamid);
                if (message.host_clientid != null && Object.hasOwnProperty.call(message, "host_clientid"))
                    writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.host_clientid);
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.players[i]);
                if (message.host_gameid != null && Object.hasOwnProperty.call(message, "host_gameid"))
                    writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.host_gameid);
                if (message.controller_slots != null && message.controller_slots.length)
                    for (var i = 0; i < message.controller_slots.length; ++i)
                        $root.CRemotePlayTogether_Notification.ControllerSlots.encode(message.controller_slots[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified GroupUpdated message, length delimited. Does not implicitly {@link CRemotePlayTogether_Notification.GroupUpdated.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @static
             * @param {CRemotePlayTogether_Notification.IGroupUpdated} message GroupUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GroupUpdated.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GroupUpdated message from the specified reader or buffer.
             * @function decode
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CRemotePlayTogether_Notification.GroupUpdated} GroupUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GroupUpdated.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemotePlayTogether_Notification.GroupUpdated();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.host_steamid = reader.fixed64();
                        break;
                    case 2:
                        message.host_clientid = reader.fixed64();
                        break;
                    case 3:
                        if (!(message.players && message.players.length))
                            message.players = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.players.push(reader.fixed64());
                        } else
                            message.players.push(reader.fixed64());
                        break;
                    case 4:
                        message.host_gameid = reader.fixed64();
                        break;
                    case 5:
                        if (!(message.controller_slots && message.controller_slots.length))
                            message.controller_slots = [];
                        message.controller_slots.push($root.CRemotePlayTogether_Notification.ControllerSlots.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GroupUpdated message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CRemotePlayTogether_Notification.GroupUpdated} GroupUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GroupUpdated.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GroupUpdated message.
             * @function verify
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GroupUpdated.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.host_steamid != null && message.hasOwnProperty("host_steamid"))
                    if (!$util.isInteger(message.host_steamid) && !(message.host_steamid && $util.isInteger(message.host_steamid.low) && $util.isInteger(message.host_steamid.high)))
                        return "host_steamid: integer|Long expected";
                if (message.host_clientid != null && message.hasOwnProperty("host_clientid"))
                    if (!$util.isInteger(message.host_clientid) && !(message.host_clientid && $util.isInteger(message.host_clientid.low) && $util.isInteger(message.host_clientid.high)))
                        return "host_clientid: integer|Long expected";
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i)
                        if (!$util.isInteger(message.players[i]) && !(message.players[i] && $util.isInteger(message.players[i].low) && $util.isInteger(message.players[i].high)))
                            return "players: integer|Long[] expected";
                }
                if (message.host_gameid != null && message.hasOwnProperty("host_gameid"))
                    if (!$util.isInteger(message.host_gameid) && !(message.host_gameid && $util.isInteger(message.host_gameid.low) && $util.isInteger(message.host_gameid.high)))
                        return "host_gameid: integer|Long expected";
                if (message.controller_slots != null && message.hasOwnProperty("controller_slots")) {
                    if (!Array.isArray(message.controller_slots))
                        return "controller_slots: array expected";
                    for (var i = 0; i < message.controller_slots.length; ++i) {
                        var error = $root.CRemotePlayTogether_Notification.ControllerSlots.verify(message.controller_slots[i]);
                        if (error)
                            return "controller_slots." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a GroupUpdated message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CRemotePlayTogether_Notification.GroupUpdated} GroupUpdated
             */
            GroupUpdated.fromObject = function fromObject(object) {
                if (object instanceof $root.CRemotePlayTogether_Notification.GroupUpdated)
                    return object;
                var message = new $root.CRemotePlayTogether_Notification.GroupUpdated();
                if (object.host_steamid != null)
                    if ($util.Long)
                        (message.host_steamid = $util.Long.fromValue(object.host_steamid)).unsigned = false;
                    else if (typeof object.host_steamid === "string")
                        message.host_steamid = parseInt(object.host_steamid, 10);
                    else if (typeof object.host_steamid === "number")
                        message.host_steamid = object.host_steamid;
                    else if (typeof object.host_steamid === "object")
                        message.host_steamid = new $util.LongBits(object.host_steamid.low >>> 0, object.host_steamid.high >>> 0).toNumber();
                if (object.host_clientid != null)
                    if ($util.Long)
                        (message.host_clientid = $util.Long.fromValue(object.host_clientid)).unsigned = false;
                    else if (typeof object.host_clientid === "string")
                        message.host_clientid = parseInt(object.host_clientid, 10);
                    else if (typeof object.host_clientid === "number")
                        message.host_clientid = object.host_clientid;
                    else if (typeof object.host_clientid === "object")
                        message.host_clientid = new $util.LongBits(object.host_clientid.low >>> 0, object.host_clientid.high >>> 0).toNumber();
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".CRemotePlayTogether_Notification.GroupUpdated.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i)
                        if ($util.Long)
                            (message.players[i] = $util.Long.fromValue(object.players[i])).unsigned = false;
                        else if (typeof object.players[i] === "string")
                            message.players[i] = parseInt(object.players[i], 10);
                        else if (typeof object.players[i] === "number")
                            message.players[i] = object.players[i];
                        else if (typeof object.players[i] === "object")
                            message.players[i] = new $util.LongBits(object.players[i].low >>> 0, object.players[i].high >>> 0).toNumber();
                }
                if (object.host_gameid != null)
                    if ($util.Long)
                        (message.host_gameid = $util.Long.fromValue(object.host_gameid)).unsigned = false;
                    else if (typeof object.host_gameid === "string")
                        message.host_gameid = parseInt(object.host_gameid, 10);
                    else if (typeof object.host_gameid === "number")
                        message.host_gameid = object.host_gameid;
                    else if (typeof object.host_gameid === "object")
                        message.host_gameid = new $util.LongBits(object.host_gameid.low >>> 0, object.host_gameid.high >>> 0).toNumber();
                if (object.controller_slots) {
                    if (!Array.isArray(object.controller_slots))
                        throw TypeError(".CRemotePlayTogether_Notification.GroupUpdated.controller_slots: array expected");
                    message.controller_slots = [];
                    for (var i = 0; i < object.controller_slots.length; ++i) {
                        if (typeof object.controller_slots[i] !== "object")
                            throw TypeError(".CRemotePlayTogether_Notification.GroupUpdated.controller_slots: object expected");
                        message.controller_slots[i] = $root.CRemotePlayTogether_Notification.ControllerSlots.fromObject(object.controller_slots[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a GroupUpdated message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @static
             * @param {CRemotePlayTogether_Notification.GroupUpdated} message GroupUpdated
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GroupUpdated.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.players = [];
                    object.controller_slots = [];
                }
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.host_steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.host_steamid = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.host_clientid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.host_clientid = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.host_gameid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.host_gameid = options.longs === String ? "0" : 0;
                }
                if (message.host_steamid != null && message.hasOwnProperty("host_steamid"))
                    if (typeof message.host_steamid === "number")
                        object.host_steamid = options.longs === String ? String(message.host_steamid) : message.host_steamid;
                    else
                        object.host_steamid = options.longs === String ? $util.Long.prototype.toString.call(message.host_steamid) : options.longs === Number ? new $util.LongBits(message.host_steamid.low >>> 0, message.host_steamid.high >>> 0).toNumber() : message.host_steamid;
                if (message.host_clientid != null && message.hasOwnProperty("host_clientid"))
                    if (typeof message.host_clientid === "number")
                        object.host_clientid = options.longs === String ? String(message.host_clientid) : message.host_clientid;
                    else
                        object.host_clientid = options.longs === String ? $util.Long.prototype.toString.call(message.host_clientid) : options.longs === Number ? new $util.LongBits(message.host_clientid.low >>> 0, message.host_clientid.high >>> 0).toNumber() : message.host_clientid;
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        if (typeof message.players[j] === "number")
                            object.players[j] = options.longs === String ? String(message.players[j]) : message.players[j];
                        else
                            object.players[j] = options.longs === String ? $util.Long.prototype.toString.call(message.players[j]) : options.longs === Number ? new $util.LongBits(message.players[j].low >>> 0, message.players[j].high >>> 0).toNumber() : message.players[j];
                }
                if (message.host_gameid != null && message.hasOwnProperty("host_gameid"))
                    if (typeof message.host_gameid === "number")
                        object.host_gameid = options.longs === String ? String(message.host_gameid) : message.host_gameid;
                    else
                        object.host_gameid = options.longs === String ? $util.Long.prototype.toString.call(message.host_gameid) : options.longs === Number ? new $util.LongBits(message.host_gameid.low >>> 0, message.host_gameid.high >>> 0).toNumber() : message.host_gameid;
                if (message.controller_slots && message.controller_slots.length) {
                    object.controller_slots = [];
                    for (var j = 0; j < message.controller_slots.length; ++j)
                        object.controller_slots[j] = $root.CRemotePlayTogether_Notification.ControllerSlots.toObject(message.controller_slots[j], options);
                }
                return object;
            };
    
            /**
             * Converts this GroupUpdated to JSON.
             * @function toJSON
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GroupUpdated.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GroupUpdated;
        })();
    
        return CRemotePlayTogether_Notification;
    })();

    return $root;
});
