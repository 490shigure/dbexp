<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <p>Hello World from Register</p>
  <button @click="router.push('/auth/login')">去登陆</button>
</template>

<style scoped></style>
