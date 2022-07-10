import View from "./View.js"
import previewView from "./preview_view.js"

class BookmarkView extends View {
    _parentElement = document.querySelector(".bookmarks__list")
    _errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it :)"
    _message = ""

    _generateMarkup() {
        return this._data
            .map((result) => previewView.render(result, false))
            .join("")
    }
}

export default new BookmarkView()
