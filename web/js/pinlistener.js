var util = require('util');
var EventEmitter = require('events').EventEmitter;

function PinListener(ms) {
    var dist = this.distance;

    EventEmitter.call(this);
}

util.inherits(PinListener, EventEmitter);


PinListener.prototype.distanceChange = function (dist) {  
  this.emit('distanceChange', dist);
};

module.exports = PinListener;