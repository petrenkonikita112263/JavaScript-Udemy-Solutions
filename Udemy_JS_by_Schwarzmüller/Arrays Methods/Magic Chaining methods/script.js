"use strict"

///////////////////////////////////////
// The Magic of Chaining Methods

const movementsExample = [200, 450, -400, 3000, -650, -130, 70, 1300]

const eurToUsd = 1.1
console.log(movementsExample)

// PIPELINE
const totalDepositsUSD = movementsExample
    .filter((mov) => mov > 0)
    .map((mov) => {
        // console.log(arr);
        return mov * eurToUsd
    })
    // .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0)
console.log(totalDepositsUSD)
