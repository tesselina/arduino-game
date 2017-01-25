define
    ([],
    function () {
        "use strict";

        /**
         * @class
         * @classdesc Balls are represented by circles. Every ball has a position and a velocity.
         *            Its new position, which depends on its old position, its velocity and
         *            the frame rate of the game, can be computed. An it can be drawn on the 2d context
         *            of a canvas element.
         *
         * @param json A JSON object containing all data initialization information.
         */
        function ModelPlayer(json, canvas) {
            this.r_start = json.r.start;
            this.x = canvas.width / 2;
            this.y = (canvas.height - canvas.topbar) / 2 + canvas.topbar;

            this.reset(); // initializes further attributes
        }

        ModelPlayer.prototype =
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
                function (distance) {
                    // react only if the ball is not already moving
                    if (this.visible === true) {
                        this.vr = distance - this.r;
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
                    this.r += this.vr * p_seconds;
                }
            };

        return ModelPlayer;
    });