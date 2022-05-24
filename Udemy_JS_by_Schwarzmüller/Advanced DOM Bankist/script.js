"use strict"

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector(".btn--close-modal")
const btnsOpenModal = document.querySelectorAll(".btn--show-modal")

const openModal = function (e) {
    e.preventDefault()
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

const closeModal = function () {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal))

btnCloseModal.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal()
    }
})

const buttonScrollTo = document.querySelector(".btn--scroll-to")
const firstSection = document.querySelector("#section--1")

buttonScrollTo.addEventListener("click", function (e) {
    firstSection.scrollIntoView({ behavior: "smooth" })
})

//const randomInt = (min, max) =>
//    Math.floor(Math.random() * (max - min + 1) + min)
//const randomColor = () =>
//    `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`

//document.querySelector(".nav__link").addEventListener(
//    "click", function (e) {
//        this.style.backgroundColor = randomColor()
//        console.log('LINK', e.target, e.currentTarget)
//        console.log(e.currentTarget === this)
//    }
//)

//document.querySelector(".nav__links").addEventListener(
//    "click", function (e) {
//        this.style.backgroundColor = randomColor()
//        console.log('CONTAINER', e.target, e.currentTarget)
//    }
//)

//document.querySelector(".nav").addEventListener(
//    "click", function (e) {
//        this.style.backgroundColor = randomColor()
//        console.log('NAV', e.target, e.currentTarget)
//    }
//)

/*page navigation*/
document.querySelector(".nav__link").addEventListener("click", function (e) {
    e.preventDefault()
    if (e.target.classList.contains("nav__link")) {
        const id = e.target.getAttribute("href")
        document.querySelector(id).scrollIntoView({ behavior: "smooth" })
    }
})

