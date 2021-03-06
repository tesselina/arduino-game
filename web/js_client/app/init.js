/** 
 * @author    Tesselina Spaeth <tesselina.spaeth@hs-augsburg.de>
 * @copyright 2017
 * @license   CC-BY-NC-SA-4.0
 */

/*socket.on('warning', function (message) {
  //console.log('Serverwarnung: ' + message);
});*/
/*<!-- var name = !{JSON.stringify(name)}; -->
*/

define
  (['model/text', 'view/text',
    'model/button', 'view/button',
    'model/border', 'model/player',
    'model/ring_generator',
    'view/circle', 'view/loop',
    'view/ampel',
    'control/proximity',
    'logic/game'
  ],
  function (
    ModelText, ViewText,
    ModelButton, ViewButton,
    ModelBorder, ModelPlayer,
    RingGenerator,
    ViewCircle, ViewLoop,
    ViewAmpel,
    controlProximity,
    game
  ) {
    /**
    * Creates and initializes the main objects of the app
    *
    * @param window The browser window that contains the HTML document to be initialized.
    * @param json   The initialization info.
    */

    function init(my_window, json) {
      var canvas_info = json.canvas,
        canvas = my_window.document.getElementById(canvas_info.element),

        model_border = new ModelBorder(json.model.border, canvas_info),
        view_border = new ViewCircle(model_border, json.view.border),

        model_player = new ModelPlayer(json.model.player, canvas_info),
        view_player = new ViewCircle(model_player, json.view.player),

        ring_generator = new RingGenerator(json.model.ring),
        view_ring = new ViewCircle(ring_generator, json.view.ring),

        model_score = new ModelText(json.model.score),
        view_score = new ViewText(model_score, json.view.score, my_window.document),

        model_button = new ModelButton(json.model.game_button),
        view_button = new ViewButton(model_button, json.view.game_button, my_window.document),

        model_info = new ModelText(json.model.info),
        view_info = new ViewText(model_info, json.view.info, my_window.document),

        view_ampel = new ViewAmpel(json.view.ampel, my_window.document),

        models = {
          stage: canvas_info,
          border: model_border,
          player: model_player,
          ring_generator: ring_generator,
          score: model_score,
          button: model_button,
          info: model_info,
        },

        views = [view_border, view_ring, view_player, view_score, view_button, view_info];

      canvas.width = canvas_info.width;
      canvas.height = canvas_info.height;

      console.log('views before', views[1]);

      game(json.game, models, view_ring);
      new ViewLoop(my_window, canvas, views).start();
      controlProximity(model_player, view_ampel);
    }
    return init;
  });