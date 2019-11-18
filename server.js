const io = require('socket.io')();

let count = 0;

io.on('connection', (client) => {
    count++;
    io.sockets.emit('session', count);
    console.log('New Connection');

    client.on('disconnect', () => {
        if (count > 0) count--;
        io.sockets.emit('session', count);
        console.log('Disconnected')
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);