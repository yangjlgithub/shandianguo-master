// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false
if (true) {
	// localhost:3000 等价于 127.0.0.1
	window.apiAddress = "http://127.0.0.1:3000"
}else{
	window.apiAddress = "http://120.25.107.16:3000"
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
