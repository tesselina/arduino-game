


/** @module app/module */
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
                var val = dist*5.5;
            if(dist >= 40) val= dist*6;
                m_player.start(val);
            });
        }

        return controlProximity; // Returns the object/function defined above.
    });