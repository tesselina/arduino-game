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

            this.color = json.color;
            this.borderWidth = json.borderWidth || 0;
            this.borderColor = json.borderColor || '#000';
            
            if (json.borderColor instanceof Array) {
                var colors = this.borderColors = json.borderColor;
                this.borderColor = colors[Math.floor(Math.random() * colors.length)];
            }
        }

        ViewCircle.prototype =
            {
                /**
                 * Draws the ball at its current position onto a 2d context.
                 *
                 * @param context The 2d context where the ball is to be drawn.
                 */
                draw: function (context) {
                    var model = this.model;
                    if (this.model.model != null) {
                        var model = this.model.model;
                    }

                    if (model.visible === true) {
                        context.beginPath();
                        context.arc(model.x, model.y, model.r, 0, 2 * Math.PI);
                        context.lineWidth = this.borderWidth;
                        context.fillStyle = this.color;
                        if (this.borderWidth > 0) {
                            context.lineWidth = this.borderWidth;
                            context.strokeStyle = this.borderColor;
                            context.stroke(); // Draw the border.
                        }
                        context.fill();     // Fill the inner area of the ball with its color.
                    }
                },
                changeBorderColor: function () {
                    if (this.borderColors) {
                        console.log('change ring color');
                        var colors = this.borderColors;
                        this.borderColor = colors[Math.floor(Math.random() * colors.length)];
                    }
                }
            };

        return ViewCircle;
    });