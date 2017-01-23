/**
 * @author    AUTHOR <AUTHOR@hs-augsburg.de>
 * @copyright 2016
 * @license   CC-BY-NC-SA-4.0
 */

/*requirejs.config
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
( ['loadjson!json/init.json', 'app/init'],
  function(initJSON, init)
  {
    init(window, initJSON);
  }
);*/

/** @namespace main */
var
main =
{
  /**
   * Welcomes the user of the web app by displaying a welcome message
   * that includes his name. The name is fetched from a text input field.
   */
  sayHello:
    function()
    {
      document.getElementById('text_hello').innerHTML =
        'Hello, ' + document.getElementById("input_name").value + '!';
       document.getElementById('section_form').classList.add('hidden');
      document.getElementById('section_welcome').classList.remove('hidden');
    },
 
  /**
   * An keyboard event observer. It tests whether the enter key has been pressed.
   * If so, the sayHello method is activated. Default reactions of the browser are
   * disabled.
   * @param {KeyboardEvent} p_event - A standard JavaScript keyboard event object
   *   (https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
   */
  sayHelloOnEnter:
    function(p_event)
    {
      if (p_event.code === 'Enter' || p_event.keyCode === 13)
      {
        p_event.preventDefault();
        p_event.stopPropagation();
        main.sayHello();
      }
    },
 
  /**
   * Initializes the web app.
   * Is to be called when the web app has been loaded completely.
   */
  init:
    function()
    {
      document.getElementById('button_submit')
              .addEventListener('click', main.sayHello);
 
      window.addEventListener('keydown', main.sayHelloOnEnter);
    }
};
 
// Call main.init, when you are ready with loading.
window.addEventListener('load', main.init);