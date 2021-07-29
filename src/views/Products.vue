<template>
<div>
  <Navbar @onClick="onClick"></Navbar>
  <Table :products="products"
    @edit="edit"
    @deleteProduct="deleteProduct"></Table>
  </div>
</template>

<script>
import axios from '../axios/axios.js'
import Navbar from '../components/Navbar.vue'
import Table from '../components/Table.vue'

export default {
  name: 'Products',
  data: function () {
    return {
      products: []
    }
  },
  components: {
    Navbar, Table
  },
  created () {
    this.getAll()
  },

  updated () {
  },

  methods: {
    onClick (payload) {
      this.$router.push({ name: 'Add' })
    },

    edit (id) {
      this.$router.push({ path: `/edit/${id}` })
    },

    deleteProduct (id) {
      axios.delete(`/products/${id}`, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          this.products.filter(product => product.id !== id)
          this.getAll()
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },

    getAll () {
      axios.get('/products', {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          this.products = data.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
