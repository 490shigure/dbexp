<script setup lang="ts">
import { useMenuStore } from '@renderer/stores'
const menu = useMenuStore()
</script>

<template>
  <div id="nav" class="sidebar">
    <ElScrollbar>
      <!-- Logo -->
      <div class="logo-container">
        <p>医院信息管理系统</p>
      </div>
      <!-- 菜单 -->
      <ElMenu default-active="/home" router>
        <ElMenuItem index="/home">
          <ElIcon> <component :is="'Guide'" /> </ElIcon>
          <template #title>首页</template>
        </ElMenuItem>

        <!-- 动态菜单 -->
        <span v-for="(mn, idx) in menu.menuList" :key="idx">
          <ElMenuItem
            v-for="cm in mn.children"
            :key="cm.name"
            :index="'/' + mn.path + '/' + cm.path"
          >
            <ElIcon> <component :is="cm.meta!.icon" /> </ElIcon>
            <template #title>{{ cm.meta!.title }}</template>
          </ElMenuItem>
        </span>
        <!-- 动态菜单 -->

        <ElMenuItem index="/auth/logout" style="color: red">
          <ElIcon><Close /></ElIcon>
          <template #title>退出登录</template>
        </ElMenuItem>
      </ElMenu>
    </ElScrollbar>
  </div>
</template>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 200px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
