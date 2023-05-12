<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore, useMenuStore } from '@renderer/stores'
import { onMounted } from 'vue'

const router = useRouter()
const user = useUserStore()
const menu = useMenuStore()

onMounted(() => {
  user.logout()
  menu.clear()
})
</script>

<template>
  <ElResult icon="success" title="登出成功" sub-title="按下按钮返回登录界面">
    <template #extra>
      <ElButton type="primary" @click="router.push('/auth/login')">登录</ElButton>
    </template>
  </ElResult>
</template>

<style scoped></style>
