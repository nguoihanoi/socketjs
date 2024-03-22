
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketIO = void 0;
const socket_io_1 = __importDefault(require("socket.io"));
class SocketIO {
    constructor(httpServer) {
        this.io = socket_io_1.default(httpServer);
    }
    Server() {
        return this.io;
    }
}
exports.SocketIO = SocketIO;
//# sourceMappingURL=index.js.map
