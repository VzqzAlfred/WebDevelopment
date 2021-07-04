'use strict';

console.log('Class two with Node JS :D');

// 'global' es como window en JS
console.log(global);
console.log(process);

setInterval(() => {
    console.log('Ejecutando un set interval cada 1s :)');
}, 1000);