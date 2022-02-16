"use strict"

const oneWord = function (str) {
    return str.replace(/ /g, "").toLowerCase()
}

const upperFirstWord = function (str) {
    const [firstWord, ...otherWords] = str.split(" ")
    return [firstWord.toUpperCase(), ...otherWords].join(" ")
}

// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`)
    console.log(`Transformed by: ${fn.name}`)
}

transformer("JavaScript is the best!", upperFirstWord)
transformer("JavaScript is the best!", oneWord)

// JS uses callbacks all the time
const high5 = function () {
    console.log("👋")
}
document.body.addEventListener("click", high5)
