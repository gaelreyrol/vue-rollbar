import Vue from 'vue'
import App from './App.vue'
import Rollbar from '../../index.js'

Vue.use(Rollbar, {
  accessToken: ROLLBAR_CLIENT_TOKEN
})

new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.rollbar.debug('Heyhey!')
