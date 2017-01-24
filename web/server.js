var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var fs = require('fs');
//var path = require("path");
var board = require('./js/board');
var port = process.env.PORT || 3000;


board.listener.on('distanceChange', function (dist) {
  //console.log('on server', dist);
});

app.use(express.static('node_modules/jquery'));
app.use(express.static('web'));

//res.sendFile(path.join(__dirname + '/../index.html'));
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

// When a client connects, we note it in the console
io.on('connection', function (socket) {
    console.log('A client is connected!');
});

http.listen(port, function(){
    console.log('Example app listening on', port);
});

/*



app.get('/', function (req, res) {
  res.render('home', { name: board.listener.dist });
});
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/data.json', function (req, res) {
  res.json({ title: 'Data', 'data': 'blablabla' });
});
*/



