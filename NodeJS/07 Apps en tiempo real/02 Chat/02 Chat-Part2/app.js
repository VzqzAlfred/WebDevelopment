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

io.on('connection', socket => {
    socket.broadcast.emit('newUser', { message : 'Un nuevo usuario ha ingresado el chat :)'});

    socket.on('newMessage', message => {
        io.emit('userSays', message)
    })
})

io.on('disconnect', () => {
    
    console.log(`Un nuevo usuario ha dejado al chat :(`);
    socket.broadcast.emit('byeByeUser', { message : 'Un nuevo usuario ha dejado el chat :('});
});