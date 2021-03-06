/** 
 * @author    Tesselina Spaeth <tesselina.spaeth@hs-augsburg.de>
 * @copyright 2017
 * @license   CC-BY-NC-SA-4.0
 * Abgeänderte Version on Wolfgang Kowarschick <kowa@hs-augsburg.de>
 */


define
  ([],
  function () {
    "use strict";

    /**
     * @param my_window The window object of the app.
     * @param canvas The canvas where the app is to be displayed.
     * @param views  An array of objects to be displayed.
     */
    function ViewLoop(my_window, canvas, views) {
      var context = canvas.getContext("2d");
      var drawTopBar = this.drawTopBar;

      this.v_window = my_window;

      this.m_update_view = function m_update_view() {
        // clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        for (var k in views) {
          if (views[k].draw != null) {
            views[k].draw(context);
          }
        }
        my_window.requestAnimationFrame(m_update_view);
      };

    }

    ViewLoop.prototype =
      {
        start: function () {
          if (this.v_timer == null)
          { this.v_timer = this.v_window.requestAnimationFrame(this.m_update_view); }
        },

        stop: function () {
          if (this.v_timer != null) {
            this.v_window.cancelAnimationFrame(this.v_timer);
            delete this.v_timer;
          }
        }
      };

    return ViewLoop;
  });