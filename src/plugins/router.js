import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../pages/home.vue';
import Follow from '../pages/follow.vue';
import Column from  '../pages/column.vue';
import Detail from  '../pages/detail.vue';
import Login  from  '../pages/login.vue';
import user from   '../pages/user.vue';
import Reg  from '../pages/reg.vue';
import NoPage from '../pages/no-page.vue';
let routes = [
 // {path:'./home',components: Home},
 // {path:'./follow',components: Follow},
 // {path:'./column',components: Column},
 // {path:'./detail/_id',components: detail},
 // {path:'./login',components: login},
 // {path:'./user',components: user},
 // {path:'./reg',components: reg},
 // {path:'/',components:Home},
 // {path:'*',components: NoPage },   
 {path:'/home',component:Home},
 {path:'/follow',component:Follow},
 {path:'/column',component:Column},
 /* {path:'/detail',component:Detail,children:[
   {path:':id',component:Detail}
 ]}, */
 {path:'/detail/:_id',component:Detail,name:'detail'},
 {path:'/user',component:user},
 {path:'/Login',component:Login},
 {path:'/reg',component:Reg},
 {path:'/',redirect:'/home'},
 {path:'*',component:NoPage},
];

let router = new VueRouter({
  routes
});

export default router;