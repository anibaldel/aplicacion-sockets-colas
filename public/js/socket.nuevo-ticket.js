// Comando para establecer la conexion

var label = $('#lblNuevoTicket');

var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {

    console.log('Desconectado del servidor');

});

socket.on('estadoActual', function(resp) {

    label.text(resp.actual);

});

$('button').on('click', function() {
    socket.emit('SiguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    })
})