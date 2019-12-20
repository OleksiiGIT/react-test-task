import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

function subscribeToSessions(cb) {
    socket.on('session', count => cb(null, count));
}

//export { subscribeToSessions }
export { subscribeToSessions }