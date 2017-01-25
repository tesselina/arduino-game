


/** @module app/module */
define
    ([],
    function () {
        "use strict";

        function controlProximity(m_player) {
            console.log('proximity called');
            socket.on('range', function (state) {
                if (state === false) {
                    //console.log('proxy range false');
                    m_player.start(m_player.r);
                }
            });
            socket.on('dist', function (dist) {
                //console.log('proxy dist changed');
                m_player.start(dist);
            });
        }

        return controlProximity; // Returns the object/function defined above.
    });