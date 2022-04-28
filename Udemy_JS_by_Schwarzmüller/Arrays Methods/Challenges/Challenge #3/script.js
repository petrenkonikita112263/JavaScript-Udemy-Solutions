"use strict"

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const juliasDogs = [5, 2, 4, 1, 15, 8, 3]
const kateDogs = [16, 6, 10, 5, 6, 1, 4]

function calcAverageHumanAge(ages) {
    return ages
        .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
        .filter((age) => age >= 18)
        .reduce((avg, age, _, { length }) => avg + age / length, 0)
}

console.log(calcAverageHumanAge(juliasDogs))
console.log(calcAverageHumanAge(kateDogs))
