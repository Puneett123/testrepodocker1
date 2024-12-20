const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve the static HTML page (you can also add CSS/JS files here)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Real-time communication with Socket.IO
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Broadcast message to all clients
    });
});

// Start the server on port 8086
server.listen(8086, () => {
    console.log('Server is running on http://localhost:8086');
});

