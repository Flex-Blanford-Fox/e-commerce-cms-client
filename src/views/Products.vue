<template>
<div>
  <Navbar></Navbar>
  <Filterbox></Filterbox>
  <Table :products="products"
    @edit="edit"
    @deleteProduct="deleteProduct"
    ></Table>
  </div>
</template>

<script>
// import axios from '../axios/axios.js'
import Navbar from '../components/Navbar.vue'
import Table from '../components/Table.vue'
import Filterbox from '../components/Filter.vue'

export default {
  name: 'Products',
  data: function () {
    return {
    }
  },
  components: {
    Navbar, Table, Filterbox
  },
  created () {
    this.getAll()
  },

  updated () {
  },

  computed: {
    products () {
      // return this.$store.state.products
      return null
    }
  },

  methods: {
    onClick (payload) {
      // this.$router.push({ name: 'Add' })
    },

    edit (id) {
      // this.$router.push({ path: `/edit/${id}` })
    },

    deleteProduct (id) {
      // this.$store.dispatch('deleteProduct', id)
      // axios.delete(`/products/${id}`, {
      //   headers: {
      //     access_token: localStorage.getItem('access_token')
      //   }
      // })
      //   .then(data => {
      //     this.products.filter(product => product.id !== id)
      //     this.getAll()
      //   })
      //   .catch(err => {
      //     console.log(err.response.data)
      //   })
    },

    getAll () {
      this.$store.dispatch('getAll')
    }
  }
}
</script>
