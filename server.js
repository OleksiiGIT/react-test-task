const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

let count = 0

io.on('connection', function(socket){
    count++
    socket.emit('session', count);
    console.log('New Connection')
    socket.on('disconnect', function() {
        count--
        socket.emit('session', count);
        console.log('Disconnected')
    });

});

const port = 4000
io.listen(port);
console.log('listening on *:4000');
