'use strict';

let fs  = require('fs'),
    file = './assets/countries.txt',
    newFile = './assets/countries-callback.txt';

fs.access(file, fs.F_OK, (err) => {
    if (err) {
        console.log("El archivo no existe");
    }else{
        console.log("El archivo existe");
        fs.readFile(file, (err, data) => {
            if (err) {
                console.log('El archivo no se pudo leer');
            }else{
                console.log("El archivo se ha leído exitosamente.");
                fs.writeFile(newFile, data, err => {
                    return (err) ? log.error('El archivo no se pudo copiar.') : console.log('El archivo se ha copiado con éxito.');
                })
            }
        })
    }
});