"use strict"

// console.log(document.querySelector(".message").textContent)
// document.querySelector(".message").textContent = "🎉 Correct Number"
// console.log(document.querySelector(".message").textContent)

// document.querySelector(".number").textContent = 13
// document.querySelector(".score").textContent = 13

// document.querySelector(".guess").value = 13

document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value)
    console.log(guess, typeof guess)
    if (!guess) {
        document.querySelector(".message").textContent = "❌ No Number"
    }
})