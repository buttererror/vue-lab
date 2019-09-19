<template>
  <div>
    <b-table small :fields="fields" :items="items">
      <!-- A virtual column -->
      <template v-slot:cell(index)="data">
        {{ data.index + 1 }}
      </template>

      <!-- A custom formatted column -->
      <template v-slot:cell(name)="data">
        <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b>
      </template>

      <!-- A virtual composite column -->
      <template v-slot:cell(easew)="data">
        <a href="#" @click="showPhoto(data.item.photo)">
          <img
            :src="data.item.photo"
            width="50px"
            height="50px"/>
        </a>
      </template>

      <!-- Optional default data cell scoped slot -->
      <template v-slot:cell()="data">
        <i>{{ data.value }}</i>
      </template>
    </b-table>
    <photo-modal :photo-src="src"></photo-modal>
  </div>
</template>

<script>
  import PhotoModal from "./photoModal";

  export default {
    components: {PhotoModal},
    data() {
      return {
        src: null,
        fields: [
          // A virtual column that doesn't exist in items
          'index',
          // A column that needs custom formatting
          {key: 'name', label: 'Full Name'},
          // A regular column
          'age',
          // A regular column
          'sex',
          // A virtual column made up from two fields
          {key: 'easew', label: 'image'}
        ],
        items: [
          {
            name: {first: 'John', last: 'Doe'}, sex: 'Male', age: 42,
            photo: "https://allthatsinteresting.com/wordpress/wp-content/uploads/2019/02/bumper-carts-in-chernobyl.jpg"
          },
          {
            name: {first: 'Jane', last: 'Doe'}, sex: 'Female', age: 36,
            photo: "https://image.shutterstock.com/z/stock-photo-colorful-flower-on-dark-tropical-foliage-nature-background-721703848.jpg"
          },
          {
            name: {first: 'Rubin', last: 'Kincade'}, sex: 'Male', age: 73,
            photo: "https://image.shutterstock.com/z/stock-photo-colorful-flower-on-dark-tropical-foliage-nature-background-721703848.jpg"
          },
          {
            name: {first: 'Shirley', last: 'Partridge'}, sex: 'Female', age: 62,
            photo: "https://images2.minutemediacdn.com/image/upload/c_crop,h_2172,w_3864,x_0,y_202/f_auto,q_auto,w_1100/v1560973712/shape/mentalfloss/586059-istock-1133799589.jpg"
          }
        ]
      }
    },
    methods: {
      showPhoto(src) {
        this.src = src;
        this.$modal.show('photoModal');
      },
    }
  }
</script>