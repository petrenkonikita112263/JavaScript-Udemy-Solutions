"use strict"

var modal = document.querySelector(".modal")
var overlay = document.querySelector(".overlay")
var buttonCloseModal = document.querySelector(".close-modal")
var buttonsShowModal = document.querySelectorAll(".show-modal")

var openModal = function () {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

var closeModal = function () {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

for (let index = 0; index < buttonsShowModal.length; index++) {
    buttonsShowModal[index].addEventListener("click", openModal);
}

buttonCloseModal.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)