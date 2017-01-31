/** 
 * @author    Tesselina Spaeth <tesselina.spaeth@hs-augsburg.de>
 * @copyright 2017
 * @license   CC-BY-NC-SA-4.0
 */

define
    ([],
    function () {
        "use strict";

        function controlProximity(m_player, view_ampel) {
            socket.on('range', function (state) {
                view_ampel.draw(state);
                if (state === false) {
                    m_player.start(m_player.r);
                }
            });
            socket.on('dist', function (dist) {
                console.log('dist', dist);
                var val = dist*5.5;
            if(dist >= 40) m_player.ar = -10;
            else if (dist <= 30) m_player.ar = 0;
                m_player.start(val);
            });
        }

        return controlProximity; // Returns the object/function defined above.
    });