// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'
import VueMatchHeights from 'vue-match-heights'

// somewhere, import (require) this jquery, but pipe it through the expose loader
window.jQuery = window.$ = require('jquery')
require('bootstrap')

// import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueMatchHeights, {
  disabled: [768] // Optional: default viewports widths to disabled resizing on. Can be overridden per usage
})

Vue.use(VeeValidate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
