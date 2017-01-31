/** 
 * @author    Tesselina Spaeth <tesselina.spaeth@hs-augsburg.de>
 * @copyright 2017
 * @license   CC-BY-NC-SA-4.0
 * Abgeänderte Version on Wolfgang Kowarschick <kowa@hs-augsburg.de>
 */


define
([],
 function()
 { "use strict";

  function ViewText(p_model, json , p_document)
  {
    this.model        = p_model;
    this.element = p_document.getElementById(json.element);
  }

  /**
   * Draws the text at its current position onto a 2d context.
   *
   * @param p_context The 2d context where the text is to be drawn.
   */
  ViewText.prototype.draw =
    function(p_context)
    {
      var l_model = this.model;
        this.element.innerHTML = l_model.text;
    };

  return ViewText;
});