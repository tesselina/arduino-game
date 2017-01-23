/**
 * @author    AUTHOR <AUTHOR@hs-augsburg.de>
 * @copyright 2016
 * @license   CC-BY-NC-SA-4.0
 */

requirejs.config
({
  baseUrl: 'js', // By default load any modules from directory js
  paths :
  {
    app:      'app',
    loadjson: 'lib/require/json',
    text:     'lib/require/text',
    json:     '../json'
  }
});

requirejs
( ['loadjson!json/init.json', 'app/game'],
  function(initJSON, game)
  {
    game(window, initJSON);
  }
);