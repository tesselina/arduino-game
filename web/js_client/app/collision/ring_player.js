define
    ([],
    function () {
        "use strict";

        /**
         * A ball can collide with the „paddle“ of the canvas. In case, it is mirrored.
         *
         * @param p_ball    {ModelBall}.
         * @param p_paddle  {ModelPaddle}.
         * @param cb    A callback function that is called when
         *                  the paddle hits the ball.
         */
        function collisionRingPlayer(ring, player, cb) {
            if (player.r >= ring.r-5) {
                // if player hits a ring callback is called
                if (cb) cb();
            }
        }

        return collisionRingPlayer;
    });