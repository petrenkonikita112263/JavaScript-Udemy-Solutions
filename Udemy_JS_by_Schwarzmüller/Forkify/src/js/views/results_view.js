import View from "./View.js"

class ResultsView extends View {
    _parentElement = document.querySelector(".results")
    _errorMessage = "No recipes found for your query! Please try again ;)"
    _message = ""
}

export default new ResultsView()
