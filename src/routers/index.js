import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Home from '@/page/Home'
import About from '@/page/About'
import Store from '@/page/Store'
import Slot from '@/page/Slot'
import Proxy from '@/page/Proxy'
import Mock from '@/page/Mock'

const routes = [
  { path: '/', component: Home },
  { path: '/About', component: About },
  { path: '/Store', component: Store },
  { path: '/Slot', component: Slot },
  { path: '/Proxy', component: Proxy },
  { path: '/Mock', component: Mock },
]

const router = new Router({
  routes,
})

export default router


