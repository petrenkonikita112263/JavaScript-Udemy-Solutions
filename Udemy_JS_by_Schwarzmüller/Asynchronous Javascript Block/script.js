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

const getJSON = function (url, errorMsg = "Something went wrong") {
    return fetch(url).then((response) => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`)
        return response.json()
    })
}

const getCountryDataAndNeighbour = function (
    countryName,
    errorMsg = "Something went wrong"
) {
    getJSON(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`,
        "Country not found"
    ).then((data) => {
        renderCountry(data[0])
        const [...neighboursCodes] = data[0].borders
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
