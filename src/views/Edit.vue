<template>
<div class = "container">
    <!-- <p v-for="product in products" :key="product.id">{{product.id}}</p> -->
    <h1>Edit Product</h1>
    <h1>#{{$route.params.id}}</h1>
    <form @submit.prevent="edit">
      <div class="form-group">
        <label for="exampleInputEmail1">Name of Product</label>
        <input v-model="name" type="text" class="form-control" id="editEmail" aria-describedby="emailHelp" >
      </div><br>
      <div class="form-group">
        <label for="exampleInputPassword1">Image URL</label>
        <input v-model="image_url" type="url" class="form-control" id="exampleInputPassword1" >
      </div><br>
      <div class="form-group">
        <label for="exampleInputEmail1">Price</label>
        <input v-model="price" type="number" class="form-control" id="editEmail" aria-describedby="emailHelp" >
      </div><br>
      <div class="form-group">
        <label for="exampleInputEmail1">Stock</label>
        <input v-model="stock" type="number" class="form-control" id="editEmail" aria-describedby="emailHelp" >
      </div><br>
      <button type="submit" class="btn btn-primary">Confirm Edit</button>
    </form>
</div>
</template>

<script>
import axios from '../axios/axios.js'
import Swal from 'sweetalert2'
// let query

export default {
  name: 'Edit',
  data: function () {
    return {
      id: this.$route.params.id,
      name: '',
      image_url: '',
      price: 0,
      stock: 0
    }
  },
  methods: {
    edit () {
      axios.put(`/products/${this.id}`, {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          this.name = ''
          this.image_url = ''
          this.price = 0
          this.stock = 0
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Edit Succesful',
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  // created () {
  //   this.id = this.$route.params.id
  //   this.test = this.$route.params.id
  //   axios.get('/products', {
  //     headers: {
  //       access_token: localStorage.getItem('access_token')
  //     }
  //   })
  //     .then(data => {
  //       query = data.data.filter(product => product.id === Number(this.id))
  //       console.log(query)
  //       // this.product = query[0]
  //       // console.log(this.product)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
  created () {
    // this.id = this.$route.params.id
    axios.get(`/products/${this.id}`, {
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(data => {
        this.name = data.data.name
        this.image_url = data.data.image_url
        this.price = data.data.price
        this.stock = data.data.stock
        console.log(this.name)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>

</style>
