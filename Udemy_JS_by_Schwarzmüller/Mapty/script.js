"use strict"

// prettier-ignore
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const form = document.querySelector(".form")
const containerWorkouts = document.querySelector(".workouts")
const inputType = document.querySelector(".form__input--type")
const inputDistance = document.querySelector(".form__input--distance")
const inputDuration = document.querySelector(".form__input--duration")
const inputCadence = document.querySelector(".form__input--cadence")
const inputElevation = document.querySelector(".form__input--elevation")

let map, mapEvent

class Workout {
    date = new Date()
    id = (Date.now() + "").slice(-10)

    constructor(coordinates, distance, duration) {
        this.coordinates = coordinates
        this.distance = distance
        this.duration = duration
    }

    _generateDescription() {
        this.description = `
        ${this.type[0].toUpperCase()}${this.type.slice(
            1
        )} on ${this.date.getMonth()} ${this.date.getDate()}
        `
    }
}

class Running extends Workout {
    type = "running"
    constructor(coordinates, distance, duration, cadence) {
        super(coordinates, distance, duration)
        this.cadence = cadence
        this.calculatePace()
        this._generateDescription()
    }

    calculatePace() {
        this.pace = this.duration / this.distance
        return this.pace
    }
}

class Cycling extends Workout {
    type = "cycling"
    constructor(coordinates, distance, duration, elevationGain) {
        super(coordinates, distance, duration)
        this.elevationGain = elevationGain
        this.calculateSpeed()
        this._generateDescription()
    }

    calculateSpeed() {
        this.speed = this.distance / (this.duration / 60)
        return this.speed
    }
}

const testRunning = new Running([39, -12], 5.2, 24, 178)
const testCycling = new Cycling([39, -12], 27, 95, 523)
console.log(testRunning, testCycling)

class App {
    #map
    #mapEvent
    #workouts = []

    constructor() {
        this._getPosition()
        form.addEventListener("submit", this._newWorkout.bind(this))
        inputType.addEventListener("change", this._toogleElevationField)
    }

    _getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this._loadMap.bind(this),
                function () {
                    alert("Could not get the position")
                }
            )
        }
    }

    _loadMap(position) {
        const { latitude } = position.coords
        const { longitude } = position.coords
        const coords = [latitude, longitude]
        this.#map = L.map("map").setView(coords, 15)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.#map)
        this.#map.on("click", this._showForm.bind(this))
    }

    _showForm(mapE) {
        this.#mapEvent = mapE
        form.classList.remove("hidden")
        inputDistance.focus()
    }

    _hideForm() {
        inputDistance.value =
            inputDuration.value =
            inputCadence.value =
            inputElevation.value =
                ""
        form.style.display = "none"
        form.classList.add("hidden")
        setTimeout(() => (form.style.display = "grid"), 1000)
    }

    _toogleElevationField() {
        inputElevation
            .closest(".form__row")
            .classList.toggle("form__row--hidden")
        inputCadence.closest(".form__row").classList.toggle("form__row--hidden")
    }

    _newWorkout(e) {
        const allNumbers = (...inputs) =>
            inputs.every((currentInput) => Number.isFinite(currentInput))
        const allPositives = (...inputs) =>
            inputs.every((currentInput) => currentInput >= 0)
        e.preventDefault()
        const type = inputType.value
        const distance = +inputDistance.value
        const duration = +inputDuration.value
        const { lat, lng } = this.#mapEvent.latlng
        let workout
        if (type === "running") {
            const cadence = +inputCadence.value
            if (
                !allNumbers(distance, duration, cadence) ||
                !allPositives(distance, duration, cadence)
            ) {
                return alert("Inputs must be positive numbers")
            }
            workout = new Running([lat, lng], distance, duration, cadence)
        }
        if (type === "cycling") {
            const elevation = +inputElevation.value
            if (
                !allNumbers(distance, duration, elevation) ||
                !allPositives(distance, duration)
            ) {
                return alert("Inputs must be positive numbers")
            }
            workout = new Cycling([lat, lng], distance, duration, elevation)
        }
        this.#workouts.push(workout)
        this._renderWorkoutMarker(workout)
        this._renderWorkout(workout)
        this._hideForm()
    }

    _renderWorkoutMarker(workout) {
        L.marker(workout.coordinates)
            .addTo(this.#map)
            .bindPopup(
                L.popup({
                    maxWidth: 250,
                    minWidth: 100,
                    autoClose: false,
                    closeOnClick: false,
                    className: `${workout.type}-popup`,
                })
            )
            .setPopupContent(
                `${workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"} ${
                    workout.description
                }`
            )
            .openPopup()
    }

    _renderWorkout(workout) {
        let htmlContent = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${
              workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
          `
        if (workout.type === "running") {
            htmlContent += `
            <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.pace.toFixed(1)}</span>
                <span class="workout__unit">min/km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${workout.cadence}</span>
                <span class="workout__unit">spm</span>
            </div>
      </li>
            `
        }
        if (workout.type === "cycling") {
            htmlContent += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.speed.toFixed(
                        1
                    )}</span>
                    <span class="workout__unit">km/h</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⛰</span>
                    <span class="workout__value">${workout.elevationGain}</span>
                    <span class="workout__unit">m</span>
                </div>
            </li>
                `
        }
        form.insertAdjacentHTML("afterend", htmlContent)
    }
}

const app = new App()
