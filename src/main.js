import Vue from 'vue'
import App from './App.vue'
import vuePreView from './lib/index.js'
// import vuePayKeyboard from './lib/indexvue-pay-keyboard'
Vue.use(vuePreView)
new Vue({
  el: '#app',
  render: h => h(App)
})
