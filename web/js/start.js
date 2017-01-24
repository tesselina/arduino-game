
  //res.sendFile(path.join(__dirname + '/../index.html'));

var express = require('express');
var path = require("path");
var app = express();

app.use(express.static('node_modules/jquery'));
app.use(express.static(path.join(__dirname, 'web')));
app.use(express.static('web'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/../views'));

app.get('/', function(req, res) {  
  
  res.render('home', { name: 'The index page!' })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000! Yay');
});


//res.sendFile(path.join(__dirname + '/../index.html'));