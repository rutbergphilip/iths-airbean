import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Navigation from '../views/Navigation.vue'
import Meny from '../components/Meny.vue'
import Profil from '../views/Profil.vue'
import Orderstatus from '../views/Orderstatus.vue'
import Cart from '../components/cart.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/navigation',
    name: 'Navigation',
    component: Navigation
  },
  {
    path: '/meny/',
    name: 'Meny',
    component: Meny,
    children: [
      {
        path: 'cart',
        name: 'Cart',
        component: Cart
      }
    ]
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/orderstatus',
    name: 'Orderstatus',
    component: Orderstatus
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
