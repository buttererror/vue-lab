<template>
  <div>
    <h1>I am the parent</h1>
    <Child>
      <!-- send this to the child component -->
      <p>slot slot slot</p>
    </Child>
  </div>
</template>

<script>
  import Child from "./Child";

  export default {
    name: "Parent",
    components: {Child}
  }
</script>

<style scoped>

</style>