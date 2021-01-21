import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.use(require('vue-moment'));

import Movie from "./components/Movie.vue"


Vue.config.productionTip = false

const routes = [
  { path: '/movie/:id', component: Movie }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')