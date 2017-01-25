
/** @module */
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
                toggle: function (canvas, player_radius) {
                    if (this.model) {
                        delete this['model'];
                    }
                    this.model = new this.constructor(this.init, canvas, player_radius);
                    this.count++;
                    return this.model;
                },
                reset: function () {
                    this.count = 0;
                    this.model = {};
                }
            };

        return RingGenerator; // Returns the object/function defined above.
    });