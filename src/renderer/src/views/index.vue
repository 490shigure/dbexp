<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@renderer/stores'

import Menu from '@renderer/components/Menu.vue'

const router = useRouter()
const user = useUserStore()
// 如果没登陆，跳转到登陆页面
onBeforeMount(() => {
  if (!user.islogin) router.push('/auth/login')
})
</script>

<template>
  <h1>Welcome {{ user.username }} to Home</h1>
  <Menu />
</template>

<style scoped></style>
