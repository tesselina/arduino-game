/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2016
 * @license   CC-BY-NC-SA-4.0
 */

define
    ([],
    function () {
        "use strict";

        /**
         * @class
         *
         * @param model The model of the border, player or ring object.
         * @param json  A JSON object containing all view initialization information.
         */
        function ViewCircle(model, json) {
            this.model = model;

            if (json.color) this.color = json.color;
            this.borderWidth = json.borderWidth || 0;
            this.borderColor = json.borderColor || '#000';
            if(json.borderColor instanceof Array){
                var colors = json.borderColor;
                this.borderColor = colors[Math.floor(Math.random()*colors.length)];;
            }
            console.log('all circles',this.borderColor);
        }

        ViewCircle.prototype =
            {
                /**
                 * Draws the ball at its current position onto a 2d context.
                 *
                 * @param context The 2d context where the ball is to be drawn.
                 */
                draw: function (context) {
                    if (this.model.visible === true) {
                        context.beginPath();
                        context.arc(this.model.x, this.model.y, this.model.r, 0, 2 * Math.PI);
                        context.lineWidth = this.borderWidth;
                        context.fillStyle = this.color;
                        if (this.borderWidth > 0) {
                            context.lineWidth = this.borderWidth;
                            context.strokeStyle = this.borderColor;
                            context.stroke(); // Draw the border.
                            console.log('ring draw', this.model.r);
                        }
                        context.fill();     // Fill the inner area of the ball with its color.
                    }
                }
            };

        return ViewCircle;
    });