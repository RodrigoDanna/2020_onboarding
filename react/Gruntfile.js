module.exports = function(grunt) {
    require('jit-grunt')(grunt);
  
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "src/assets/css/App.css": "src/assets/less/App.less"
                }
            }
        },
        watch: {
            styles: {
            files: ['src/assets/less/**/*.less'], // which files to watch
            tasks: ['less'],
            options: {
                nospawn: true
            }
            }
        }
    });
  
    grunt.registerTask('default', ['less', 'watch']);
  };