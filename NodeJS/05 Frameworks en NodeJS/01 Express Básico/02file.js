const express = require('express'),
    app = express();

app
    .get('/', (req, res) => {
        res.sendFile(`${__dirname}/assets/index.html`);
    })
    .listen(3000);

console.log('Starting Express at port 3000');