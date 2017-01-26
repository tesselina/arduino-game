define
    (['wk/util/some'],
    function (some) {
        "use strict";

        /**
         * @class
         * @classdesc 
         *
         * @param json A JSON object containing all data initialization information.
         */
        function ModelRing(json, canvas, player_radius) {
            var range = json.r;
            range.min = player_radius + 10;

            this.x = canvas.width / 2;
            this.y = (canvas.height - canvas.topbar) / 2 + canvas.topbar;
            this.r = some(range);
            this.show();

            console.log('model ring called', this);
        }

        ModelRing.prototype =
            {
                /**
                 *  Makes the ring visible.
                 */
                show:
                function ()
                { this.visible = true; },

                /**
                 *  Makes the ring invisible.
                 */
                hide:
                function ()
                { this.visible = false; },
            };

        return ModelRing;
    });