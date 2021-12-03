import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Dashboard from '../components/Dashboard.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

const routes = [
    { path : '/dashboard', component : Dashboard  },
    { path : '/login', component : Login  },
    { path : '/register', component : Register  },
]




const router = new VueRouter({
    routes,
    mode : 'history'

})

export default router
