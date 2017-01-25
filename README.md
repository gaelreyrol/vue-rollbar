# vue-rollbar
Rollbar plugin for Vue.js

### Usage

```javascript
var Vue = require('vue');
var Rollbar = require('vue-rollbar');

Vue.use(Rollbar, {
	accessToken: 'YOUR_ROLLBAR_FRONT_TOKEN',
	...options
});
```

You can now use Rollbar anywhere in your Vue app.

```javascript
Vue.rollbar.debug('Yohyo!');
// or in a vue component
this.rollbar.debug('Yohyo!')
```

See [Rollbar javascript documentation](https://rollbar.com/docs/notifier/rollbar.js/) for options
