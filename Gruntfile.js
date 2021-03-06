module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-html-build");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-clean");

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    htmlbuild: {
      dev: {
        src: "app/index.html",
        dest: "target/"  
      },

      release: {
        //configure release
      }
    },

    browserify: {
      options: {
        debug: true,
        transform: ["hbsfy"]
      },

      dev: {
        files: {
          "target/app.js": ["app/js/app.js"]
        },

        options: {
          watch: true
        }
      }
    },

    copy: {
      main: {
        files: [
          // copy assets
        ]
      }
    },

    watch: {
      options: {
        livereload: true,
        spawn: false
      },

      index: {
        files: ["app/index.html"],
        tasks: ["htmlbuild:dev"]
      },

      js: {
        files: ["app/**/*.js"]
      },

      templates: {
        files: ["app/**/*.hbs"]
      }
    },

    connect: {
      server: {
        options: {
          port: 3001,
          base: "target/",
          hostname: "localhost", // Change this to 0.0.0.0 to access the server from outside
          open: true
        }
      }
    },

    clean: ["target/"]
  });
  
  grunt.event.on("watch", function(action, filepath, target) {
    grunt.log.writeln(target + ": " + filepath + " has " + action);
  });

  // Default task(s).
  grunt.registerTask("default", ["clean", "htmlbuild:dev", "browserify:dev", "copy", "connect", "watch"]);
};