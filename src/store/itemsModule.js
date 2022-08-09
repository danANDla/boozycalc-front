export const itemsModule = {
    state: () => ({
        ingredients: []
    }),
    getters: {
        getIngredients(state) {
            return state.ingredients
        }
    },
    mutations: {
        updateIngredients(state, newArray) {
            state.ingredients = newArray
        }
    },
    actions: {},
    namespaced: true
}