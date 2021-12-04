import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Dashboard from '../components/Dashboard.vue'
import Welcome from '../components/Welcome.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import AllPosts from '../components/posts/AllPosts.vue'
import ShowPost from '../components/posts/ShowPost.vue'
import CreatePost from '../components/posts/CreatePost.vue'

const routes = [
    { path : '/', component : Welcome  },
    { path : '/dashboard', component : Dashboard  },
    { path : '/login', component : Login  },
    { path : '/register', component : Register  },
    { path : '/posts', component : AllPosts  },
    { path : '/posts/create', component : CreatePost  },
    { path : '/posts/:id', component : ShowPost  },
]




const router = new VueRouter({
    routes,
    mode : 'history'

})

export default router
