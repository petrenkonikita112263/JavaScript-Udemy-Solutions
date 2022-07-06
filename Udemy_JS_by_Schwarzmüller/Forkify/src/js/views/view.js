import icons from "url:../../img/icons.svg"

export default class View {
    _clear() {
        this._parentElement.innerHTML = ""
    }

    renderSpinner() {
        const markupContent = `
          <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div>
        `
        this._clear()
        this._parentElement.insertAdjacentHTML("afterbegin", markupContent)
    }

    renderError(message = this._errorMessage) {
        const markupErrorContent = `
          <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
        `
        this._clear()
        this._parentElement.insertAdjacentHTML("afterbegin", markupErrorContent)
    }

    renderMessage(message = this._message) {
        const markupMessageContent = `
          <div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
        `
        this._clear()
        this._parentElement.insertAdjacentHTML(
            "afterbegin",
            markupMessageContent
        )
    }
}
