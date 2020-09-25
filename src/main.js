import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false
import  './assets/css/base.css';
import  './assets/js/font.js'




//引入路由
import router from './plugins/router.js'
//引用拦截器
import './plugins/axios'
//引入全局过滤器
import date from './filters/data.js';
Vue.filter('date',date);
import {fillzero} from './filters/fillzero.js' 
Vue.filter('fillzero',fillzero)
// import './filters'

let vm=new Vue({
  render: h => h(App),
  router,
  data:{
    bNav:false,
    bFoot:false,
    bLoading:true,
  }
}).$mount('#app')
export default vm
