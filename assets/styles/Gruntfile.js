module.exports = function (grunt) {
  grunt.initConfig({
    autoprefixer: {
      dist: {
        files: {
          'build/index.scss': 'index.scss'
        }
      }
    },
    watch: {
      styles: {
        files: ['index.scss'],
        tasks: ['autoprefixer']
      }
    }
  })
  grunt.loadNpmTasks('grunt-autoprefixer')
  grunt.loadNpmTasks('grunt-contrib-watch')
}
