import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/computed',
    name: 'Computed',
    component: () => import(/* webpackChunkName: "computed" */ '../views/Computed.vue')
  },
  {
    path: '/watch',
    name: 'Watch',
    component: () => import(/* webpackChunkName: "watch" */ '../views/Watch.vue')
  },
  {
    path: '/filter',
    name: 'Filters',
    component: () => import(/* webpackChunkName: "filter" */ '../views/Filter.vue')
  },
  {
    path: '/props',
    name: 'Props',
    component: () => import(/* webpackChunkName: "props" */ '../views/Props.vue')
  },
  {
    path: '/emit',
    name: 'Emit',
    component: () => import(/* webpackChunkName: "emit" */ '../views/Emit.vue')
  },
  {
    path: '/slot',
    name: 'Slots',
    component: () => import(/* webpackChunkName: "slot" */ '../views/Slot.vue')
  },
  {
    path: '/dynamic',
    name: 'Dynamic',
    component: () => import(/* webpackChunkName: "dynamic" */ '../views/Dynamic.vue')
  },
  {
    path: '/extend',
    name: 'Extend',
    component: () => import(/* webpackChunkName: "extend" */ '../views/Extend.vue')
  },
  {
    path: '/transition',
    name: 'Transition',
    component: () => import(/* webpackChunkName: "transition" */ '../views/Transition.vue')
  },
  {
    path: '/bus',
    name: 'EventBus',
    component: () => import(/* webpackChunkName: "bus" */ '../views/EventBus.vue')
  },
  {
    path: '/count',
    name: 'Count',
    component: () => import(/* webpackChunkName: "count" */ '../views/Count.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
