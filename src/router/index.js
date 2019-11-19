import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/airplaneDemo/home'
import Show from '@/views/airplaneDemo/show'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'airplaneDemoHome',
    component: Home
  },
  {
    path: '/show',
    name: 'airplaneDemoShow',
    component: Show
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
