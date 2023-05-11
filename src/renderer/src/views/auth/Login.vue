<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LoginForm from '@renderer/components/auth/LoginForm.vue'

const router = useRouter()

const count = ref(0)
const increment = () => {
  count.value++
}
const patients = ref({})

const vping = async () => {
  const result = await window.dbapi.ping()
  console.log(result)
}

const onBackClick = () => {
  router.push('/')
}
</script>

<template>
  <p>Hello World</p>
  <button @click="onBackClick">返回首页</button>
  <p>{{ count }}</p>
  <p>{{ patients }}</p>
  <button @click="increment">Inc</button>
  <button @click="vping">Ping</button>
  <LoginForm></LoginForm>
</template>
