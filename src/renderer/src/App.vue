<script setup lang="ts">
import { ref } from 'vue'
import LoginForm from './components/login/LoginForm.vue'

const count = ref(0)

const increment = () => {
  count.value++
}
const patients = ref({})

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
  <button @click="vping">Ping</button>
  <LoginForm></LoginForm>
</template>
