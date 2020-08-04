export const state = () => ( {
    posts: []
})

export const actions = {
    async fetchPosts({commit}){
        const posts  = await this.$axios.$get('http://dm-code.ru/wp-json/wp/v2/posts?_embed')   
        commit('setPosts', posts)
    }
}

export const getters = {
    getPosts : s => s.posts
}

export const mutations ={
    setPosts(state, posts) {
        state.posts = posts
    }
}