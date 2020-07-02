const socket = require('socket.io-client');
const heroisForOccurence = require('./resolveOccurrence');
require('dotenv').config();

const io = socket(process.env.SOCKET_URL);
io.on('connect', () => {
  console.log('socket connected');
});

function listenEvent() {
  io.on('occurrence', (data) => {
    console.log(data);
    heroisForOccurence(data);
  });
}

module.exports = listenEvent;
