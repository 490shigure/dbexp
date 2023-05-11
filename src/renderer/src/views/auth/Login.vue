<script setup lang="ts">
import LoginForm from '@renderer/components/auth/LoginForm.vue'
</script>

<template>
  <div class="formwrap">
    <LoginForm></LoginForm>
  </div>
</template>

<style scoped>
.formwrap {
  width: 100vw;
  height: 100vh;
  background-color: #6ea2f1;
  background-image: url(https://api.oneneko.com/v1/bing_today);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
