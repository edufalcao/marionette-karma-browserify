var $ = require("jquery");
var Backbone = require("backbone");
var Marionette = require("backbone.marionette");

var Header = require("./modules/header");
var Footer = require("./modules/footer");
var Hello = require("./modules/hello");
var About = require("./modules/about");


var App = new Marionette.Application();

App.addRegions({
  "header": "#header",
  "content": "#content",
  "footer": "#footer"
});

App.Router = Marionette.AppRouter.extend({
  appRoutes: {
    "": "hello",
    "hello": "hello",
    "about": "about"
  }
});

App.Controller = Marionette.Controller.extend({
  hello: function() {
    var hello = new Hello();
    App.content.show(hello);
  },

  about: function() {
    var about = new About();
    App.content.show(about);
  }
});

App.on("start", function() {
    App.controller = new App.Controller();
    
    App.router = new App.Router({
      controller: App.controller
    });
        
    Backbone.history.start();

    App.header.show(new Header());
    App.footer.show(new Footer());
});

App.start();