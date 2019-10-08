import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/tabbar-layout'),
      children: [
        {
          name: 'home',
          path: '',
          component: () => import('@/views/home')
        }
      ]
    },
    {
      name: 'layout',
      path: '/layout',
      component: () => import('@/views/layout')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/login')
    },
    {
      name: 'post',
      path: '/post',
      component: () => import('@/views/post')
    },
    {
      name: 'test',
      path: '/test',
      component: () => import('@/views/test')
    },
    {
      name: 'threeParty',
      path: '/threeParty',
      component: () => import('@/views/three-party')
    },
    {
      name: 'personal',
      path: '/personal',
      component: () => import('@/views/personal/change')
    },
    {
      name: 'card',
      path: '/card',
      component: () => import('@/views/personal/card')
    },
    {
      name: 'class',
      path: '/class',
      component: () => import('@/views/personal/class')
    },
    {
      name: 'change',
      path: '/change',
      component: () => import('@/views/personal/change')
    },
    {
      name: 'collection',
      path: '/collection',
      component: () => import('@/views/personal/collection')
    },
    {
      name: 'order',
      path: '/order',
      component: () => import('@/views/personal/order')
    },
    {
      name: 'mine',
      path: '/mine',
      component: () => import('@/views/personal/mine')
    },
    {
      name: 'center',
      path: '/center',
      component: () => import('@/views/personal/center')
    }
  ]
})
