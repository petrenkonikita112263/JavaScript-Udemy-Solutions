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
        console.log(
          `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        )
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient)
        console.log(otherIngredients)
    },
}

///////////////////////////////////////
// Sets
const ordersSet = new Set([
    "Pasta",
    "Pizza",
    "Pizza",
    "Risotto",
    "Pasta",
    "Pizza",
  ])
console.log(ordersSet)

console.log(new Set("Jonas"))

console.log(ordersSet.size)
console.log(ordersSet.has("Pizza"))
console.log(ordersSet.has("Bread"))
ordersSet.add("Garlic Bread")
ordersSet.add("Garlic Bread")
ordersSet.delete("Risotto")
// ordersSet.clear()
console.log(ordersSet)

for (const order of ordersSet) console.log(order)

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]
const staffUnique = [...new Set(staff)]
console.log(staffUnique)

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
)

console.log(new Set("jonasschmedtmann").size)
