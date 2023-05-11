import { createRouter, createWebHashHistory } from 'vue-router'
import authRouter from './auth.router'
import Home from '@renderer/views/Home.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { ...authRouter }
  ]
})
