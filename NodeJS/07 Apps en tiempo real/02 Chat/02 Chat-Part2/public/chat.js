// ((d, io, $) => {
    const socket = io(),
        d = document,
        $ = jQuery;

    $('#chat-form').on('submit', function(e){
        e.preventDefault();
        
        socket.emit('newMessage', $('#message-text').val())
        $('#message-text').val(null)
        return false
    })

    socket.on('newUser', newUser => {
        alert(newUser.message)
    });

    socket.on('userSays', function(userSays){
        $('#chat').append(`<li>${userSays}</li>`)
    });

    socket.on('byeByeUser', byeByeUser => {
        alert(byeByeUser.message)
    });

// })(document, io, jQuery)