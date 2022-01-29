"use strict"

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
}


// Data needed for first part of the section
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    // ES6 echanced object literals
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery({
        starterIndex = 1,
        mainIndex = 0,
        time = "20:00",
        address
    }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        )
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(ing1, ing2, ing3)
    }
}

///////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries

// Property NAMES
const properties = Object.keys(openingHours)
console.log(properties)

let openStr = `We are open on ${properties.length} days: `
for (const day of properties) {
  openStr += `${day}, `
}
console.log(openStr)

// Property VALUES
const values = Object.values(openingHours)
console.log(values)

// Entire object
const entries = Object.entries(openingHours)
console.log(entries)

// [key, value]
for (const [day, { open, close }] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`)
}