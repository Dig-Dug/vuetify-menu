import Vue from 'vue'
import VueRouter from 'vue-router'
//import Navbar from './components/Navbar'
import Admin from './components/Admin'
import Kalender from './components/Kalender'

Vue.use(VueRouter)

//import Navbar from '../components/Navbar';
//import HelloWorld from '../components/HelloWorld';

const routes = [{
    component: Admin,
    name: "admin",
    path: "/admin"
}, {
  component: Kalender,
  name: "kalender",
  path: "/kalender"
}

];



export default new VueRouter({
  routes 
})
