"use strict"


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
const guestCorrect = restaurant.numGuests ?? 10
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

// Data needed for a this exercise
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
    printGoals: function (...playersName) {
        console.log(playersName)
        console.log(`${playersName.length} goals were scored`)
    }
}

// 1.
const [players1, players2] = game.players
console.log(players1, players2)

// 2.
const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers)

// 3.
const allPlayers = [...game.players]
console.log(allPlayers)

// 4.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"]
console.log(players1Final)

// 5.
const {
    team1,
    x: draw,
    team2
} = game.odds
console.log(team1, draw, team2)

// 6.
game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
game.printGoals(...game.scored)

// 7.
game.odds && game.odds.team1 < game.odds.team2 && console.log("Team 1 is more likely to win")
game.odds && game.odds.team2 < game.odds.team1 && console.log("Team 2 is more likely to win")