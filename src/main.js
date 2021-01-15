import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import TopOfYearList from "./components/TopOfYearList"


Vue.config.productionTip = false

Vue.use(VueRouter)
const routes = [
   { path: '/top-of-year', component: TopOfYearList}
 ];

 const router = new VueRouter({
  routes 
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')