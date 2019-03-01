# vue-rollbar

[![npm (scoped with tag)](https://img.shields.io/npm/v/vue-rollbar/latest.svg?style=flat-square)](https://npmjs.com/package/vue-rollbar)
[![npm](https://img.shields.io/npm/dt/vue-rollbar.svg?style=flat-square)](https://npmjs.com/package/vue-rollbar)
[![Dependencies](https://david-dm.org/Zevran/vue-rollbar/status.svg?style=flat-square)](https://david-dm.org/Zevran/vue-rollbar)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> Rollbar plugin for Vue.js

## Installation

```bash
npm install vue-rollbar --save
```

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
this.$rollbar.debug('Yohyo!')
```

See [Rollbar javascript documentation](https://rollbar.com/docs/notifier/rollbar.js/) for options
