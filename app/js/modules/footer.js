var Backbone = require("backbone");
var Marionette = require("backbone.marionette");
var footerTmpl = require("../../templates/footer.hbs");


var Footer = Marionette.ItemView.extend({
  template: footerTmpl
});

module.exports = Footer;