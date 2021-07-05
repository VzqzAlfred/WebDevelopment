/*
    Streams:
        'Chorros' información que se transmiten en 'pedazos' (Chunks)
        3 tipos: Lectura / Escritura / Duplex
        Son Instancias de EventEmitter
        Acceso asíncrono
        Es raro crear streams directamente
        Por debajo de muchos mecanismos de NodeJS
            stdin / stout
            request de HTTP.
            Sockets.
            Manupulación de ficheros/imágenes.
*/
'use strict';

const fs = require('fs'),
    readStream = fs.createReadStream('assets/countries.txt'),
    writeStream = fs.createWriteStream('assets/countries_copy.txt');

// readStream.pipe(writeStream);

// readStream.on('data', (chunk) => {
//     console.log(
//         'He leído:',
//         chunk.length,
//         'caracteres:'
//     );
// });

// readStream.on("end", () => {
//     console.log('Terminé de leer el archivo :D');
// })





// De manera más ordenada

readStream.pipe(writeStream);

readStream.on('data', (chunk) => {
        console.log(
            'He leído:',
            chunk.length,
            'caracteres:'
        );
    })
    .on("end", () => {
        console.log('Terminé de leer el archivo :D');
    });