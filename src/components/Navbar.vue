<template>
    <nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button @click="onClick">Add Task</button>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    onClick () {
      this.$emit('onClick', {})
    }
  }
}
</script>

<style>

</style>
