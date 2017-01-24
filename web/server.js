var http = require('http');
var fs = require('fs');
var path = require("path");


//res.sendFile(path.join(__dirname + '/../index.html'));
// Loading the index file . html displayed to the client
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        console.log('content??', content);
        res.end(content);
    });
});

// Loading socket.io
var io = require('socket.io').listen(server);

// When a client connects, we note it in the console
io.sockets.on('connection', function (socket) {
    console.log('A client is connected!');
});


server.listen(3000); //, function () {
/*  console.log('Example app listening on port 3000! Yay');
});*/


/*var express = require('express');
var path = require("path");
var app = express();
var board = require('./js/board');

board.listener.on('distanceChange', function (dist) {
  //console.log('on server', dist);
});

app.use(express.static('node_modules/jquery'));
app.use(express.static('web'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

app.get('/', function (req, res) {

  res.render('home', { name: board.listener.dist });
  res.json()
});

app.get('/data.json', function (req, res) {
  res.json({ title: 'Data', 'data': 'blablabla' });

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000! Yay');
});*/



