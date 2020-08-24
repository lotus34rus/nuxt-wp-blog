export const state = () => ( {
    categories: []
})

export const actions = {
    async fetchCategories({commit}){
        const categories  =  await this.$axios.$get("http://dm-code.ru/wp-json/wp/v2/categories?hide_empty=true"); 
        
        commit('setCategories', categories)
    }
}

export const getters = {
    getCategories : s => s.categories
}

export const mutations ={
    setCategories(state, categories) {
        state.categories = categories
    }
}