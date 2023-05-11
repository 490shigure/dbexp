<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)

const increment = () => {
  count.value++
}
const patients = ref({})

const refresh = async () => {
  const result = await window.dbapi.getAllPatients()
  patients.value = result
}

const vping = async () => {
  const result = await window.dbapi.ping()
  console.log(result)
}
</script>

<template>
  <p>Hello World</p>
  <p>{{ count }}</p>
  <p>{{ patients }}</p>
  <button @click="increment">Inc</button>
  <button @click="refresh">Refresh</button>
  <button @click="vping">Ping</button>
</template>
