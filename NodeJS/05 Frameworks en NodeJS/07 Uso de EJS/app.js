const express = require('express'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    routes = require('./routes/index'),
    faviconURL = `${__dirname}/public/img/node-js.svg`,
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = (process.env.PORT || 3000),
    app = express();

// console.log(`${__dirname}/public/img/node-js.svg`);

app
    // Configurando app
    .set('views', viewDir)
    //.set('view engine', 'pug')
    .set('view engine', 'ejs')
    .set('port', port)
    // Ejecutando middlewares
    .use(favicon(faviconURL))
    .use(morgan('dev'))
    .use(publicDir)
    // Ejecuto el middleware Enrutador
    .use('/', routes)


module.exports = app