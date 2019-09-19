<template>
  <modal name="photoModal"
         :width="800"
         :height="800"

  >
    <div>
      <img :src="photoSrc"/>
    </div>
  </modal>

</template>

<script>
  export default {
    name: "photoModal",
    props: ['photoSrc'],
    data() {
      return {
        // photoSrc: null
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>