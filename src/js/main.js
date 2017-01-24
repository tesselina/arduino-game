/**
 * @author    Tesselina Späth <tesselina.spaeth@hs-augsburg.de>
 * @copyright 2017
 * @license   CC-BY-NC-SA-4.0
 */

/*var http = require('http'),
  fs = require("fs");

var text = fs.readFileSync('./web/index.html', "utf-8"); 
  console.log('before', text);

console.log('this is called');

http.createServer(function (request, response) {
  fs.readFile('./web/index.html', function (err, html) {
    if (err) {
      console.log('something bad');
      return response.end('Oops! Something bad happened.');
    }
    response.writeHeader(200, { "Content-Type": "text/html" });
    response.write(html);
    response.end();
  });
}).listen(8080);
*/

//var Game = require('../../src/js/app/game');

console.log('i love you fucker');
$.get( "/", function( data ) {
  name = data.name;
  console.log('jquery getter', name);
});