<template>
<div style="height: 1000px" class="d-flex-column justify-content-center">
  <div>
    <h3>Please Login</h3>
  </div>
  <div class="container d-flex justify-content-center align-items-center" >
    <form @submit.prevent="submitLogin" class ="col-4">
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
