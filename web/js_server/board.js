var five = require("johnny-five");
//var temporal = require("temporal");
var PinListener = require('./pinlistener');

var listener = new PinListener();
var board = new five.Board();
var controller = "2Y0A21";

board.on("ready", function () {
    var proximity = new five.Proximity({
        controller: controller,
        pin: "A0"
    });

    proximity.on("data", function () {
        if (this.cm <= 50 && this.cm >= 5) {
            listener.range(true);
            listener.distanceChange(this.cm);
        } else {
            listener.range(false);
        }
    });

    /*   
    /** My first attempt to calculate the distance by using the value and the formular given on the product website*/
    /*
     var analog = new five.Pin("A0");
        temporal.loop(30, function (loop) {
            // Query the analog pin for its current state.
            analog.query(function (state) {
                var voltToCM = (3027.4 / state.value) ^ 1.2134;
                console.log("MEINcm: ", voltToCM);
                //listener.distanceChange(voltToCM);
            });
        });*/
});


module.exports.listener = listener;



/* 
        var strobe = new five.Pin(13);
temporal.loop(60, function (loop) {
            strobe[loop.called % 2 === 0 ? "high" : "low"]();*/