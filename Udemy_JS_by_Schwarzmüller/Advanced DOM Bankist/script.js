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
//        console.log("LINK", e.target, e.currentTarget)
//        console.log(e.currentTarget === this)
//    }
//)

//document.querySelector(".nav__links").addEventListener(
//    "click", function (e) {
//        this.style.backgroundColor = randomColor()
//        console.log("CONTAINER", e.target, e.currentTarget)
//    }
//)

//document.querySelector(".nav").addEventListener(
//    "click", function (e) {
//        this.style.backgroundColor = randomColor()
//        console.log("NAV", e.target, e.currentTarget)
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

//tab component
const tabs = document.querySelectorAll(".operations__tab")
const tabsContainer = document.querySelector(".operations__tab-container")
const tabsContent = document.querySelectorAll(".operations__content")

tabsContainer.addEventListener("click", function (e) {
    const clickedTab = e.target.closest(".operations__tab")
    if (!clickedTab) return
    tabs.forEach(tab => tab.classList.remove("operations__tab--active"))
    tabsContent.forEach(content => content.classList.remove("operations__content--active"))
    clickedTab.classList.add("operations__tab--active")
    document
        .querySelector(`.operations__content--${clickedTab.dataset.tab}`)
        .classList.add("operations__content--active")
})

//menu fade animation
const nav = document.querySelector(".nav")

const handleHover = function (e) {
    if (e.target.classList.contains("nav__link")) {
        const link = e.target
        const siblings = link.closest(".nav").querySelectorAll(".nav__link")
        const logo = link.closest(".nav").querySelector("img")
        siblings.forEach(el => {
            if (el !== link) el.style.opacity = this
        })
        logo.style.opacity = this
    }
}

nav.addEventListener("mouseover", handleHover.bind(0.5))
nav.addEventListener("mouseout", handleHover.bind(1))

//stick nav menu
const header = document.querySelector(".header")
const navHeight = nav.getBoundingClientRect().height

const stickyNav = function (entries) {
    const [entry] = entries
    if (!entry.isIntersecting) nav.classList.add("sticky")
    else nav.classList.remove("sticky")
}

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
})

headerObserver.observe(header)

// Reveal sections
const allSections = document.querySelectorAll(".section")

const revealSection = function (entries, observer) {
    const [entry] = entries
    if (!entry.isIntersecting) return
    entry.target.classList.remove("section--hidden")
    observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
})

allSections.forEach(function (section) {
    sectionObserver.observe(section)
    section.classList.add("section--hidden")
})

// Lazy loading images
const imgTargets = document.querySelectorAll("img[data-src]")
const loadImg = function (entries, observer) {
    const [entry] = entries
    if (!entry.isIntersecting) return
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img")
    })
    observer.unobserve(entry.target)
}

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: "200px",
})
imgTargets.forEach(img => imgObserver.observe(img))
