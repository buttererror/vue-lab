import Vue from 'vue';
import 'es6-promise/auto';
import store from './store';
import AppRoot from './components/AppRoot';



const app = new Vue({
  el: "#app",
  store,
  components: {AppRoot}

});