<script setup lang="ts">
import { useMenuStore } from '@renderer/stores'
import { useRouter } from 'vue-router'
const menu = useMenuStore()

const router = useRouter()
const path_ = '@renderer/views/error/404.vue'

const onbtnclk = (path: string) => {
  router.addRoute('index', {
    path: 'manage',
    name: 'manage',
    component: () => import(path)
  })
}
</script>

<template>
  <p>Hello World</p>
  <ElButton @click="onbtnclk(path_)">添加路由</ElButton>
</template>

<style scoped></style>
