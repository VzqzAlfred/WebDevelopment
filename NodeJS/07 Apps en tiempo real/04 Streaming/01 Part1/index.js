const app = require('express')(),
    http = require('http').createServer(app),
    io = require('socket.io')(http),
    port = process.env.PORT || 3000,
    publicDir = `${__dirname}/public`;


http.listen(port, () => {
    console.log(`Starting server and Socket.IO at http://localhost:%d`, port);
});

app
    .get('/', (req, res) => {
        res.sendFile(`${publicDir}/client.html`)
    })
    .get('/stream', (req, res) => {
        res.sendFile(`${publicDir}/server.html`)
    })

io.on('connection', socket => {
    
});