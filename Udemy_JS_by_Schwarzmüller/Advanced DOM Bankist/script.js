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
    entry.target.src = entry.target.dataset.src
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

// Slider components
const slider = function () {
    const slides = document.querySelectorAll(".slide")
    const buttonLeft = document.querySelector(".slider__btn--left")
    const buttonRight = document.querySelector(".slider__btn--right")
    const dotContainer = document.querySelector(".dots")
    let currentSlide = 0
    const maxSlides = slides.length

    const createDots = function () {
        slides.forEach(function (_, i) {
            dotContainer.insertAdjacentHTML("beforeend",
                `<button class="dots__dot" data-slide="${i}"></button>`)
        })
    }

    const activateDot = function (slide) {
        document
            .querySelectorAll(".dots__dot")
            .forEach(dot => dot.classList.remove("dots__dot--active"))

        document
            .querySelector(`.dots__dot[data-slide="${slide}"]`)
            .classList.add("dots__dot--active")
    }

    const moveToSlide = function (slide) {
        slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)
    }

    const getNextSlide = function () {
        if (currentSlide === maxSlides - 1) {
            currentSlide = 0
        } else {
            currentSlide++
        }
        moveToSlide(currentSlide)
        activateDot(currentSlide)
    }

    const getPreviousSlide = function () {
        if (currentSlide === 0) {
            currentSlide = maxSlides - 1
        } else {
            currentSlide--
        }
        moveToSlide(currentSlide)
        activateDot(currentSlide)
    }

    const init = function () {
        moveToSlide(0)
        createDots()
        activateDot(0)
    }
    init()

    buttonRight.addEventListener("click", getNextSlide)
    buttonLeft.addEventListener("click", getPreviousSlide)

    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") {
            getPreviousSlide()
        }
        e.key === "ArrowRight" && getNextSlide()
    })

    dotContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("dots__dot")) {
            const { slide } = e.target.dataset
            moveToSlide(slide)
            activateDot(slide)
        }
    })
}

slider()
