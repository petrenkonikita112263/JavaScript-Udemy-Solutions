"use strict"

var modal = document.querySelector(".modal")
var ovarlay = document.querySelector(".overlay")
var buttonCloseModal = document.querySelector(".close-modal")
var buttonsShowModal = document.querySelectorAll(".show-modal")

for (let index = 0; index < buttonsShowModal.length; index++) {
    let element = buttonsShowModal[index].textContent;
    console.log(element)
}