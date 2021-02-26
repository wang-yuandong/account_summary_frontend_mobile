import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import OrderEntry from "../views/OrderEntry";
import OrderList from "../views/OrderList";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path:'/orderList',
    name:'OrderList',
    component:OrderList
  },
  {
    path:'/orderEntry',
    name:'OrderEntry',
    component:OrderEntry
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
