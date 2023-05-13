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

const tableData = ref([
  {
    deptno: '1',
    deptname: '研发部',
    parentdept: '总经办',
    deptmanager: '张三',
    deptmanagerno: '1'
  },
  {
    deptno: '2',
    deptname: '财务部',
    parentdept: '总经办',
    deptmanager: '李四',
    deptmanagerno: '2'
  },
  {
    deptno: '3',
    deptname: '人事部',
    parentdept: '总经办',
    deptmanager: '王五',
    deptmanagerno: '3'
  },
  {
    deptno: '4',
    deptname: '市场部',
    parentdept: '总经办',
    deptmanager: '赵六',
    deptmanagerno: '4'
  },
  {
    deptno: '5',
    deptname: '销售部',
    parentdept: '总经办',
    deptmanager: '田七',
    deptmanagerno: '5'
  }
])
const count = ref(0)

const fetchTableData = () => {
  console.log('fetchTableData')
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
