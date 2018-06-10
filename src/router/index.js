import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
import Cart from '@/components/Cart'
import Confirmation from '@/components/Confirmation'

Vue.use(Router)

export default new Router({
  base: '/vuejs/vue-shop/', 
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list/:format',
      name: 'List',
      component: List,
      props: true
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/cart/confirmation',
      name: 'Confirmation',
      component: Confirmation
    }
  ]
})
