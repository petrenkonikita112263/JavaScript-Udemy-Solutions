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
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            renderCountry(data[0])
            const [...neighboursCodes] = data[0].borders
            neighboursCodes.forEach((codeName) => {
                if (!codeName) return
                const path = `https://restcountries.com/v3.1/alpha/${codeName}`
                console.log(path)
                fetch(path, {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data)
                        renderCountry(data[0], "neighbour")
                    })
            })
        })
}

getCountryDataAndNeighbour("Ukraine")
