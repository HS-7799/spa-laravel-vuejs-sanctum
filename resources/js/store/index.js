import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)


import user from './user.js'
import post from './post.js'


const store = new Vuex.Store({
    modules : {
        user,
        post
    },
    plugins: [createPersistedState()]
})

export default store