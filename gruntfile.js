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
            'web/js/main.js': ['src/js/main.js']
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
          tasks: ['uglify']
        },
        web:
        {
          files: ['web/**/*'],
          options: {
            livereload: true,
            spawn: false
          }
        }
      }

    });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin', 'watch']);
};