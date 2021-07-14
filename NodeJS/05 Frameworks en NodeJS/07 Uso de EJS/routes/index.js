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


const ejs = (req, res, next) => {

    let locals = {
        title: '👉🏼 EJS',
        link : 'https://ejs.co/',
		description : `What is the "E" for? "Embedded?" Could be. How about "Effective," "Elegant," or just "Easy"? EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.`,
        seasons : [
            ['Spring', ['April', 'May', 'June']],
            ['Summer', ['July', 'Agost', 'September']],
            ['Autumn/Fall', ['October', 'November', 'December']],
            ['Winter', ['January', 'February', 'March']]
        ] 
    }   
    
    res.render('index', locals);
}

router
    .get('/', (req, res) => {
        res.end('<h1>Setting app on Express</h1>')
    })
    .get('/pug', pug)
    .get('/ejs', ejs)

module.exports = router;