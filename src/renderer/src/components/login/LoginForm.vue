<script setup lang="ts">
const login = async (e) => {
  const username = e.target.username.value
  const password = e.target.password.value
  console.log(username, password)
  const result = await window.dbapi.auth.login(username, password)
  console.log('登录', result)
}
</script>

<template>
  <p>登录</p>
  <form @submit.prevent="login">
    <div class="form-group">
      <label>Username</label>
      <input name="username" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label>Password</label>
      <input name="password" type="password" class="form-control" />
    </div>
    <div class="form-group">
      <input id="admin" type="radio" name="admin" value="admin" />
      <label for="admin">admin</label>
      <input id="doctor" type="radio" name="doctor" value="doctor" />
      <label for="doctor">doctor</label>
      <input id="nurse" type="radio" name="nurse" value="nurse" />
      <label for="nurse">nurse</label>
      <input id="cashier" type="radio" name="cashier" value="cashier" />
      <label for="cashier">cashier</label>
      <input id="patient" type="radio" name="patient" value="patient" />
      <label for="patient">patient</label>
    </div>
    <div class="form-group">
      <button class="btn btn-primary">Login</button>
    </div>
  </form>
</template>

<style scoped></style>
