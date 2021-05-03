module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: ['build'],
      css: ['build/**/*.css', '!build/**/*.min.css']
    },
    run: {
      build_core: {
        exec: 'cd core && npm install && npm run build',
      },
      build_react: {
        exec: 'cd react && npm install && npm run build',
      }
    },
    copy: {
      backbone: {
        files: [
          {
            expand: true,
            cwd: 'backbone/',
            src: ['**', '!README.md'],
            dest: 'build/',
          }
        ],
        options: {
          process: function (content, srcpath) {
            if (srcpath.indexOf('Main.js') > 0)
              return content.replace('../../core/build/core_bundle', '../lib/bundle/core_bundle').replace('../../react/build/react_bundle', '../lib/bundle/react_bundle')
            else if (srcpath.indexOf('index.html') > 0)
              return content.replace('.css', '.min.css')
            else
              return content
          },
        },
      },
      core: {
        expand: true,
        cwd: 'core/build/',
        src: ['**'],
        dest: 'build/lib/bundle/'
      },
      react: {
        expand: true,
        cwd: 'react/build/',
        src: ['**'],
        dest: 'build/lib/bundle/'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build/',
          src: ['**/*.css', '!**/*.min.css'],
          dest: 'build/',
          ext: '.min.css',
        }]
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-run')

  grunt.registerTask('default', ['clean:build', 'run', 'copy', 'cssmin', 'clean:css'])
}