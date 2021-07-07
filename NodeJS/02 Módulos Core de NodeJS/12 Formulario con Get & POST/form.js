'use strict';

const http = require('http').createServer(webServer),
    form = require('fs').readFileSync("assets/form.html"),
    querystring = require('querystring'),
    util = require('util');

let dataString = '';

function webServer(req, res){
    if(req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(form);
    }

    if(req.method === 'POST'){
        req
            .on('data', data => {
                dataString += data;
            })
            .on('end', () => {
                let dataObject = querystring.parse(dataString),
                    dataJSON = util.inspect(dataObject),
                    templateString = `
Los datos que enviaste por POST como string son: ${dataString}
Los datos que enviaste por POST como objeto son: ${dataJSON}
                `;
                console.log(templateString);
                res.end(templateString);
            });
    }
}

http.listen(3000);
console.log('Server running at http://localhost:3000/');