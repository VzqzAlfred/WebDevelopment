//'use strict';

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Running Node JS :D');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



const http = require('http');

const hostname = 'localhost';
const port = 3000;

const webServer = (req, res) => {
    res
        .writeHead(200, {'Content-Type': 'text/html'})
        .end('<h1 style="text-align:center;">Running NodeJS with a code diferent :D</h1>')
  }

const server = http.createServer(webServer);


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});