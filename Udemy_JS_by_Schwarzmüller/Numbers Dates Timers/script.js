"use strict"

///////////////////////////////////////
// Converting and Checking Numbers

console.log(23 == 23.0)
console.log(0.1 + 0.3 === 0.4)

// converting
console.log(Number("23"))
console.log(+"23")

// parsing
console.log(Number.parseInt("30px"))
console.log(Number.parseInt("em30"))
console.log(Number.parseInt("30px", 2))
console.log(Number.parseInt("2.5rem"))
console.log(Number.parseFloat("   2.5rem   "))

console.log(Number.isNaN(20))
console.log(Number.isNaN("20"))
console.log(Number.isNaN(+"20px"))
console.log(Number.isNaN(23 / 0))

// checking if the value is a number
console.log(Number.isFinite(23 / 0))

///////////////////////////////////////
// Math and Rounding

console.log(Math.sqrt(25))
console.log(25 ** (1 / 2))
console.log(8 ** (1 / 3))

console.log(Math.max(5, 18, 23, 11, 2))
console.log(Math.max(5, 18, "23", 11, 2))
console.log(Math.max(5, 18, "23px", 11, 2))
console.log(Math.min(5, 18, 23, 11, 2))

console.log(Math.PI * Number.parseFloat("10px") ** 2)

console.log(Math.trunc(Math.random() * 6) + 1)

const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min) + 1) + min
console.log(randomInt(10, 20))

// Rounding integers
console.log(Math.round(23.3))
console.log(Math.round(23.9))

console.log(Math.ceil(23.3))
console.log(Math.ceil(23.9))

console.log(Math.floor(23.3))
console.log(Math.floor("23.9"))

console.log(Math.trunc(23.3))

console.log(Math.trunc(-23.3))
console.log(Math.floor(-23.3))

// Rounding decimals
console.log((2.7).toFixed(0))
console.log((2.7).toFixed(3))
console.log((2.345).toFixed(2))
console.log(+(2.345).toFixed(2))
