/**
 * @author Tesselina Späth <tesselina.spaeth@hs-augsburg.de>
 * @see http://gruntjs.com/getting-started
 *
 * Created on 2017/01/23.
 */


module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig
    ({
      pkg: grunt.file.readJSON('package.json'),

      cssmin:
      {
        options: /* https://github.com/jakubpawlowicz/clean-css */
        {
          roundingPrecision: -1,
          keepSpecialComments: 1
        },
        minimize:
        {
          files:
          {
            'web/css/main.css': ['src/css/main.css']
          }
        }
      },

      uglify:
      {
        options: /* https://github.com/gruntjs/grunt-contrib-uglify */
        {
          mangle: true,
          preserveComments: function (p_node, p_comment)
          { return /@license/.test(p_comment.value); }
        },
        minimize:
        {
          files: {
            'web/js_client/main.js': ['src/js/main.js'],
            'web/js_client/app/init.js': ['src/js/app/init.js'],
          }
        }
      },

      watch:
      {
        css:
        {
          files: ['src/css/**/*.css'],
          tasks: ['cssmin']
        },
        js:
        {
          files: ['src/js/**/*.js'],
          tasks: ['uglify'] //, 'jshint']
        },
        web:
        {
          files: ['web/**/*'],
          options: {
            livereload: true,
            spawn: false
          }
        }
      },

      jshint:
      {
        all: ['gruntfile.js', 'src/**/*.js'],

        options:
        {
          esversion: 5,
          eqeqeq: true,
          eqnull: true,
          browser: true,
          reporter: require('jshint-stylish')
        }
      }

    });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin']); //, 'jshint'
};