var five = require("johnny-five");
var temporal = require("temporal");
var PinListener = require('./pinlistener');

var listener = new PinListener();

var board = new five.Board();

    board.on("ready", function () {
        // Create an Led on pin 13
        //var led = new five.Led(13);
        // Blink every half second
        //led.blink(500);


        var strobe = new five.Pin(13);
        var analog = new five.Pin("A0");


        temporal.loop(60, function (loop) {
            strobe[loop.called % 2 === 0 ? "high" : "low"]();
            // Query the analog pin for its current state.
            analog.query(function (state) {
                var voltToCM = (3027.4/state.value)^ 1.2134
                listener.distanceChange(voltToCM); 
            });
        });
    });

module.exports.listener = listener;
