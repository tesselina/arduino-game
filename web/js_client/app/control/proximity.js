


/** @module app/module */
define
    ([],
    function () {
        "use strict";

        function controlProximity(m_player) {
            socket.on('range', function (state) {
                if (state === false) {
                    m_player.start(m_player.r);
                }
            });
            socket.on('dist', function (dist) {
                m_player.start(dist*5.5);
            });
        }

        return controlProximity; // Returns the object/function defined above.
    });