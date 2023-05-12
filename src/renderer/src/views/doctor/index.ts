export { default as DayRegForm } from './DayRegForm.vue'
export { default as MyRegForm } from './MyRegForm.vue'
export { default as Diagnosis } from './Diagnosis.vue'
export { default as My } from './My.vue'
import type { RouteRecordRaw } from 'vue-router'

// TODO:修改图标
export const doctorMenu: RouteRecordRaw = {
  path: 'doctor',
  name: 'doctor',
  children: [
    {
      path: 'dayregform',
      name: 'dayregform',
      meta: {
        title: '今日挂号',
        icon: 'Box'
      },
      component: () => import('@renderer/views/doctor/DayRegForm.vue')
    },
    {
      path: 'myregform',
      name: 'myregform',
      meta: {
        title: '我的挂号',
        icon: 'Box'
      },
      component: () => import('@renderer/views/doctor/MyRegForm.vue')
    },
    {
      path: 'diagnosis',
      name: 'diagnosis',
      meta: {
        title: '患者就诊',
        icon: 'Box'
      },
      component: () => import('@renderer/views/doctor/Diagnosis.vue')
    },
    {
      path: 'my',
      name: 'my',
      meta: {
        title: '个人中心',
        icon: 'Box'
      },
      component: () => import('@renderer/views/doctor/My.vue')
    }
  ]
}
