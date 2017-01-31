/** 
 * @author    Tesselina Spaeth <tesselina.spaeth@hs-augsburg.de>
 * @copyright 2017
 * @license   CC-BY-NC-SA-4.0
 */

define
    ([],
    function () {
        "use strict";

        function collisionBorderRing(border, ring) {
            
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