import Vue from 'vue'
import App from './App.vue'
// 导入路由模块
import router from "./router/index.js"
import moment from "moment"
moment.locale('zh-cn')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 在vue项目中要想把路由用起来。必须把路由实例对象。通过下面的方式进行挂载
  // router路由实例对象
  router

}).$mount('#app')
