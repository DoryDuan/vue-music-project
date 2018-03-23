import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import store from './store'

/* eslint-disable no-unused-vars */
import VConsole from 'vconsole'
var vConsole = new VConsole()

console.log('test')

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

import 'common/stylus/index.styl'

Vue.config.productionTip = false

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
