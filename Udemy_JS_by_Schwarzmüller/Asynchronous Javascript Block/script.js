"use strict"

const btn = document.querySelector(".btn-country")
const countriesContainer = document.querySelector(".countries")

///////////////////////////////////////
const getCountryData = function (countryName) {
    const request = new XMLHttpRequest()
    request.open(
        "GET",
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    )
    request.send()
    request.addEventListener("load", function () {
        console.log(this.responseText)
        const [data] = JSON.parse(this.responseText)
        const htmlContent = `
    <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
                +data.population / 1_000_000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗺</span>${
                data.area
            } km<sup>2</sup> </p>
            <p class="country__row"><span>🗣️</span>${
                Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
                Object.keys(data.currencies)[0]
            }</p>
          </div>
        </article>
    `
        countriesContainer.insertAdjacentHTML("beforeend", htmlContent)
        countriesContainer.style.opacity = 1
    })
}
getCountryData("Ukraine")
