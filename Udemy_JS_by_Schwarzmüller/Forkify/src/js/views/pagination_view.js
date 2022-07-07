import icons from "url:../../img/icons.svg"
import View from "./view.js"

class PaginationView extends View {
    _parentElement = document.querySelector(".pagination")

    _generateMarkup() {
        const currentPage = this._data.page
        const numberOfPages = Math.ceil(
            this._data.results.length / this._data.resultsPerPage
        )
        if (currentPage === 1 && numberOfPages > 1) {
            return `
        <button data-goto="${
            currentPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `
        }
        if (currentPage === numberOfPages && numberOfPages > 1) {
            return `
        <button data-goto="${
            currentPage - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currentPage - 1}</span>
        </button>
      `
        }
        if (currentPage < numberOfPages) {
            return `
        <button data-goto="${
            currentPage - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currentPage - 1}</span>
        </button>
        <button data-goto="${
            currentPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `
        }
        return ""
    }

    addHandlerClick(handler) {
        this._parentElement.addEventListener("click", function (e) {
            const button = e.target.closest(".btn--inline")
            if (!button) return
            const goToPage = +button.dataset.goto
            handler(goToPage)
        })
    }
}

export default new PaginationView()
