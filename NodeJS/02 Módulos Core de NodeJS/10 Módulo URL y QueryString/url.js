/*
    URL:
        Este módulo dispone de utilidades para la resolución y análisis de URLs.

    QueryString:
        Este módulo proporciona utilidades para hacer frente a las cadenas de consulta.
*/

'use strict';

const http = require('http').createServer(webServer),
    path = require('path'),
    url = require('url'),
    urls = [
        {
            id: 1,
            route: '',
            output: '<h2>Home</h2>'
        },
        {
            id: 2,
            route: 'acerca',
            output: '<h2>Acerca</h2>'
        },
        {
            id: 3,
            route: 'contacto',
            output: '<h2>Contacto</h2>'
        }
    ];

function webServer(req, res){
    let message = `<h1>Node JS</h1>`,
        pathUrl = path.basename(req.url),
        id = url.parse( req.url, true ).query.id;

    console.log(`path: ${pathUrl}, id: ${id}`);

    urls.forEach(el => {
        if(el.route === pathUrl || el.id === id){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(message+el.output);
        }
    });

    if(!res.finished){
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(`<h1>Error 404: Not found</h1>`);       
    }
}

http.listen(3000);

console.log('Server running at http://localhost:3000/');