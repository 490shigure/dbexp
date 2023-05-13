<script setup lang="ts">
import Table from '@renderer/components/Table.vue'
import { onMounted, ref } from 'vue'

const columnList = [
  {
    label: '部门编号',
    prop: 'deptno',
    sort: true
  },
  {
    label: '部门名称',
    prop: 'deptname'
  },
  {
    label: '上级部门',
    prop: 'parentdeptno'
  },
  {
    label: '部门经理',
    prop: 'deptmanager'
  },
  {
    label: '部门经理编号',
    prop: 'deptmanagerno',
    sort: true
  }
]

const tableData = ref<object[]>([])
const count = ref(0)

const fetchTableData = async () => {
  console.log('fetchTableData')
  const result = await window.dbapi.manage.dept.getAllDept()
  tableData.value = result
}

onMounted(() => {
  fetchTableData()
})
</script>
<!-- TODO:写业务，记得组件复用 -->
<template>
  <p v-for="c in count" :key="c" style="heigh: 30px">manage department</p>
  <ElButton @click="count++">count is: {{ count }}</ElButton>
  <Table :column-list="columnList" :table-data="tableData" />
</template>

<style scoped></style>
