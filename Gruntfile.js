module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      main: {
        files: [
          {expand:true, cwd: "app/", src: ["index.html"], dest: "target/"}
        ]
      }
    },

    watch: {
      app: {
        files: ["app/**/*"],
        tasks: ["copy"],
        options: {
          livereload: true
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: "target/",
          // Change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost'
        }
      }
    }
  });
  
  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  // Default task(s).
  grunt.registerTask('default', ["copy", "connect", "watch"]);
};