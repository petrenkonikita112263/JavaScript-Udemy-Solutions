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

///////////////////////////////////////
// The Remainder Operator

console.log(5 % 2)
console.log(5 / 2) // 5 = 2 * 2 + 1

console.log(8 % 3)
console.log(8 / 3) // 8 = 2 * 3 + 2

console.log(6 % 2)
console.log(6 / 2)

console.log(7 % 2)
console.log(7 / 2)

const isEven = (n) => n % 2 === 0
console.log(isEven(8))
console.log(isEven(23))
console.log(isEven(514))

///////////////////////////////////////
// Working with BigInt

console.log(2 ** 53 - 1)
console.log(Number.MAX_SAFE_INTEGER)
console.log(2 ** 53 + 1)
console.log(2 ** 53 + 2)
console.log(2 ** 53 + 3)
console.log(2 ** 53 + 4)

console.log(4838430248342043823408394839483204n)
console.log(BigInt(48384302))

// Operations
console.log(10000n + 10000n)
console.log(36286372637263726376237263726372632n * 10000000n)
// console.log(Math.sqrt(16n))

const huge = 20289830237283728378237n
const num = 23
console.log(huge * BigInt(num))

// Exceptions
console.log(20n > 15)
console.log(20n === 20)
console.log(typeof 20n)
console.log(20n == "20")

console.log(huge + " is REALLY big!!!")

///////////////////////////////////////
// Creating Dates

const now = new Date()
console.log(now)
console.log(new Date("December 31, 2022"))
console.log(new Date(2037, 10, 19, 15, 23, 5))

console.log(new Date(0))
console.log(new Date(3 * 24 * 60 * 60 * 1000))

const future = new Date(2037, 10, 19, 15, 23)
console.log(future)
console.log(future.getFullYear())
console.log(future.getMonth())
console.log(future.getDate())
console.log(future.getDay())
console.log(future.getHours())
console.log(future.getMinutes())
console.log(future.getSeconds())
console.log(future.toISOString())
console.log(future.getTime())

console.log(new Date(2142256980000))

console.log(Date.now())

future.setFullYear(2040)
console.log(future)

console.log(+future)
const calcDayPassed = (date1, date2) =>
    Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)
console.log(calcDayPassed(new Date(2037, 3, 14), new Date(2037, 3, 24)))

///////////////////////////////////////
// Internationalizing Numbers (Intl)
const anotherNum = 3884764.23
const anotherOption = {
    style: "currency",
    unit: "mile-per-hour",
    currency: "EUR",
}
console.log(new Intl.NumberFormat("en-Us", anotherOption).format(anotherNum))

///////////////////////////////////////
// Timers
const ingredients = ["olives", "spinach"]
const pizzaTimer = setTimeout(
    (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
    3000,
    ...ingredients
)
console.log("Waiting...")

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer)

// setInterval
setInterval(function () {
    console.log(now)
}, 1000)