<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCounterStore } from '@renderer/stores'

const router = useRouter()
const onLoginCick = () => {
  router.push('/login')
}

const counter = useCounterStore()
</script>

<template>
  <p>Hello World from Home</p>
  <p>count value{{ counter.count }}</p>
  <ElButton @click="onLoginCick">去登陆</ElButton>
  <ElButton @click="counter.increment">+1</ElButton>
</template>

<style scoped></style>
