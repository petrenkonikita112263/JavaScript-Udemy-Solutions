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

///////////////////////////////////////
// Short Circuiting (&& and ||)
console.log("---- OR ----")
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || "Jonas")
console.log("" || "Jonas")
console.log(true || 0)
console.log(undefined || null)
console.log(undefined || 0 || "" || "Hello" || 23 || null)

restaurant.numGuests = 23
const quests1 = restaurant.numGuests ? restaurant.numGuests : 19
console.log(quests1)

const quests2 = restaurant.numGuests || 10
console.log(quests2)

console.log("---- AND ----")
console.log(0 && "Jonas")
console.log(7 && "Jonas")
console.log("Hello" && 23 && null && "Jonas")

if (restaurant.orderPasta) {
    restaurant.orderPasta("Mushrooms", "Spinach", "Chees")
}
restaurant.orderPasta && restaurant.orderPasta("Mushrooms", "Spinach", "Chees")