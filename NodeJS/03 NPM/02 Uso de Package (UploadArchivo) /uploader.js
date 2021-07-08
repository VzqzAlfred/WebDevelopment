'use strict';

const http = require('http').createServer(serverUpload),
    util = require('util'),
    formidable = require('formidable'),
    fse = require('fs-extra');

function serverUpload(req, res){

    if(req.method == 'GET'){
        let form = `
            <form action="/upload" enctype="multipart/form-data" method="post">
                <div><input type="file" name="upload" required></div>
                <div><input type="submit" value="Subir Archivo"></div>
            </form>`;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(form);
    }
}

http.listen(5000);

console.log(`Server running at http://localhost:5000/`);