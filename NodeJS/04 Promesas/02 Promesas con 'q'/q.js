'use strict';

const fs  = require('fs'),
    Q = require('q'),
    file = './assets/countries.txt',
    newFile = './assets/countries-q.txt';

    const existFile = (file) => {
        let defer = Q.defer();
        fs.access(file, fs.F_OK, err => {
            return (err) ? defer.reject(new Error('El archivo no existe')) : defer.resolve(true); 
        })

        return defer.promise
    }

    const readFile = (file) => {
        let defer = Q.defer();
        console.log('El archivo existe');
        fs.readFile(file, (err, data) => {
            return (err) ? defer.reject(new Error('El archivo no se pudo leer')) : defer.resolve(data);  
        })

        return defer.promise
    }

    const writeFile = (file, data) => {
        let defer = Q.defer();
        console.log('El archivo se ha leído exitosamente');
        fs.writeFile(file, data, (err) =>{
            return (err) ? defer.reject(new Error('El archivo no se pudo copiar.')) : defer.resolve('El archivo se ha copiado con exito.');
        });

        return defer.promise
    }

/*
Si existe.
    Abrelo.
    Léelo.
    avisa que se copio.
    Maneja errores.
*/

existFile(file)
    .then(() => readFile(file))
    .then((dataPromise) => writeFile(newFile, dataPromise))
    .then((dataPromise) => console.log(dataPromise))
    .fail((err) => console.log(err.message));