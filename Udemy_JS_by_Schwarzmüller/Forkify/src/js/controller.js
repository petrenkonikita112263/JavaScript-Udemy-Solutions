import * as model from "./model.js"
import recipeView from "./views/recipe_view.js"
import searchView from "./views/search_view.js"
import resultsView from "./views/results_view.js"

import "core-js/stable"
import "regenerator-runtime"

const recipeContainer = document.querySelector(".recipe")

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
        recipeView.renderError(`${error} 💥💥💥💥💥`)
    }
}

const controllerSearchResults = async function () {
    try {
        const query = searchView.getQuery()
        if (!query) return
        await model.loadSearchResults(query)
        resultsView.render(model.getSearchResultsPage())
    } catch (error) {
        throw error
    }
}

const init = function () {
    recipeView.addHandlerRender(controllerRecipe)
    searchView.addHandlerSearch(controllerSearchResults)
}

init()
