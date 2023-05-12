export { default as Department } from './Department.vue'
export { default as Employee } from './Employee.vue'
export { default as Medicine } from './Medicine.vue'
export { default as Patient } from './Patient.vue'
export { default as RegisterForm } from './RegisterForm.vue'
export { default as Diagnosis } from './Diagnosis.vue'
export { default as Fee } from './Fee.vue'
import type { RouteRecordRaw } from 'vue-router'

export const manageMenu: RouteRecordRaw = {
  path: 'manage',
  name: 'manage',
  children: [
    {
      path: 'patient',
      name: 'patient',
      meta: {
        title: '病人管理',
        icon: 'Help'
      },
      component: () => import('@renderer/views/manage/Patient.vue')
    },
    {
      path: 'department',
      name: 'department',
      meta: {
        title: '部门管理',
        icon: 'OfficeBuilding'
      },
      component: () => import('@renderer/views/manage/Department.vue')
    },
    {
      path: 'employee',
      name: 'employee',
      meta: {
        title: '员工管理',
        icon: 'User'
      },
      component: () => import('@renderer/views/manage/Employee.vue')
    },
    {
      path: 'medicine',
      name: 'medicine',
      meta: {
        title: '药房管理',
        icon: 'Box'
      },
      component: () => import('@renderer/views/manage/Medicine.vue')
    },
    {
      path: 'registerform',
      name: 'registerform',
      meta: {
        title: '挂号管理',
        icon: 'Tickets'
      },
      component: () => import('@renderer/views/manage/RegisterForm.vue')
    },
    {
      path: 'diagnosis',
      name: 'diagnosis',
      meta: {
        title: '就诊管理',
        icon: 'View'
      },
      component: () => import('@renderer/views/manage/Diagnosis.vue')
    },
    {
      path: 'fee',
      name: 'fee',
      meta: {
        title: '缴费管理',
        icon: 'CreditCard'
      },
      component: () => import('@renderer/views/manage/Fee.vue')
    }
  ]
}
