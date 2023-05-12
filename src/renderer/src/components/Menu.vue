<script setup lang="ts"></script>

<template>
  <div id="nav">
    <ElScrollbar>
      <!-- Logo -->
      <div class="logo-container">
        <p>医院信息管理系统</p>
      </div>
      <!-- 菜单 -->
      <ElMenu>
        <ElMenuItem index="1">
          <ElIcon><Guide /></ElIcon>
          <template #title>首页</template>
        </ElMenuItem>

        <ElMenuItem index="2">
          <ElIcon><Help /></ElIcon>
          <template #title>病人管理</template>
        </ElMenuItem>

        <ElMenuItem index="3">
          <ElIcon><OfficeBuilding /></ElIcon>
          <template #title>部门管理</template>
        </ElMenuItem>

        <ElMenuItem index="4">
          <ElIcon><User /></ElIcon>
          <template #title>员工管理</template>
        </ElMenuItem>

        <ElMenuItem index="5">
          <ElIcon><Box /></ElIcon>
          <template #title>药房管理</template>
        </ElMenuItem>

        <ElMenuItem index="6">
          <ElIcon><Tickets /></ElIcon>
          <template #title>挂号管理</template>
        </ElMenuItem>

        <ElMenuItem index="7">
          <ElIcon><View /></ElIcon>
          <template #title>就诊管理</template>
        </ElMenuItem>

        <ElMenuItem index="8">
          <ElIcon><CreditCard /></ElIcon>
          <template #title>缴费管理</template>
        </ElMenuItem>

        <ElMenuItem index="9" style="color: red">
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
