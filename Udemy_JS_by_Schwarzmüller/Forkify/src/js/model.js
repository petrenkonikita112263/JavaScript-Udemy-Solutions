import { async } from "regenerator-runtime"

export const state = {
    recipe: {},
}

export const loadRecipe = async function (id) {
    try {
        const response = await fetch(
            `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        )
        const jsonData = await response.json()
        if (!response.ok)
            throw new Error(`${jsonData.message} (${jsonData.status})`)
        console.log(response, jsonData)
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
        console.log(error)
    }
}
