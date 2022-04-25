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
