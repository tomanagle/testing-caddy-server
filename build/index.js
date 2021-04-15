"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var host = "localhost";
var port = 4000;
var requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Welcome from Caddy");
};
var server = http_1.default.createServer(requestListener);
server.listen(port, host, function () {
    console.log("Server is running on http://" + host + ":" + port);
});
