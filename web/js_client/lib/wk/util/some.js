/**
 * @Wolfgang Kowarschick    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2016
 * @license   CC-BY-NC-SA-4.0
 */

define
([],
 function()
 {"use strict";

  /**
   *  @method
   *  @name some
   *
   *  @param {null|Number|String|Array|Object} p_json
   *         If <code>p_json</code> is an object an contains
   *         the attribute <code>@some</code> it is treated
   *         specially.
   *
   *         If <code>p_json</code> is an object an contains
   *         the attribute <code>@copy</code> it is treated
   *         specially.
   *  @param {Object=} p_copy = null
   *         An optional object that may contain data which cannot be
   *         stored in json files such as functions.
   *
   *  @returns {null|Number|String|Array|Object}
   *           Some value of the values defined by <code>p_json</code>.
   */
  function some(p_json, p_copy)
  {
    if (p_json instanceof Array)
    {
      var l_result = [];
      for (var i = 0, n = p_json.length; i < n; i++)
      { l_result.push(some(p_json[i], p_copy));}

      return l_result;
    }

    if (p_json instanceof Object)
    {
      var l_values = p_json["@some"];
      if (l_values != null)
      {
        if (l_values instanceof Array)
          return some(l_values[Math.floor(Math.random()* l_values.length)], p_copy);

        var l_min  = p_json.min,
            l_max  = p_json.max,
            l_type = l_values.toLowerCase().substring(0,2);

        if (l_type === 'int')
        {
          l_min = Math.round(l_min || -Number.MAX_SAFE_INTEGER || -9007199254740991);
          l_max = Math.round(l_max ||  Number.MAX_SAFE_INTEGER ||  9007199254740991);
          return (l_min === l_max)
                 ? l_min
                 : Math.floor(l_min + Math.random()*(l_max - l_min + 1))
                 ;
        }

        l_min = l_min || -Number.MAX_VALUE;
        l_max = l_max ||  Number.MAX_VALUE;

        return (l_min === l_max)
               ? l_min
               : l_min + Math.random() * (l_max - l_min)
               ;
      }

      var l_attr = p_json["@copy"];
      if (p_copy != null && l_attr)
      { return p_object[l_attr]; }

      l_result = {};
      for (var k in p_json)if (p_json.hasOwnProperty(k))
      { l_result[k] = some(p_json[k], p_copy);}
      return l_result;
    }

    return p_json; // default
  }

  return some;
});
