
module.exports = function(grunt) {
  'use strict';

  // Project configuration
  grunt.initConfig({
    // Metadata
    pkg: grunt.file.readJSON('package.json'),

    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
    '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
    '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
    '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
    ' Licensed <%= pkg.license %> */\n',

    // Task configuration
    browserify: {
      client: {
        src: ['index.js'],
        dest: 'dist/moment-precise-range.js',
        options: {
          external: ['moment']
        }
      }
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['dist/index.js'],
        dest: 'dist/moment-precise-range.js'
      }
    },
    jshint: {
      options: {
        node: true
      },
      gruntfile: {
        src: 'gruntfile.js'
      },
      libTest: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    nodeunit: {
      files: ['test/**/*_test.js']
    }
  });

  /*
   grunt.loadNpmTasks('grunt-contrib-nodeunit');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-concat');
   */

  grunt.loadNpmTasks('grunt-browserify');

  // Default task
  grunt.registerTask('default', ['browserify']);

  //grunt.registerTask('test', ['jshint', 'nodeunit']);
};

