//TODO: copiar bundles para pasta certa e mudar caminhos

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['build'],
    run: {
      build_core: {
        exec: 'cd core && npm install && npm run build',
      },
      build_react: {
        exec: 'cd react && npm install && npm run build',
      },
    },
    copy: {
      backbone: {
        expand: true,
        cwd: 'backbone/',
        src: ['**/*', '!README.md'],
        dest: 'build/',
      },
      core: {
        expand: true,
        cwd: 'core/',
        src: ['**/*', '!README.md'],
        dest: 'build/',
      },
      react: {
        expand: true,
        cwd: 'react/',
        src: ['**/*', '!README.md'],
        dest: 'build/',
      },
    },
  })

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-run')

  grunt.registerTask('default', ['clean', 'run', 'copy'])
}