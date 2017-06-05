var rollbar = require("rollbar");

module.exports = {
  install: function(Vue, options) {
    Vue.rollbar = rollbar.init(options);
  }
};
