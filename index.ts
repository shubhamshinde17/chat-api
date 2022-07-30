import express from 'express';
import { Server } from "socket.io";
import http from 'http';
import cors from 'cors';
import { userRouter } from './src/api/user';
import { connect } from './src/database/dbUtil';
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(cors());
app.use(userRouter);

connect();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('join_room', (roomId) => {
        console.log(`Room Id : ${roomId}`);
        socket.join(roomId);
    })

    socket.on('private_message', ({ id, msg }) => {
        console.log(id, ' :: ', msg)
        socket.to(id).emit("private_message", id, msg);
    })
});

server.listen(3000, () => {
    console.log('listening on http://localhost:3000');
});