"use strict"

// Data needed for a later exercise
const flights =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30"

// Data needed for first part of the section
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
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

    orderPasta: function (ing1, ing2, ing3) {
        console.log(ing1, ing2, ing3)
    }
}

// Arrays
const arr = [7, 8, 9]
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr)

const goodNewArr = [1, 2, ...arr]
console.log(goodNewArr)

console.log(...goodNewArr)

const newMenu = [...restaurant.mainMenu, "Gnocci"]
console.log(newMenu)

// Copy array
const mainMenuCopy = [...restaurant.mainMenu]
console.log(mainMenuCopy)

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...mainMenuCopy]
console.log(menu)

// Iterables: arrays, strings, maps, sets. NOT objects
const str = "Jonas"
const letters = [...str, " ", "S."]
console.log(letters)
console.log(...str)

const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Let's make pasta! Ingredient 2?"), prompt("Let's make pasta! Ingredient 3?")]
restaurant.orderPasta(...ingredients)

// Objects
const newRestaurant = {
    foundedIn: 1998,
    ...restaurant,
    founder: "Guiseppe"
}
console.log(newRestaurant)

const restaurantCopy = {
    ...restaurant
}
restaurantCopy.name = "Ristorante Roma"
console.log(restaurantCopy.name)
console.log(restaurant.name)