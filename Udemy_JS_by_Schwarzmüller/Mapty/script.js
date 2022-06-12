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
}

class Running extends Workout {
    constructor(coordinates, distance, duration, cadence) {
        super(coordinates, distance, duration)
        this.cadence = cadence
        this.calculatePace()
    }

    calculatePace() {
        this.pace = this.duration / this.distance
        return this.pace
    }
}

class Cycling extends Workout {
    constructor(coordinates, distance, duration, elevationGain) {
        super(coordinates, distance, duration)
        this.elevationGain = elevationGain
        this.calculateSpeed()
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

    constructor() {
        this._getPosition()
        form.addEventListener("submit", this._newWorkout.bind(this))
        inputType.addEventListener("change", this._toogleElevationField)
    }

    _getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
                alert("Could not get the position")
            })
        }
    }

    _loadMap(position) {
            const { latitude } = position.coords
            const { longitude } = position.coords
            const coords = [latitude, longitude]
            this.#map = L.map("map").setView(coords, 15)
                    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map)
                this.#map.on("click", this._showForm.bind(this))
        }
    
    _showForm(mapE) {
        this.#mapEvent = mapE
        form.classList.remove("hidden")
        inputDistance.focus()
    }

    _toogleElevationField() {
        inputElevation.closest(".form__row").classList.toggle("form__row--hidden")
        inputCadence.closest(".form__row").classList.toggle("form__row--hidden")
    }

    _newWorkout(e) {
        e.preventDefault()
        inputDistance.value = inputDuration.value = inputElevation.value = inputCadence.value = ""
        const { lat, lng } = this.#mapEvent.latlng
        L.marker([lat, lng]).addTo(this.#map)
            .bindPopup(L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: "running-popup"
            }))
            .setPopupContent("Workout")
            .openPopup()
    }
}

const app = new App()
