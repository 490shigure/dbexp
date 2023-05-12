import { createRouter, createWebHashHistory } from 'vue-router'
import authRouter from './auth.router'
import Index from '@renderer/views/index.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: []
    },

    { ...authRouter }
  ]
})
