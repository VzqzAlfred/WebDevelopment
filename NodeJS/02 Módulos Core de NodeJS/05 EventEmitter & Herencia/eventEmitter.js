'use strict';

let EventEmitter = require('events').EventEmitter,
    pub = new EventEmitter();


pub
    .on('myevent', message => {
        console.log(message);
    })
    .once('myevent', message => {
        console.log('Se emite la primera vez: '+message);
    })
    .emit('myevent', 'Hola, soy un emisor de eventos');

pub.emit('myevent', 'Volviendo a emitir');
pub.removeAllListeners('myevent');
pub.emit('Volviendo a emitir por tercera vez.');