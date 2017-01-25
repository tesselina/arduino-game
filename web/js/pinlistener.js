var util = require('util');
var EventEmitter = require('events').EventEmitter;

function PinListener() {
    //var dist = this.distance;

    EventEmitter.call(this);
    console.log('pinlistener this', this);
}

util.inherits(PinListener, EventEmitter);


PinListener.prototype.distanceChange = function (dist) {
    this.emit('distanceChange', dist);
};

PinListener.prototype.range = function (state){
    this.emit('range', state);
};

module.exports = PinListener;