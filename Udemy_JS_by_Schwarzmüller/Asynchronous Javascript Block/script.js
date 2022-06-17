"use strict"

const btn = document.querySelector(".btn-country")
const countriesContainer = document.querySelector(".countries")

///////////////////////////////////////
const renderCountry = function (data, className = "") {
    const htmlContent = `
    <article class="country ${className}">
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
}

const getCountryDataAndNeighbour = function (countryName) {
    const request = new XMLHttpRequest()
    request.open(
        "GET",
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    )
    request.send()
    request.addEventListener("load", function () {
        const [data] = JSON.parse(this.responseText)
        renderCountry(data)
        const [...neighboursCodes] = data.borders
        neighboursCodes.forEach((codeName) => {
            if (!codeName) return
            const request2 = new XMLHttpRequest()
            request2.open(
                "GET",
                `https://restcountries.com/v3.1/alpha/${codeName}`
            )
            request2.send()
            request2.addEventListener("load", function () {
                const [data2] = JSON.parse(this.responseText)
                renderCountry(data2, "neighbour")
            })
        })
    })
}
getCountryDataAndNeighbour("Ukraine")
