import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import { routes } from './routes'
import { store }   from './store/store'
import VueResource from 'vue-resource'

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://fir-stock-market.firebaseio.com/';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
