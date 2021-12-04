const state = {
    posts : []
}

const getters = {

    allPosts(state)
    {
        return state.posts
    },

    getOnePost(state)
    {
        return (postId) => state.posts.find(post => post.id == postId)
    }

}

const mutations = {

    setPosts(state,posts)
    {
        state.posts = posts
    }

}

const actions = {

    setPosts({commit},posts)
    {
        commit('setPosts',posts)
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}