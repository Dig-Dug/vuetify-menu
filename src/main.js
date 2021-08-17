import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

import './scss/main.scss'

import Admin from './components/Admin';
import Kalender from './components/Kalender';
//import Navbar from './components/Navbar';
Vue.use(VueRouter)


Vue.use(vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})
Vue.config.productionTip = false;

//import router from './router';

const router = new VueRouter({
  routes: [
    //{path: '/', component: Navbar },
    {path: '/admin',component: Admin},
    {path: '/kalender',component: Kalender},
  ], mode:'hash'
})





new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
