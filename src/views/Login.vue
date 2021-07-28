<template>
<div class="container d-flex justify-content-center align-items-center" style="height: 100%">
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
</template>

<script>
import axios from '../axios/axios.js'

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
      axios.post('/login', {
        email: this.login.email,
        password: this.login.password
      })
        .then(data => {
          // console.log(data.data.access_token)
          // this.login.access_token = data.data.access_token
          localStorage.setItem('access_token', data.data.access_token)
          this.$router.push('/products')
          // this.error = ""
          // this.getTasks()
          // this.page= `main-page`
          // this.subPage = `myKanBan`
        })
        .catch(err => {
          // this.error = "Username/password Salah"
          console.log(err.response.data)
        })
    }
  }
}
</script>

<style>

</style>
