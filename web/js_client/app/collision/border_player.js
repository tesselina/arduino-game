/** 
 * @author    Tesselina Spaeth <tesselina.spaeth@hs-augsburg.de>
 * @copyright 2017
 * @license   CC-BY-NC-SA-4.0
 */

define
    ([],
    function () {
        "use strict";

        function collisionBorderPlayer(border, player, cb) {

            //if player hits the border stop callback is called and game is over
            if (player.r >= border.r) {
                if (cb)
                    cb();
            }
        }

        return collisionBorderPlayer;
    }
    );