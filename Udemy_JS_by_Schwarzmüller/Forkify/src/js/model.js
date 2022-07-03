import { async } from "regenerator-runtime"
import { API_URL } from "./config.js"
import { getJsonResponseData } from "./helper.js"

export const state = {
    recipe: {},
}

export const loadRecipe = async function (id) {
    try {
        const jsonData = await getJsonResponseData(`${API_URL}/${id}`)
        const { recipe } = jsonData.data
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cooking_time: recipe.cooking_time,
            ingredients: recipe.ingredients,
        }
        console.log(state.recipe)
    } catch (error) {
        console.error(`${error} 💥💥💥💥💥`)
    }
}
