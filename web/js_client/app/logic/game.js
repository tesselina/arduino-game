/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2016
 * @license   CC-BY-NC-SA-4.0
 */

define
    (['collision/border_player', 'collision/ring_player',
        'collision/border_ring', 'model/loop'
    ],
    function (collisionBorderPlayer, collisionRingPlayer, collisionBorderRing, ModelLoop) {
        "use strict";

        function game(json, models, view_ring) {

            var stage = models.stage,
                border = models.border,
                player = models.player,
                ring_generator = models.ring_generator,
                score = models.score,
                button = models.button,
                info = models.info,

                models_movable = [],
                model_loop = new ModelLoop(all_collisions, json.fps, models_movable);

            // Store all model objects that have a move method within the array models_movable.
            for (var k in models) { //noinspection JSUnfilteredForInLoop
                if (models[k].move != null) { //noinspection JSUnfilteredForInLoop
                    models_movable.push(models[k]);
                }
            }

            // Stop the game and display a welcome message.
            stop();
            info.value = json.welcome;

            // Collision detection and handling.
            function all_collisions() {
                collisionBorderRing(border, ring_generator.model);
                collisionBorderPlayer(border, player, stop);
                collisionRingPlayer(ring_generator.model, player, function () {
                    score.value++;
                    ring_generator.toggle(stage, player);
                    view_ring.changeBorderColor();
                });
            }

            // Stop the game.
            function stop() {
                model_loop.stop();
                border.hide();
                player.hide();

                button.label = json.start;
                button.onClick = start;

                info.value = json.gameover;
            }

            // Start the game.
            function start() {
                score.value = 0;
                info.value = '';
                border.reset();
                player.reset();

                ring_generator.set(stage, player);

                button.label = json.stop;
                button.onClick = stop;

                player.show();
                border.show();
                border.start();
                model_loop.start();
            }
        }

        return game;
    });