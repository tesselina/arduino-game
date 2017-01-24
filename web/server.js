
//res.sendFile(path.join(__dirname + '/../index.html'));

var express = require('express');
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
  //board.listener.on('distanceChange', function (dist) {
    res.json({ title: 'Data', 'data': board.listener.dist });
    //console.log('res.json', dist);
  //});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000! Yay');
});


//res.sendFile(path.join(__dirname + '/../index.html'));