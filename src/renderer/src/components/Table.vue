<script setup lang="ts">
interface IColumn {
  label: string
  prop: string
  fixed?: boolean | string
  sort?: boolean
}

interface IProps {
  columnList: IColumn[]
  tableData?: Array<object> | []
}

defineProps<IProps>()

const handleSave = (scope) => {
  scope.row._edit = false
  console.log(scope.row)
}

const handleCancle = (scope) => {
  scope.row._edit = false
}

const handleEdit = (scope) => {
  scope.row._edit = true
}
</script>

<template>
  <div class="table-container">
    <ElTable :data="tableData" stripe highlight-current-row height="100%" width="100%">
      <el-table-column type="index" width="50" />
      <ElTableColumn
        v-for="(col, idx) in columnList"
        :key="idx"
        :fixed="col.fixed ?? false"
        :sortable="col.sort ?? false"
        :prop="col.prop"
        :label="col.label"
      ></ElTableColumn>

      <!-- 操作栏 -->
      <ElTableColumn label="操作">
        <template #default="scope">
          <div v-if="scope.row._edit">
            <ElButton type="primary" @click="handleSave(scope)">保存</ElButton>
            <ElButton @click="handleCancle(scope)"> 取消 </ElButton>
          </div>
          <ElButton v-else type="primary" @click="handleEdit(scope)"> 编辑 </ElButton>
        </template>
      </ElTableColumn>
    </ElTable>
  </div>
</template>

<style scoped>
.table-container {
  width: 100%;
  height: fit-content;
  max-height: 100%;
  min-height: 50px;
  /* display: flex; */
  /* flex-grow: 1; */
  box-sizing: border-box;
  overflow: auto;
}
</style>
