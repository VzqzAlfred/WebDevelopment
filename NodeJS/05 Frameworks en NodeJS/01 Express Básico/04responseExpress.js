const express = require('express'),
    app = express();

app
    .get('/', (req, res) => {
        res.send('<h1>Empezando a utilizar express :D</h1>');
    })
    .get('/json', (req, res) => {
        res.json({
            name: "Billy",
            age: 35,
            twitter: "@AlfredVzqzS"
        })
    })
    .listen(3000);

console.log('Starting Express at port 3000');