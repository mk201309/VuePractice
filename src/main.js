import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'; //載入 axios
import VueAxios from 'vue-axios'; //載入 vue-axios
import Vuex from 'vuex';
import store from './store';

import './bus'

Vue.config.productionTip = false

Vue.use(VueAxios, axios, Vuex) //啟用 vue-axios, axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
