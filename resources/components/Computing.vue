<template>
  <button @click="modify">{{array}}</button>
</template>

<script>
  import Vue from "vue";
  export default {
    name: "Computing",
    data(){
      return {
        count: 0
      }
    },
    methods: {
      modify() {
        this.count++;
        console.log(this.array.length);
        this.array.splice(this.array.length, 0, this.count);
        // Vue.set(this.array, 1, this.count);
        // this.array.push(this.count);
      }
    },
    computed: {
      array: {
        get() {
          return this.$store.getters.array;
        },
        set(value) {
          console.log(value);
          this.$store.commit('updateArray', value);
        }
      }
    }
  }
</script>

<style scoped>

</style>