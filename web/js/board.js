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
                var dist = (6762 / (state.value - 9)) - 4;
                listener.distanceChange(dist); 
                // console.log('A0 pin:', state.value, dist);
            });
        });
    });

module.exports.listener = listener;
/*
var events = [];
  // Pin emits "high" and "low" events, whether it's
  // input or output.
  ["high", "low"].forEach(function(state) {
    strobe.on(state, function() {
      if (events.indexOf(state) === -1) {
        console.log("Event emitted for:", state, "on", this.addr);
        events.push(state);
      }
    });
  });

*/

/*
int redpin = 0;
int led1 =11;
int led2 = 10;
int i, val;

void setup(){
  pinMode(redpin,OUTPUT);
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  Serial.begin(9600);
}
 
void loop(){
  i=analogRead(redpin);
  val=(6762/(i-9))-4;
  Serial.println(val);
  if(val<100){
    digitalWrite(led1, HIGH);
    digitalWrite(led2, LOW);
    delay(300);
    digitalWrite(led1, LOW);
  } else {
    digitalWrite(led1, LOW);
    digitalWrite(led2, HIGH);
    delay(300);
    digitalWrite(led2, LOW);
  }
  delay(300);
}*/