<template>
  <nav class="navbar navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">E-Commerce CMS</a>
      <div>
        <button v-if="path" class="btn btn-secondary mx-3" @click="onClick()">Add Product</button>
        <button class="btn btn-danger mx-3" @click="logout()">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'Navbar',
  methods: {
    onClick () {
      this.$router.push('/add')
    },
    logout () {
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'See you again!'
          )
          localStorage.removeItem('access_token')
          this.$router.push({ name: 'Login' })
        }
      })
    }
  },
  computed: {
    locationAdd () {
      if (this.$route.path === '/add') {
        return true
      } else {
        return false
      }
    },
    path () {
      return this.$route.path === '/products'
    }
  }
}
</script>

<style>

</style>
