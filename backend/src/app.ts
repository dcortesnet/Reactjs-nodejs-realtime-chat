import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('chat message', (message) => {
    io.emit('chat message', message);
  });
});

server.listen(PORT, () => {
  console.log(`Service listen on ${PORT}`);
});
