const express = require('express'),
    app = express(),
    http = require('http').createServer(app), 
    io = require('socket.io')(http),
    port = process.env.PORT || 3000,
    publicDir = express.static(`${__dirname}/public`);

app
    .use(publicDir)
    .get('/', (req, res) => {
        res.sendFile(`${publicDir}/index.html`)
    })

http.listen(port, () => {
    console.log('Server Express and Socket.IO at port http://localhost:%d', port);
});