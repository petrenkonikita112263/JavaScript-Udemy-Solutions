import { async } from "regenerator-runtime"
import { API_URL } from "./config.js"
import { getJsonResponseData } from "./helper.js"

export const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
    },
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
        throw error
    }
}

export const loadSearchResults = async function (query) {
    try {
        state.search.query = query
        const jsonData = await getJsonResponseData(`${API_URL}?search=${query}`)
        state.search.results = jsonData.data.recipes.map((recipe) => {
            return {
                id: recipe.id,
                title: recipe.title,
                publisher: recipe.publisher,
                image: recipe.image_url,
                ...(recipe.key && { key: recipe.key }),
            }
        })
    } catch (error) {
        throw error
    }
}
