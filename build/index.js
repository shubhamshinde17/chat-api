"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const user_1 = require("./src/api/user");
const dbUtil_1 = require("./src/database/dbUtil");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server);
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(user_1.userRouter);
(0, dbUtil_1.connect)();
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
    socket.on('join_room', (roomId) => {
        console.log(`Room Id : ${roomId}`);
        socket.join(roomId);
    });
    socket.on('private_message', ({ id, msg }) => {
        console.log(id, ' :: ', msg);
        socket.to(id).emit("private_message", id, msg);
    });
});
app.listen(3000, () => {
    console.log('listening on http://localhost:3000');
});
