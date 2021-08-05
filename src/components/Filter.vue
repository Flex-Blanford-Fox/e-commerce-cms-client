<template>
<div class="container">
  <form @submit.prevent = "filterProduct">
    <div class="form-group m-3">
      <label for="exampleInputEmail1">Filter</label>
      <input v-model="keyword" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Filter by name">
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'Filterbox',
  data: function () {
    return {
      keyword: ''
    }
  },
  methods: {
    filterProduct () {
      // this.$store.dispatch('filterProducts', this.keyword)
      this.$store.commit('SET_KEYWORD', this.keyword)
    }
  }
}
</script>

<style>

</style>
