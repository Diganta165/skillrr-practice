import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {routes} from './Router/routes'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAxios, axios)

const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
