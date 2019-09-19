import Vue from 'vue';
import 'es6-promise/auto';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import store from './store';
import AppRoot from './components/AppRoot';
import VModal from 'vue-js-modal';

Vue.use(VModal);

Vue.use(BootstrapVue);


const app = new Vue({
  el: "#app",
  store,
  components: {AppRoot}

});