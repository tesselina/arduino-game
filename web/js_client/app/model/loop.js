/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2016
 * @license   CC-BY-NC-SA-4.0
 */

define
  ([],
  function () {
    "use strict";

    /**
     * @param all_collisions Function to detect and handle collisions.
     * @param p_f         The update frequency.
     * @param models    The models of the app.
     */
    function ModelLoop(all_collisions, p_f, models) {
      var l_seconds = 1 / p_f;
      this.v_milliseconds = 1000 * l_seconds;

      this.update_models = function () {
          // move around all movable objects
          for (var i = 0, n = models.length; i < n; i++)
          { models[i].move(l_seconds); }
          //console.log('loop border: ', models[0].visible, 'player: ', models[1].visible);

          // detect and handle collision (a posteriori)
          all_collisions();
        };

      this.stop_models = function () {
          // move around all movable objects
          for (var i = 0, n = models.length; i < n; i++)
          { models[i].stop(); }
        };
    }

    ModelLoop.prototype =
      {
        start: function () {
          if (this.v_timer == null)
          { this.v_timer = setInterval(this.update_models, this.v_milliseconds) }
        },

        stop: function () {
          if (this.v_timer != null) {
            clearInterval(this.v_timer);
            delete this.v_timer;
          }
          this.stop_models();
        }
      };

    return ModelLoop;
  });