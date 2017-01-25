var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var fs = require('fs');
//var path = require("path");
var board = require('./js/board');
var port = process.env.PORT || 3000;

app.use(express.static('node_modules/jquery'));
app.use(express.static('web'));

//res.sendFile(path.join(__dirname + '/../index.html'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// When a client connects, we note it in the console
io.on('connection', function (socket) {
  socket.emit('message', 'You are connected!');
  console.log('A client is connected!');

  board.listener.on('distanceChange', function (dist) {
    console.log('server distance change', dist, this);
    //socket.emit('dist', dist);
  });

  board.listener.on('range', function (state) {
    console.log('server out of range', state, this);
    //socket.emit('outOfRange', false);
  });

});

http.listen(port, function () {
  console.log('Example app listening on', port);
});



