export const itemsModule = {
    state: () => ({
        ingredients: [
            {id: "1", name: "df", description:"adfadf"},
            {id: "2", name: "df", description:"adfadf"},
            {id: "3", name: "df", description:"adfadf"},
            {id: "4", name: "df", description:"adfadf"},
            {id: "5", name: "df", description:"adfadf"},
            {id: "6", name: "df", description:"adfadf"},
            {id: "7", name: "df", description:"adfadf"},
            {id: "8", name: "df", description:"adfadf"},
            {id: "9", name: "df", description:"adfadf"},
        ]
    }),
    getters:{
        getIngredienrts(state){
            return state.ingredients
        }
    },
    mutations:{
        updateIngredients(state, newArray){
            state.ingredients = newArray
        }
    },
    actions:{

    }
}