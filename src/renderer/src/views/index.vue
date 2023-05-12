<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@renderer/stores'
import { RouterView } from 'vue-router'

import Menu from '@renderer/components/Menu.vue'

const router = useRouter()
const user = useUserStore()
// 如果没登陆，跳转到登陆页面
onBeforeMount(() => {
  if (!user.islogin) router.push('/auth/login')
})
</script>

<template>
  <div class="index-container">
    <Menu />
    <RouterView />
  </div>
</template>

<style scoped>
.index-container {
  display: flex;
  height: 100vh;
  width: 100vw;
}
</style>
