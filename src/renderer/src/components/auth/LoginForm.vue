<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref, reactive, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore, useMenuStore } from '@renderer/stores'
import type { FormInstance, FormRules } from 'element-plus'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

const user = useUserStore()
const menu = useMenuStore()
const router = useRouter()
const toast = useToast({
  position: 'top-right',
  duration: 1500
})

// 若已登录，跳转首页
onBeforeMount(() => {
  if (user.islogin) {
    router.push('/')
  }
})

const tabname = ref('login')
// 表单引用
const loginformRef = ref<FormInstance>()
const registerformRef = ref<FormInstance>()
// 表单数据
const login_form_data = reactive({
  username: 'admin',
  password: '123456'
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

// 防抖指令
const vDebounce = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mounted(el: any, _binding: any) {
    el.addEventListener('click', () => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, 1200)
      }
    })
  }
}

// 登录函数
const login = async (formEl: FormInstance | undefined) => {
  // 校验表单
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      // 登录
      window.dbapi.auth.login(login_form_data.username, login_form_data.password).then((result) => {
        if (result.success) {
          toast.success('登录成功')
          user.login(result.username!, result.role!)
          menu.getMenus(result.role!).then(() => {
            menu.menuList.forEach((it) => {
              router.addRoute('index', it)
            })
            router.push('/')
          })
        } else {
          toast.error('登录失败')
        }
      })
    }
  })
}

// 注册函数
const register = async (formEl: FormInstance | undefined) => {
  // 校验表单
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      // 注册
      window.dbapi.auth
        .register(register_form_data.username, register_form_data.password, register_form_data.role)
        .then((result) => {
          if (result.success) {
            toast.success('注册成功')
            tabname.value = 'login'
          } else {
            toast.error(result.msg!)
          }
        })
    }
  })
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
            @keyup.enter="login(loginformRef)"
          />
        </ElFormItem>

        <ElFormItem>
          <ElButton v-debounce type="primary" @click="login(loginformRef)">登录</ElButton>
          <ElButton @click="loginformRef?.resetFields()">Reset</ElButton>
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
          <ElButton v-debounce type="primary" @click="register(registerformRef)">注册</ElButton>
          <ElButton @click="registerformRef?.resetFields()">Reset</ElButton>
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
