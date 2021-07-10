const express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'),
    cookieSesion = require('cookie-session');

app
    .use(cookieParser())
    .use(cookieSesion({secret: "secreto"}))
    .get('/', (req, res) => {
        req.session.visitas || (req.session.visitas = 0);
        let numVisitas = req.session.visitas++;
        res.end(`
        <h1>
            Me has visitado en ExpressJS ${numVisitas} veces
        </h1>`);
    })
    .listen(3000);

console.log('Starting Express at port 3000');