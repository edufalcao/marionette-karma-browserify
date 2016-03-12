var Backbone = require("backbone");
var Marionette = require("backbone.marionette");
var aboutTmpl = require("../../templates/about.hbs");


var About = Marionette.ItemView.extend({
  template: aboutTmpl
});

module.exports = About;