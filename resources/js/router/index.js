import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Dashboard from '../components/Dashboard.vue'

const routes = [
    { path : '/dashboard', component : Dashboard  }
]




const router = new VueRouter({
    routes,
    mode : 'history'

})

export default router
