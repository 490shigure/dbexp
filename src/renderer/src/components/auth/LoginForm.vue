<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useUserStore } from '@renderer/stores'
import type { FormInstance, FormRules } from 'element-plus'

const user = useUserStore()

const tabname = ref('login')
// 表单引用
const loginformRef = ref<FormInstance>()
const registerformRef = ref<FormInstance>()
// 表单数据
const login_form_data = reactive({
  username: '',
  password: ''
})

const register_form_data = reactive({
  username: '',
  password: '',
  repeat_password: '',
  role: ''
})
// 角色选项
const roles = [
  { value: 'doctor', label: '医生' },
  { value: 'nurse', label: '护士' },
  { value: 'cashier', label: '收银员' },
  { value: 'pharmacist', label: '药剂师' },
  { value: 'patient', label: '病人' }
]

// 表单验证规则
const check_username = (_rule: any, value: string, callback: any) => {
  if (!value) {
    return callback(new Error('用户名不能为空'))
  }
  if (value.length < 3 || value.length > 20) {
    return callback(new Error('长度在 3 到 20 个字符'))
  }
  callback()
}

const check_pass = (_rule: any, value: string, callback: any) => {
  if (!value) {
    return callback(new Error('密码不能为空'))
  }
  if (value.length < 5 || value.length > 20) {
    return callback(new Error('长度在 5 到 20 个字符'))
  }
  callback()
}

const check_repeat_pass = (_rule: any, value: string, callback: any) => {
  if (!value) {
    return callback(new Error('请再次输入密码'))
  }
  if (value !== register_form_data.password) {
    return callback(new Error('两次输入密码不一致!'))
  }
  callback()
}

const check_role = (_rule: any, value: string, callback: any) => {
  if (!value) {
    return callback(new Error('请选择角色'))
  }
  callback()
}
// 登录表单验证规则
const login_rules = {
  username: [{ validator: check_username, trigger: 'blur' }],
  password: [{ validator: check_pass, trigger: 'blur' }]
} as FormRules
// 注册表单验证规则
const register_rules = {
  username: [{ validator: check_username, trigger: 'blur' }],
  password: [{ validator: check_pass, trigger: 'blur' }],
  repeat_password: [{ validator: check_repeat_pass, trigger: 'blur' }],
  role: [{ validator: check_role, trigger: 'blur' }]
} as FormRules

// 登录函数
const login = async (formEl: FormInstance | undefined) => {
  // 校验表单
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
  // 登录
  const result = await window.dbapi.auth.login(login_form_data.username, login_form_data.password)
  console.log('登录', result)
  if (result.success) {
    user.login(result.username!, result.role!)
    console.log('登录成功')
  } else {
    console.log('登录失败')
  }
}

// 注册函数
const register = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      tabname.value = 'login'
    } else {
      console.log('error submit!')
    }
  })
  // const result = await window.dbapi.auth.register(username, password)
  // console.log('注册', result)
  // if (result.success) {
  //   user.login(result.username!, result.role!)
  //   console.log('注册成功')
  // } else {
  //   alert('注册失败')
  // }
}
</script>

<template>
  <ElTabs v-model="tabname" type="border-card" :stretch="true" class="tabform">
    <!-- 登录表单 -->
    <ElTabPane label="登录" name="login">
      <ElForm
        ref="loginformRef"
        :rules="login_rules"
        :model="login_form_data"
        status-icon
        label-position="top"
        label-width="120px"
        size="large"
        class="form"
      >
        <ElFormItem label="用户名" prop="username">
          <ElInput
            v-model="login_form_data.username"
            placeholder="请输入用户名"
            autocomplete="off"
          />
        </ElFormItem>

        <ElFormItem label="密码" prop="password">
          <ElInput
            v-model="login_form_data.password"
            type="password"
            placeholder="请输入密码"
            autocomplete="off"
          />
        </ElFormItem>

        <ElFormItem>
          <ElButton type="primary" @click="login(loginformRef)">登录</ElButton>
        </ElFormItem>
      </ElForm>
    </ElTabPane>
    <!-- 注册表单 -->
    <ElTabPane label="注册" name="register">
      <ElForm
        ref="registerformRef"
        :rules="register_rules"
        :model="register_form_data"
        status-icon
        label-position="top"
        label-width="120px"
        size="large"
        class="form"
      >
        <ElFormItem label="用户名" prop="username">
          <ElInput
            v-model="register_form_data.username"
            placeholder="请输入用户名"
            autocomplete="off"
          />
        </ElFormItem>

        <ElFormItem label="密码" prop="password">
          <ElInput
            v-model="register_form_data.password"
            type="password"
            placeholder="请输入密码"
            autocomplete="off"
          />
        </ElFormItem>

        <ElFormItem label="重复密码" prop="repeat_password">
          <ElInput
            v-model="register_form_data.repeat_password"
            type="password"
            placeholder="请输入密码"
            autocomplete="off"
          />
        </ElFormItem>

        <ElFormItem label="身份" prop="role">
          <ElSelect v-model="register_form_data.role" placeholder="请选择">
            <ElOption
              v-for="item in roles"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </ElSelect>
        </ElFormItem>

        <ElFormItem>
          <ElButton type="primary" @click="register(registerformRef)">注册</ElButton>
        </ElFormItem>
      </ElForm>
    </ElTabPane>
  </ElTabs>
</template>

<style scoped>
.tabform {
  width: 300px;
  height: fit-content;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}
.tabform::before {
  background-color: #fff;
  height: 10px;
  width: 100%;
  border-radius: 12px;
}
</style>
