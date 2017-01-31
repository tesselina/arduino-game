/** 
 * @author    Tesselina Spaeth <tesselina.spaeth@hs-augsburg.de>
 * @copyright 2017
 * @license   CC-BY-NC-SA-4.0
 */

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
//var path = require("path");

var board = require('./js_server/board');
var port = process.env.PORT || 3000;

app.use(express.static('node_modules/jquery'));
app.use(express.static('web'));

//res.sendFile(path.join(__dirname + '/../index.html'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// When a client connects, we note it in the console
io.on('connection', function (socket) {
  console.log('A client is connected!');

  board.listener.on('distanceChange', function (dist) {
    socket.emit('dist', dist);
  });

  board.listener.on('range', function (state) {
    if(state === false){
      socket.emit('warning', 'Bewege deine Hand über dem Controller.');
    }
    socket.emit('range', state);
  });

});

http.listen(port, function () {
  console.log('Example app listening on', port);
});



