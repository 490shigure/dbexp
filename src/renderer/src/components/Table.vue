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

interface IEmits {
  (e: 'delete', pkey: number): void
}

const props = defineProps<IProps>()
const emit = defineEmits<IEmits>()

// TODO: 以事件触发给父组件处理
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

const emitDelete = (scope) => {
  emit('delete', scope.row.pkey)
}
</script>

<template>
  <div class="table-container">
    <ElTable :data="props.tableData" stripe highlight-current-row height="100%" width="100%">
      <el-table-column type="index" width="50" />
      <ElTableColumn
        v-for="(col, idx) in props.columnList"
        :key="idx"
        :fixed="col.fixed ?? false"
        :sortable="col.sort ?? false"
        :prop="col.prop"
        :label="col.label"
      >
        <!-- 切换显示编辑框 -->
        <template #default="scope">
          <div v-if="scope.row._edit">
            <ElInput v-model="scope.row[scope.column.property]" />
          </div>
          <div v-else>{{ scope.row[scope.column.property] }}</div>
        </template>
      </ElTableColumn>

      <!-- 操作栏 -->
      <ElTableColumn label="操作" fixed="right" width="160%">
        <template #default="scope">
          <div v-if="scope.row._edit">
            <ElButton type="primary" @click="handleSave(scope)">保存</ElButton>
            <ElButton @click="handleCancle(scope)"> 取消 </ElButton>
          </div>
          <div v-else>
            <ElButton type="primary" @click="handleEdit(scope)"> 编辑 </ElButton>
            <ElButton type="danger" @click="emitDelete(scope)"> 删除 </ElButton>
          </div>
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
