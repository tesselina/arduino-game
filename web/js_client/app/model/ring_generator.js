/** 
 * @author    Tesselina Spaeth <tesselina.spaeth@hs-augsburg.de>
 * @copyright 2017
 * @license   CC-BY-NC-SA-4.0
 */

define
    (['model/ring'],
    function (ModelRing) {
        function RingGenerator(json) {
            this.init = json;
            this.constructor = ModelRing;

            this.reset();
        }

        RingGenerator.prototype =
            {
                set: function(canvas, player){
                    this.count++;
                    this.model = new this.constructor(this.init, canvas, player.r);
                    return this.model;
                },
                toggle: function (canvas, player) {
                    console.log('ring on toggle', player.r);
                    this.count++;
                    var self = this;
                    this.model = {};
                    setTimeout(function () {
                        console.log('ring on timeout', player.r);
                        self.model = new self.constructor(self.init, canvas, player.r);
                    }, 1000);
                    return this.model;
                },
                reset: function () {
                    this.count = 0;
                    this.model = {};
                }
            };

        return RingGenerator; // Returns the object/function defined above.
    });