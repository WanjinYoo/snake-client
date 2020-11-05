const { IP, PORT } = require('./constants');
const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.on(`connect`, () => {
    console.log(`Successfully connected to game server`);
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};
module.exports = {connect};