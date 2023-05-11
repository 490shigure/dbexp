<script setup lang="ts">
import { useRouter, RouterView } from 'vue-router'
import '@renderer/assets/css/base.css'

const router = useRouter()
router.push('/')
</script>

<template>
  <RouterView />
</template>
