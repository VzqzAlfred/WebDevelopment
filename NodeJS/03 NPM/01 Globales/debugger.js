/* En terminal ejecutar: node debug nombre_script.js */



const http = require('http');

const hostname = 'localhost';
const port = 3000;

const webServer = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    debugger;
    res.end('<h1 style="text-align:center;">Running NodeJS with a code diferent :D</h1>')
  }

const server = http.createServer(webServer);


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
