
define
    ([],
    function () {
        "use strict";

        /**
         * @class
         *
         * @param p_model {ModelBall} The model of the ball object.
         * @param json  A JSON object containing all view initialization information.
         * @param p_document The HTML document of the web app.
         */
        function ViewAmpel(json, p_document) {
            console.log('ampel view');
            this.element = p_document.getElementById(json.element);

            this.red = json.red;
            this.green = json.green;
            this.size = json.size;

            // Define a local canvas containing the view of the ball.
            var l_canvas = this.v_canvas = p_document.createElement("canvas");
            this.radius = this.size / 2;

            this.context = l_canvas.getContext("2d");

            l_canvas.width = this.size;
            l_canvas.height = this.size;

            this.element.appendChild(l_canvas);

            // Fill the inner area of the ball with its color.
        }

        ViewAmpel.prototype =
            {
                /**
                 * Draws the ball at its current position onto a 2d context.
                 *
                 * @param p_context The 2d context where the ball is to be drawn.
                 */
                draw:
                function (range) {
                    this.context.beginPath();
                    this.context.arc(this.radius, this.radius, this.radius, 0, 2 * Math.PI);
                    this.context.lineWidth = 0;
                    var color = this.red;
                    if(range ===true) color = this.green;
                    this.context.fillStyle = color;
  
                    this.context.fill();
                }
            };

        return ViewAmpel;
    });