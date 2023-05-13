<script setup lang="ts">
interface IColumn {
  label: string
  prop: string
  fixed?: boolean | string
}

interface IProps {
  columnList: IColumn[]
  tableData?: Array<object> | []
}

defineProps<IProps>()
</script>

<template>
  <div class="table-container">
    <ElTable :data="tableData" stripe height="100%" width="100%">
      <ElTableColumn
        v-for="(col, idx) in columnList"
        :key="idx"
        :fixed="col.fixed || false"
        :prop="col.prop"
        :label="col.label"
      ></ElTableColumn>
    </ElTable>
  </div>
</template>

<style scoped>
.table-container {
  width: 100%;
  height: 100%;
  min-height: 50px;
  display: flex;
  flex-grow: 1;
  box-sizing: border-box;
  overflow: auto;
}
</style>
