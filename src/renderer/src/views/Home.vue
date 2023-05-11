<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCounterStore } from '@renderer/stores/counter'

const router = useRouter()
const onLoginCick = () => {
  router.push('/login')
}

const counter = useCounterStore()
</script>

<template>
  <p>Hello World from Home</p>
  <p>count value{{ counter.count }}</p>
  <button @click="onLoginCick">去登陆</button>
  <button @click="counter.increment">+1</button>
</template>

<style scoped></style>
