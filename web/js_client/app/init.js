/**
 * @author    Tesselina Späth <tesselina.spaeth@hs-augsburg.de>
 * @copyright 2017
 * @license   CC-BY-NC-SA-4.0
 */


//var v_timer = setInterval(print, 200);


socket.on('warning', function (message) {
  //console.log('Serverwarnung: ' + message);
});

socket.on('dist', function (dist) {
  //console.log('client has dist', dist);
});

socket.on('outOfRange', function (state) {
  //console.log('controlle ist out of range', state);
}); 

/*<!-- var name = !{JSON.stringify(name)}; -->
*/


/** @module app/init */
define
([],
 function(){"use strict";

  //var module =  ...;
  function init(window, json){
      console.log('init is called', json);
  }
  return init; // Returns the object/function defined above.
});