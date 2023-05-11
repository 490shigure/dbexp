import { Layout, Login, Register } from '@renderer/views/auth'

export default {
  path: '/auth',
  component: Layout,
  children: [
    { path: 'login', name: 'login', component: Login },
    { path: 'register', name: 'register', component: Register }
  ]
}
