import { defineStore } from 'pinia'

enum Role {
  Admin = 'admin',
  Doctor = 'doctor',
  Nurse = 'nurse',
  Cashier = 'cashier',
  Pharmacist = 'pharmacist',
  Patient = 'patient'
}

interface Istate {
  islogin: boolean
  username: string | null
  role: Role | null
}

export const useUserStore = defineStore('user', {
  state: (): Istate => ({
    islogin: false,
    username: null,
    role: null
  }),
  actions: {
    login(username: string, role: Role) {
      this.islogin = true
      this.username = username
      this.role = role
    },
    logout() {
      this.$reset()
    }
  }
})
