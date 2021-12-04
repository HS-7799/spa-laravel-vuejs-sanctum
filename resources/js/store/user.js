const state = {
    isLoggedIn : false,
    auth : null
}

const getters = {
    getLoggedIn(state)
    {
        return state.isLoggedIn
    },
    getAuth(state)
    {
        return state.auth
    },
    getAuthId(state)
    {
        return state.auth ? state.auth.id : null
    }
}

const mutations = {

    setLoggedIn(state,loggedIn)
    {
        state.isLoggedIn = loggedIn
    },
    setAuth(state,user)
    {
        state.auth = user
    }

}

const actions = {
    setLoggedIn({commit},loggedIn)
    {
        commit('setLoggedIn',loggedIn)
    },
    setAuthUser({commit},user)
    {
        commit('setAuth',user)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}