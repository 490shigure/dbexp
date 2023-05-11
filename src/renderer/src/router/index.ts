import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@renderer/views/Home.vue'
import Login from '@renderer/views/auth/Login.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
