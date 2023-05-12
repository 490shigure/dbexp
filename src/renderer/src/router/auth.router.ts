import { Layout, Login, Register, Logout } from '@renderer/views/auth'

export default {
  path: '/auth',
  component: Layout,
  children: [
    { path: 'login', name: 'login', component: Login },
    { path: 'register', name: 'register', component: Register },
    { path: 'logout', name: 'logout', component: Logout }
  ]
}
