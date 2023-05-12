export { default as RegFormReserve } from './RegFormReserve.vue'
export { default as Diagnosis } from './Diagnosis.vue'
export { default as Fee } from './Fee.vue'
export { default as My } from './My.vue'
import type { RouteRecordRaw } from 'vue-router'

export const patientMenu: RouteRecordRaw = {
  path: 'patient',
  name: 'patient',
  children: [
    {
      path: 'regformreserve',
      name: 'regformreserve',
      meta: {
        title: '预约挂号',
        icon: 'DocumentAdd'
      },
      component: () => import('@renderer/views/patient/RegFormReserve.vue')
    },
    {
      path: 'diagnosis',
      name: 'diagnosis',
      meta: {
        title: '就诊记录',
        icon: 'View'
      },
      component: () => import('@renderer/views/patient/Diagnosis.vue')
    },
    {
      path: 'fee',
      name: 'fee',
      meta: {
        title: '缴费',
        icon: 'CreditCard'
      },
      component: () => import('@renderer/views/patient/Fee.vue')
    },
    {
      path: 'my',
      name: 'my',
      meta: {
        title: '个人中心',
        icon: 'User'
      },
      component: () => import('@renderer/views/patient/My.vue')
    }
  ]
}
