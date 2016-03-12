var Backbone = require("backbone");
var Marionette = require("backbone.marionette");
var headerTmpl = require("../../templates/header.hbs");


var Header = Marionette.ItemView.extend({
  template: headerTmpl
});

module.exports = Header;