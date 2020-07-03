const socket = require('socket.io-client');
const heroesForOccurrence = require('./resolveOccurrence');
require('dotenv').config();

const io = socket(process.env.SOCKET_URL);
io.on('connect', () => {});

function listenEvent() {
  io.on('occurrence', (data) => {
    heroesForOccurrence(data);
  });
}

module.exports = listenEvent;
