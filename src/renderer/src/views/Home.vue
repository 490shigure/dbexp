<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@renderer/stores'

const router = useRouter()
const user = useUserStore()
// 如果没登陆，跳转到登陆页面
onBeforeMount(() => {
  if (!user.islogin) router.push('/auth/login')
})
</script>

<template>
  <h1>Welcome {{ user.username }} to Home</h1>
  <ElButton @click="router.push('/auth/login')">去登陆</ElButton>
</template>

<style scoped></style>
