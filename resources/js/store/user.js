const state = {
    isLoggedIn : false
}

const getters = {
    getLoggedIn(state)
    {
        return state.isLoggedIn
    }
}

const mutations = {

    setLoggedIn(state,loggedIn)
    {
        state.isLoggedIn = loggedIn
    }

}

const actions = {
    setLoggedIn({commit},loggedIn)
    {
        commit('setLoggedIn',loggedIn)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}