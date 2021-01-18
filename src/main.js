import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import TopOfYearList from "./components/TopOfYearList.vue"


Vue.config.productionTip = false

const routes = [
  { path: '/top-of-year', component: TopOfYearList },
]

const router = new VueRouter({
  mode: 'history',
  routes 
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')