/** 
 * @author    Tesselina Spaeth <tesselina.spaeth@hs-augsburg.de>
 * @copyright 2017
 * @license   CC-BY-NC-SA-4.0
 */

define
    ([],
    function () {
        "use strict";

        function collisionRingPlayer(ring, player, cb) {
            if (player.r >= ring.r-3) {
                // if player hits a ring callback is called
                if (cb) cb();
            }
        }

        return collisionRingPlayer;
    });