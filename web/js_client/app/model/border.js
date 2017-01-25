define
    ([],
    function () {
        "use strict";

        /**
         * @class
         * @classdesc 
         *
         * @param json A JSON object containing all data initialization information.
         */
        function ModelBorder(json, canvas) {
            this.r_start = json.r.start;
            this.vr_start = json.vr;
            this.x = canvas.width / 2;
            this.y = (canvas.height - canvas.topbar) / 2 + canvas.topbar;

            this.reset(); // initializes further attributes
        }

        ModelBorder.prototype =
            {
                /**
                 *  Resets, i.e. reinitializes the ball.
                 */
                reset:
                function () {
                    this.stop(); // By default, the ball does not move around.
                    this.hide(); // By default, the ball is invisible.

                    this.r = this.r_start;
                },

                /**
                 *  Makes the ball visible.
                 */
                show:
                function ()
                { this.visible = true; },

                /**
                 *  Makes the ball invisible.
                 */
                hide:
                function ()
                { this.visible = false; },
                /**
                 *  Stops the ball moving around an makes ist invisible.
                 */
                stop:
                function () {
                    this.vr = 0;
                },

                /**
                 *  Starts the ball moving around.
                 */
                start:
                function () {
                    // react only if the ball is not already moving
                    if (this.visible === true && this.vx === 0) {
                        this.vr = this.vr_start;
                    }
                },

                /**
                  * Moves the ball to a new position. The new position depends on its
                  * current position, its velocity and the model update rate.
                  *
                  * @param p_seconds  Fraction of seconds since the last update.
                  */
                move:
                function (p_seconds) {
                    //this.r += this.vr * p_seconds;
                }
            };

        return ModelBorder;
    });