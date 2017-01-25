var rollbar = require('rollbar-browser');

module.exports = {
	install: function (Vue, options) {
		Vue.rollbar = rollbar.init(options);
	}
};
