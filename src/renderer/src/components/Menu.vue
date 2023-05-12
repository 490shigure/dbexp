<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="nav">
    <div class="h-6" />
    <el-menu
      default-active="/keng"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/aaa">A</el-menu-item>
      <el-menu-item index="/bbb">B</el-menu-item>
      <el-menu-item index="/ccc">C</el-menu-item>
    </el-menu>
    <RouterView />
  </div>
</template>
