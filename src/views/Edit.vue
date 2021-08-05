<template>
<div>
  <Navbar></Navbar>
  <div class = "container">
      <!-- <p v-for="product in products" :key="product.id">{{product.id}}</p> -->
      <h1>Edit Product</h1>
      <h1>#{{$route.params.id}}</h1>
      <form @submit.prevent="edit">
        <div class="form-group">
          <label for="exampleInputEmail1">Name of Product</label>
          <input v-model="onEdit.name" type="text" class="form-control" id="1" aria-describedby="emailHelp" >
        </div><br>
        <div class="form-group">
          <label for="exampleInputPassword1">Image URL</label>
          <input v-model="onEdit.image_url" type="url" class="form-control" id="2" >
        </div><br>
        <div class="form-group">
          <label for="exampleInputEmail1">Price</label>
          <input v-model="onEdit.price" type="number" class="form-control" id="3" aria-describedby="emailHelp" >
        </div><br>
        <div class="form-group">
          <label for="exampleInputEmail1">Stock</label>
          <input v-model="onEdit.stock" type="number" class="form-control" id="4" aria-describedby="emailHelp" >
        </div><br>
        <button type="submit" class="btn btn-primary">Confirm Edit</button>
      </form>
  </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
// import axios from '../axios/axios.js'
// import Swal from 'sweetalert2'
// let query

export default {
  name: 'Edit',
  components: { Navbar },
  data: function () {
    return {
      id: this.$route.params.id,
      name: '',
      image_url: '',
      price: 0,
      stock: 0
    }
  },
  computed: {
    onEdit () {
      return this.$store.state.product
    }
  },
  methods: {
    edit () {
      const object = {
        id: Number(this.onEdit.id),
        name: this.onEdit.name,
        image_url: this.onEdit.image_url,
        price: Number(this.onEdit.price),
        stock: Number(this.onEdit.stock)
      }
      this.$store.dispatch('editProduct', object)
      // axios.put(`/products/${this.id}`, {
      //   name: this.name,
      //   image_url: this.image_url,
      //   price: Number(this.price),
      //   stock: Number(this.stock)
      // }, {
      //   headers: {
      //     access_token: localStorage.getItem('access_token')
      //   }
      // })
      //   .then(data => {
      //     this.name = ''
      //     this.image_url = ''
      //     this.price = 0
      //     this.stock = 0
      //     Swal.fire({
      //       position: 'top-end',
      //       icon: 'success',
      //       title: 'Edit Succesful',
      //       showConfirmButton: false,
      //       timer: 1500
      //     })
      //     this.$router.push('/products')
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
    }
  },
  created () {
    // this.id = this.$route.params.id
  //   axios.get(`/products/${this.id}`, {
  //     headers: {
  //       access_token: localStorage.getItem('access_token')
  //     }
  //   })
  //     .then(data => {
  //       this.name = data.data.name
  //       this.image_url = data.data.image_url
  //       this.price = data.data.price
  //       this.stock = data.data.stock
  //       console.log(this.name)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
    this.$store.dispatch('getOne', this.id)
  }
}
</script>

<style>

</style>
