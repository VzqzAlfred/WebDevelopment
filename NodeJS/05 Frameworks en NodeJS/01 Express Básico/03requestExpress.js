const express = require('express'),
    app = express();

app
    .get('/', (req, res) => {
        res.end('<h1>Express :D</h1>');
    })
    .get('/user/:id-:name-:age', (req, res) => {
        res.end(
        `<h1>
        ${req.params.name}, Bienvenido a Express! :D tu ID es: <b>${req.params.id}</b> y tienes ${req.params.age} años. 
        </h1>`);
    })
    // http://localhost:3000/search?s=perros
    .get('/search', (req, res) => {
        res.end(`
            <h1>Bienvenido a Express, los resultados de la búsqueda son: <mark>${req.query.s}</mark>
            
            </h1>
        `);
    })

    .listen(3000);

console.log('Starting Express at port 3000');