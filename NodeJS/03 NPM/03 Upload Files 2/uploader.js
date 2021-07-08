'use strict';

const http = require('http').createServer(serverUpload),
    util = require('util'),
    formidable = require('formidable'),
    fse = require('fs-extra');

function serverUpload(req, res){

    if(req.method.toLowerCase() == 'get' && req.url == '/'){
        let form = `
            <h1>Uploader de Archivos en NodeJS</h1>
            <form action="/upload" enctype="multipart/form-data" method="post">
                <div><input type="file" name="upload" required></div>
                <div><input type="submit" value="Subir Archivo"></div>
            </form>`;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(form);
    }

    if(req.method.toLowerCase() == 'post' && req.url == '/upload'){
        let form = formidable({multiples:true});

        form    
            .parse(req, (err, fields, files) => {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(`
                    <h1>Archivos Recibidos</h1> 
                    <a href="/">Regresar</a> 
                    <br><br>
                    <code>${util.inspect({files: files})}</code>
                `);
                res.end();
            })
            .on('progress', (bytesReceived, bytesExpected) => {
                let percentCompleted = (bytesReceived/bytesExpected) * 100;
                console.log(percentCompleted.toFixed(2));
            })
            .on('error', err => {
                console.log(err);
            })
            .on('end', (fields, files) => {
                // Ubicación temporal del archivo que se sube
                let tempPath = this.openedFiles[0].path,
                    // El nombre del archivo subido.
                    fileName = this.openedFiles[0].name,
                    // Nueva ubicación;
                    newLocation = 'upload/'+fileName;

                fse.copy(tempPath, newLocation, err => {
                    return (err) ? console.log(err) : console.log('El archivo se subió con exito. :)');;
                })
            })
        
        return
    }
}

http.listen(5000);

console.log(`Server running at http://localhost:5000/`);