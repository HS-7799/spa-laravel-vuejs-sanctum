import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)


import user from './user.js'


const store = new Vuex.Store({
    modules : {
        user
    },
    plugins: [createPersistedState()]
})

export default store