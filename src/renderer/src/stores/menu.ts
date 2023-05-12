import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import { manageMenu } from '@renderer/views/manage'
import { doctorMenu } from '@renderer/views/doctor'
import { patientMenu } from '@renderer/views/patient'

const allMenus = {
  admin: manageMenu,
  doctor: doctorMenu,
  patient: patientMenu
}

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menuList: [] as RouteRecordRaw[]
  }),
  actions: {
    async getMenus(role: string) {
      this.menuList.push(allMenus[role])
    }
  }
})
