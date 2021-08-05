<template>
<div :style="{ height: '100vh', backgroundImage: 'url(' + require('@/assets/background.jpg') + ')' }" class="d-flex justify-content-center align-items-center">
  <div>
    <h3 class="text-center">Please Login</h3>
      <form @submit.prevent="submitLogin">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input v-model="login.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input v-model="login.password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  </div>
</div>
</template>

<script>

export default {
  name: 'Login',
  data: function () {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitLogin () {
      this.$store.dispatch('submitLogin', {
        email: this.login.email,
        password: this.login.password
      })
    }
  }
}
</script>

<style>

</style>
