import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
// 导入axios
import axios from 'axios'
// 配置全局默认路径
axios.defaults.baseURL = 'http://www.klxin.cn:8888/api/private/v1/'
// 挂载axios到Vue原型上，让每个vue实例都能通过原型链调用
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
