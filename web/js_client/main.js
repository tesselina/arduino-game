/**
 * @author    Tesselina Späth <tesselina.spaeth@hs-augsburg.de>
 * @copyright 2017
 * @license   CC-BY-NC-SA-4.0
 */

requirejs.config
({
  baseUrl: 'js_client', // By default load any modules from directory js
  paths :
  {
    app:       'app',

    model:     'app/model',
    view:      'app/view',
    control:   'app/control',
    logic:     'app/logic',
    collision: 'app/collision',

    loadjson:  'lib/require/json',
    text:      'lib/require/text',
    json:      '../json',

    wk:        'lib/wk'
  }
});

requirejs
( ['loadjson!json/init.json', 'app/init'],
  function(initJSON, init)
  {
    init(window, initJSON);
  }
);