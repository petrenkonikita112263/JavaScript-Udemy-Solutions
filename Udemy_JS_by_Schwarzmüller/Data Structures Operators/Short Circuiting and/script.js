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

///////////////////////////////////////
// The Nullish Coalescing Operator
restaurant.numGuests = 0
const guests = restaurant.numGuests || 10
console.log(guests)

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ? ? 10
console.log(guestCorrect)

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/