/*
    Buffers:
        Es una tira de bytes (datos binarios), similar a un array de enteros.
        Tamaño fijo.
        Manipular datos directamente
            Sockets.
            Streams.
            Implementar protocolos complejos.
            Manipulación de ficheros/imágenes.
            Criptografía.
*/

'use strict';

const buf = new Buffer.alloc(100),
    buf2 = new Buffer.alloc(26);
let str = '\u00bd + \u00bc = \u00be';

buf.write('abcd', 0, 4, 'ascii');
console.log(
    buf,
    buf.toString('ascii'),
    str,
    str.length + 'número de caracteres,',
    Buffer.byteLength(str, 'utf8') + 'bytes'
);


for(let i = 0; i < buf2.length; i++){
    // 97 en ascii es 'a'
    buf2[i] = i + 97;
}
console.log(buf2.toString('ascii'));