'use strict';

const http = require('http'),
    options = {
        host: 'mediotiempo.com',
        port: 80,
        path: '/'
    };
let htmlCode = '';

const httpClient = (res) => {
        console.log(`El sitio ${options.host} ha respondido. Código de estado: ${res.statusCode}`);
        res.on('data', data => {
            htmlCode += data;
            console.log(data, data.toString());

        })
    }

const httpError = err => {
    console.log(`El sitio ${options.host} no respondio. Código de estado: ${err.code}, Error: ${err.message}`);
}

const webServer = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(htmlCode);
};


// Instancia cliente de HTTP
http
    .get(options, httpClient)
    .on('error', httpError)

// Instancia de Servidor HTTP
http.createServer(webServer)
    .listen(3000)

console.log('Server running at http://localhost:3000');