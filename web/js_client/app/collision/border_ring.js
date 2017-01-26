define
    ([],
    function () {
        "use strict";

        /**
         * A ball can collide with the „walls“ of the stage. In this case, it is mirrored.
         * The direction of the movement (i.e. the velocity) is changed and if it
         * penetrates the wall, it is placed on the correct position within the stage.
         *
         * @param border  {ModelBorder}
         * @param player  {ModelPlayer}
         * @param cb       A callback function that is called
         *                 when the ball leaves the stage
         */

        function collisionBorderRing(border, ring) {

            //if player hits the border stop callback is called and game is over
            
            if (border.r <= 150) {
                border.vr = -border.vr;
            }
            if (border.r >= border.r_start) {
                border.vr = -border.vr;
                border.r = border.r_start;
            }
        }

        return collisionBorderRing;
    }
    );