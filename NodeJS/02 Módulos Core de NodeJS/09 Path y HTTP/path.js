/*
    Path
        Contiene utilidades para manejar y transformar las rutas de los directorios y archivos a formato de cadena.
        El sistema de archivos no es consultado para comprobar si los cambios son válidos.
*/
'use strict';

const http = require('http').createServer(webServer),
    path = require('path'),
    urls = [
        {
            route: '',
            output: '<h2>Home</h2>'
        },
        {
            route: 'acerca',
            output: '<h2>Acerca</h2>'
        },
        {
            route: 'contacto',
            output: '<h2>Contacto</h2>'
        }
    ];

function webServer(req, res){
    let message = `<h1>Node JS</h1>`,
        pathUrl = path.basename(req.url);

    console.log(pathUrl);

    urls.forEach(el => {
        if(el.route === pathUrl){
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