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
            //range returns true when hand above sensor 
            //and within 5-50 cm
            socket.on('range', function (state) {
                view_ampel.draw(state);
                if (state === false) {
                    m_player.start(m_player.r);
                }
            });
            //dist event is triggered when range is true and 
            //returns the distance of the sensor
            socket.on('dist', function (dist) {
                //radius can be up to 250 therefor the *5.5
                var val = dist*5.5;
                //additional acceleration on higher distance to 
                //increase radius even when range is false
            if(dist >= 40) m_player.ar = -10;
            else if (dist <= 30) m_player.ar = 0;
                m_player.start(val);
            });
        }
        return controlProximity;
    });