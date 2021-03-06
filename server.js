const path = require('path');
const express = require('express');
const socket = require('socket.io');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(3000, () => {
    console.log("Server running");
});

const io = socket(server);

io.sockets.on('connection', (socket) => {
    console.log('new connection')
    console.log('new clent connected! Id: ' + socket.id);
    socket.on('mouseMoved', (mousePos) => { // called from client mouseDragged()
        console.log('mouse moved', mousePos, socket.id)
        socket.broadcast.emit('mouseMoved', mousePos);
    })
});

