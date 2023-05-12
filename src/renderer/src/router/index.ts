import { createRouter, createWebHashHistory } from 'vue-router'
import authRouter from './auth.router'
import errRouter from './error.router'
import Index from '@renderer/views/index.vue'
import { Home } from '@renderer/views/home'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        }
      ]
    },
    { ...errRouter },
    { ...authRouter }
  ]
})
