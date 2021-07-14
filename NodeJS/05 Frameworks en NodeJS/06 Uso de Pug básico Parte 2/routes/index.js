const express = require('express'),
    router = express.Router();

const pug = (req, res, next) => {

    let locals = {
        title: '👉🏼 PUG',
        link : 'https://pugjs.org/api/getting-started.html',
		description : 'Pug is a high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers. For bug reports, feature requests and questions, open an issue. For discussion join the chat room.'
    }   

    res.render('index', locals);
}

router
    .get('/', (req, res) => {
        res.end('<h1>Configurando app en Express</h1>')
    })
    .get('/pug', pug)

module.exports = router;