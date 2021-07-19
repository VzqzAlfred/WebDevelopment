const http = require('http').createServer(server),
    fs = require('fs'),
    io = require('socket.io')(http);
let conexions = 0;

function server(req, res){
    fs.readFile('index.html', (err, data) => {
        if(err){
            res.writeHead(500, {'Content-Type' : 'text/html'});
            return res.end('<h1>Error Interno del Servidor.</h1>');
        } else {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            return res.end(data, 'utf-8');
        }
    });
}


http.listen(3000);

console.log(`Server running at http://localhost:3000`);

io.on('connection', socket => {
    socket.emit('hello', { message : 'Hola, estás usando Socket.IO' });

    socket.on('otroEventoInventado', data => {
        console.log(data);
    });

    conexions++;
    console.log(`Conexiones activas: ${conexions}`);

    // socket.emit('connectUsers', {numbers: conexions});
    socket.broadcast.emit('connectUsers', {numbers: conexions});

    socket.on('disconnect', () => {
        conexions--;
        console.log(`Conexiones activas: ${conexions}`);
        socket.broadcast.emit('connectUsers', {numbers: conexions});
    });
});
