var Backbone = require("backbone");
var Marionette = require("backbone.marionette");
var helloTmpl = require("../../templates/hello.hbs");


var Hello = Marionette.ItemView.extend({
  template: helloTmpl
});

module.exports = Hello;