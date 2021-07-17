# WEBSOCKETS

Es es protocolo de comunicación.

* Full-duplex, (cliente-servidor).
* Una sola conexión permanente.
* Stream de mensaje.
* Contenido en tiempo real.
* El cliente puede enviar y recibir datos en tiempo real.
* Orientado a `eventos` _(mensajes)._
* Siempre conectado.

## ¿Para que sirven?
* Actividades colaborativas.
* Juegos multijugador.
* Enviar datos.


# SOCKETS.IO

API: https://socket.io/docs/v4/index.html

**Los sockets emiten eventos.**
* Un evento = un _"mensaje"._
* Se pueden pasar parámetros.
* `socket.on(mensaje, callback)`
* `socket.emit(mensaje, [param1, param2, ...])`


## Eventos reservados en:

### _Servidor:_
* `io.sockets.on("connection", callback)`
* `socket.on("message", callback)`
* `socket.on("disconnect", callback)`

### _Cliente:_
* `socket.on("connect", callback)`
* `socket.on("disconnect", callback)`
* `socket.on("error", callback)`
* `socket.on("message", callback)`