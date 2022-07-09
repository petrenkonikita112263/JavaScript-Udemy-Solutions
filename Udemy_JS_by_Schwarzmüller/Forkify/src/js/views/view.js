import icons from "url:../../img/icons.svg"

export default class View {
    _data

    render(data, render = true) {
        if (!data || (Array.isArray(data) && data.length === 0))
            return this.renderError()
        this._data = data
        const markup = this._generateMarkup()
        if (!render) return markup
        this._clear()
        this._parentElement.insertAdjacentHTML("afterbegin", markup)
    }

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

    update(data) {
        this._data = data
        const newMarkup = this._generateMarkup()
        const newDOM = document
            .createRange()
            .createContextualFragment(newMarkup)
        const newElements = Array.from(newDOM.querySelectorAll("*"))
        const currentElement = Array.from(
            this._parentElement.querySelectorAll("*")
        )
        newElements.forEach((newEl, i) => {
            const element = currentElement[i]
            if (
                !newEl.isEqualNode(element) &&
                newEl.firstChild?.nodeValue.trim() !== ""
            ) {
                element.textContent = newEl.textContent
            }
            if (!newEl.isEqualNode(element))
                Array.from(newEl.attributes).forEach((attr) =>
                    element.setAttribute(attr.name, attr.value)
                )
        })
    }
}
