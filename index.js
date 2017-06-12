var Rollbar = require("rollbar");

module.exports = {
  install: function(Vue, options) {
    Vue.rollbar = new Rollbar(options);
  }
};
