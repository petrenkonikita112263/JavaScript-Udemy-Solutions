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

const renderError = function (message) {
    countriesContainer.insertAdjacentText("beforeend", message)
    countriesContainer.style.opacity = 1
}

const getJSONResponse = function (url, errorMessage = "Smth went wrong") {
    return fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (!response.ok)
            throw new Error(`💥💥💥 ${errorMessage} (${response.status})`)
        return response.json()
    })
}

const getCountryDataAndNeighbour = function (countryName) {
    getJSONResponse(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`,
        "There's no country with that name"
    )
        .then((data) => {
            renderCountry(data[0])
            const [...neighboursCodes] = data[0].borders
            neighboursCodes.forEach((codeName) => {
                if (!codeName) return
                const path = `https://restcountries.com/v3.1/alpha/${codeName}`
                getJSONResponse(
                    `https://restcountries.com/v3.1/alpha/${codeName}`,
                    "There's no country with this code"
                ).then((data) => {
                    renderCountry(data[0], "neighbour")
                })
            })
        })
        .catch((error) =>
            renderError(
                `Something went wrong 💥💥💥 ${error.message}. Try again!`
            )
        )
        .finally(() => {
            countriesContainer.style.opacity = 1
        })
}

getCountryDataAndNeighbour("Ukraine")
