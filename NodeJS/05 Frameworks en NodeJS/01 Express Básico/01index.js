const express = require('express'),
    app = express();

app
    .get('/', (req, res) => {
        res.end('<h1>Empezando a utilizar express :D</h1>');
    })
    .listen(3000);

console.log('Starting Express at port 3000');