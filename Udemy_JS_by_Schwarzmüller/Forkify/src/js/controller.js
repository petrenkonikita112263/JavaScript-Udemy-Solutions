import * as model from "./model.js"
import recipeView from "./views/recipe_view.js"

import "core-js/stable"
import "regenerator-runtime"

const recipeContainer = document.querySelector(".recipe")

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(
                new Error(`Request took too long! Timeout after ${s} second`)
            )
        }, s * 1000)
    })
}

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controllerRecipe = async function () {
    try {
        const id = window.location.hash.slice(1)
        if (!id) return
        recipeView.renderSpinner()
        await model.loadRecipe(id)
        const { recipe } = model.state.recipe
        recipeView.render(model.state.recipe)
    } catch (error) {
        console.log(error)
    }
}

// prettier-ignore
controllerRecipe()

["hashchange", "load"].forEach((elementCommand) => {
    window.addEventListener(elementCommand, controllerRecipe)
})
