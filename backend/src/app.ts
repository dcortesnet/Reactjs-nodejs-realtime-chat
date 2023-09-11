import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket: Socket) => {
  console.log('User connected ID:', socket.id);

  socket.on('join', (data) => {
    console.log(`User with ID: ${socket.id} joined room: ${data.room}`);
    socket.join(data.room);
    io.to(data.room).emit('user joined', data.email);
  });

  socket.on('new_message', (data) => {
    io.to(data.room).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('User Disconnected', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Service listen on ${PORT}`);
});
