<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const onLoginCick = () => {
  router.push('/login')
}
</script>

<template>
  <p>Hello World from Home</p>
  <button @click="onLoginCick">去登陆</button>
</template>

<style scoped></style>
