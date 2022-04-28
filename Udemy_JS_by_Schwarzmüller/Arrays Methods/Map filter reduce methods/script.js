"use strict"

const movementsExample = [200, 450, -400, 3000, -650, -130, 70, 1300]

///////////////////////////////////////
// The map Method
const eurToUsd = 1.1

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movementsExample.map((mov) => mov * eurToUsd)
console.log(movementsExample)
console.log(movementsUSD)

const movementsDescriptions = movementsExample.map(
    (mov, i) =>
        `Movement ${i + 1}: You ${
            mov > 0 ? "deposited" : "withdrew"
        } ${Math.abs(mov)}`
)
console.log(movementsDescriptions)

///////////////////////////////////////
// The filter Method
const deposits = movementsExample.filter(function (mov) {
    return mov > 0
})
console.log(movementsExample)
console.log(deposits)

const depositsFor = []
for (const mov of movementsExample) if (mov > 0) depositsFor.push(mov)
console.log(depositsFor)

const withdrawals = movementsExample.filter((mov) => mov < 0)
console.log(withdrawals)

///////////////////////////////////////
// The reduce Method
console.log(movementsExample)

// accumulator -> SNOWBALL
// const balance = movementsExample.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movementsExample.reduce((acc, cur) => acc + cur, 0)
console.log(balance)

let balance2 = 0
for (const mov of movementsExample) balance2 += mov
console.log(balance2)

// Maximum value
const max = movementsExample.reduce((acc, mov) => {
    if (acc > mov) return acc
    else return mov
}, movementsExample[0])
console.log(max)
