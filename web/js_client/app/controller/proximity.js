


/** @module app/module */
define
    ([],
    function () {
        "use strict";

        //var module =  ...;
        function controlProximity(m_player) {
/*            var range;
            socket.on('range', function (state) {
                range = state;
            });*/
            socket.on('dist', function (dist) {
                m_player.start(dist);
            });
        }

        return controlProximity; // Returns the object/function defined above.
    });