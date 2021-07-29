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
import axios from '../axios/axios.js'
import Swal from 'sweetalert2'

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
          localStorage.setItem('access_token', data.data.access_token)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login Success',
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push('/products')
        })
        .catch(err => {
          if (err.response.data.message === 'Username/Password Salah') {
            Swal.fire(
              'Login Failed',
              'Please check email / username',
              'error'
            )
          }
          // console.log(err.response.data.message === 'Username/Password Salah')
        })
    }
  }
}
</script>

<style>

</style>
