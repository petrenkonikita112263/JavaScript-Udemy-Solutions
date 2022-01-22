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
// The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item)

for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`)
}

console.log([...menu.entries()])


///////////////////////////////////////
// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
    const open = restaurant.openingHours[day] ?.open ?? "closed"
    console.log(`On ${day}, we open at ${open}`)
}

// Methods
console.log(restaurant.order ?.(0, 1) ?? "Method does not exist")
console.log(restaurant.orderRisotto ?.(0, 1) ?? "Method does not exist")

// Arrays
const users = [{
    name: "Jonas",
    email: "hello@jonas.io"
}]
// const users = [];

console.log(users[0] ?.name ?? "User array empty")

if (users.length > 0) console.log(users[0].name)
else console.log("user array empty")


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

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/