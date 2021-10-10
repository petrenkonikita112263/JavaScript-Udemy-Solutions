let resultsMessageElement = document.getElementById("results-msg")
let matchedMessageElement = document.getElementById("match-msg")
let misMatchedMessageElement = document.getElementById("no-match-msg")
let numberToGuessElement = document.getElementById("number-to-guess")
let guessInputElement = document.getElementById("number-guessed")
let testButtonElement = document.getElementById("test-button")
testButtonElement.addEventListener("click", testMatch)

function testMatch(element) {
    matchedMessageElement.style.display = "none"
    misMatchedMessageElement.style.display = "none"
    resultsMessageElement.style.display = "none"
    let numberGuessed = parseInt(guessInputElement.value)
    if (!isNaN(numberGuessed) && (numberGuessed > 0) && (numberGuessed <= 10)) {
        resultsMessageElement.style.display = "block"
        let numberToGuess = Math.floor(Math.random() * 10 + 1)
        if (numberGuessed == numberToGuess) {
            matchedMessageElement.style.display = "inline"
        } else {
            misMatchedMessageElement.style.display = "inline"
        }
        numberToGuessElement.innerHTML = numberToGuess
    }
}