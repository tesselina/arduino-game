/** 
 * @author    Tesselina Spaeth <tesselina.spaeth@hs-augsburg.de>
 * @copyright 2017
 * @license   CC-BY-NC-SA-4.0
 * Abgeänderte Version on Wolfgang Kowarschick <kowa@hs-augsburg.de>
 */

define
([],
 function()
 {"use strict";

  function ModelText(p_init)
  {
    this.template = p_init.template;
    this.value    = p_init.value;

    this.visible  = true;
  }

  ModelText.prototype =
  {
    // read only attribute
    get text()
    { return (this.value == null)
             ? ''
             : (this.template == null)
               ? this.value.toString()
               : this.template.replace('$1', this.value);
    }
  };

  return ModelText;
});