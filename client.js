const net = require('net');
const stdin = process.stdin;
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
   
  // stdin.on(`data`, (data) => {
  //   if (data === `\\q\n`) {
  //     conn.end();
  //     process.exit();
  //   } else conn.write(`Move: up`);
  // });
  

  conn.on(`connect`, () => {
    console.log(`Successfully connected to game server`);
    // setInterval(() => {
    //   conn.write(`Move: up`);
    // }, 500);
    // setTimeout(() => {
    //   conn.write(`Move: up`);
    // }, 2000);
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};
module.exports = connect;