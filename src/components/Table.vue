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
          <img :src="product.image_url" alt="">
        </td>
        <!-- <td>{{product.image_url}}</td> -->
        <td>Rp. {{numberWithCommas(product.price)}}</td>
        <td>{{product.stock}}</td>
        <td>
          <!-- <div> -->
            <button @click="edit(product.id)">edit</button>
            <button @click="deleteProduct(product.id)">Delete</button>
          <!-- </div> -->
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Table',
  props: ['products'],
  methods: {
    numberWithCommas (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    edit (id) {
      this.$emit('edit', id)
    },
    deleteProduct (id) {
      this.$emit('deleteProduct', id)
    }
  }
}
</script>

<style>

</style>
