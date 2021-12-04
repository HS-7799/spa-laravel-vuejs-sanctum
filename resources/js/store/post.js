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
    },
    removePost(state,postId)
    {
        state.posts = state.posts.filter(post => post.id != postId)
    },
    updatePosts(state,newPost)
    {
        state.posts = state.posts.map(post => {
            return post.id == newPost.id ? newPost : post
        })
    }

}

const actions = {

    setPosts({commit},posts)
    {
        commit('setPosts',posts)
    },
    updatePosts({commit},post)
    {
        commit('updatePosts',post)
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}