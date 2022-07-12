import * as model from "./model.js"
import recipeView from "./views/recipe_view.js"
import searchView from "./views/search_view.js"
import resultsView from "./views/results_view.js"
import paginationView from "./views/pagination_view.js"
import bookmarkView from "./views/bookmark_view.js"
import addRecipeView from "./views/add_recipe_view.js"

import "core-js/stable"
import "regenerator-runtime"

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controllerRecipe = async function () {
    try {
        const id = window.location.hash.slice(1)
        if (!id) return
        recipeView.renderSpinner()
        bookmarkView.update(model.state.bookmarks)
        await model.loadRecipe(id)
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
        paginationView.render(model.state.search)
    } catch (error) {
        throw error
    }
}

const controllerPagination = function (goToPage) {
    resultsView.render(model.getSearchResultsPage(goToPage))
    paginationView.render(model.state.search)
}

const controllerServings = function (newServings) {
    model.updateServings(newServings)
    recipeView.update(model.state.recipe)
}

const controllerAddBookmark = function () {
    if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe)
    else model.removeBookmark(model.state.recipe.id)
    recipeView.update(model.state.recipe)
    bookmarkView.render(model.state.bookmarks)
}

const controllerBookmarks = function () {
    bookmarkView.render(model.state.bookmarks)
}

const controllerAddRecipe = function (newRecipe) {
    console.log(newRecipe)
}

const init = function () {
    bookmarkView.addHandlerRender(controllerBookmarks)
    recipeView.addHandlerRender(controllerRecipe)
    recipeView.addHandlerUpdateServings(controllerServings)
    recipeView.addHandlerAddBookmark(controllerAddBookmark)
    searchView.addHandlerSearch(controllerSearchResults)
    paginationView.addHandlerRender(controllerPagination)
    addRecipeView.addHandlerUpload(controllerAddRecipe)
}

init()
