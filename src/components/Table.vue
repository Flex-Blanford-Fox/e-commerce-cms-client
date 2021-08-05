<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">URL</th>
        <th scope="col">Stock</th>
        <th scope="col">Price</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{product.id}}</td>
        <td>{{product.name}}</td>
        <td>
          <img width="50" :src="product.image_url" alt="">
        </td>
        <!-- <td>{{product.image_url}}</td> -->
        <td>Rp. {{numberWithCommas(product.price)}}</td>
        <td>{{product.stock}}</td>
        <td>
          <!-- <div> -->
            <button class="btn btn-outline-secondary" @click="edit(product.id)">edit</button>
            <button class="btn btn-outline-danger" @click="deleteProduct(product.id)">Delete</button>
          <!-- </div> -->
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import Swal from 'sweetalert2'

export default {
  name: 'Table',
  // props: ['products'],
  computed: {
    products () {
      // return this.$store.state.products
      return this.$store.getters.filtered
    },
    filteredProducts () {
      return this.$store.getters.filtered
    }
  },
  methods: {
    numberWithCommas (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    edit (id) {
      // this.$emit('edit', id)
      this.$router.push({ path: `/edit/${id}` })
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
      // Swal.fire({
      //   title: 'Are you sure?',
      //   icon: 'warning',
      //   showCancelButton: true,
      //   confirmButtonColor: '#3085d6',
      //   cancelButtonColor: '#d33',
      //   confirmButtonText: 'Yes, delete it!'
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     Swal.fire(
      //       'Deleted!'
      //     )
      //     this.$emit('deleteProduct', id)
      //   }
      // })
    }
  }
}
</script>

<style>

</style>
