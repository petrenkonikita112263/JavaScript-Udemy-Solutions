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
}

///////////////////////////////////////
// Destructuring Objects
const {
    name,
    openingHours,
    categories
} = restaurant
console.log(name, openingHours, categories)

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags
} = restaurant
console.log(restaurantName, hours, tags)

// default values
const {
    menu = [], starterMenu: starters = []
} = restaurant
console.log(menu, starters)

// mutating variables
let a = 111;
let b = 999;
const obj = {
    a: 23,
    b: 7,
    c: 14
};
({
    a,
    b

} = obj);
console.log(a, b);

// nested objects
const {
    fri: {
        open: o,
        close: c
    }
} = openingHours
console.log(open, close)

restaurant.orderDelivery({
    time: "22:30",
    address: "Via del Sole, 21",
    mainIndex: 2,
    starterIndex: 2,
})

restaurant.orderDelivery({
    address: "Via del Sole, 21",
    starterIndex: 1,
})

///////////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4]
const [x, y, z] = arr
console.log(x, y, z)
console.log(arr)

let [main, , secondary] = restaurant.categories
console.log(main, secondary);

// switching variables
[main, secondary] = [secondary, main]
console.log(main, secondary)

// reveice 2 return values from the function
console.log(restaurant.order(2, 0))
const [starterCourse, mainCourse] = restaurant.order(2, 0)
console.log(starterCourse, mainCourse)

// nested destructuring
const nested = [2, 4, [5, 6]]
const [i, , [j, k]] = nested
console.log(i, j, k)

// default values
const [p = 1, q = 1, r = 1] = [8, 9]
console.log(p, q, r)