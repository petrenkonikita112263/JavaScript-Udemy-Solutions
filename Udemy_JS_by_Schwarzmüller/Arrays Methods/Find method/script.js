"use strict"

const movementsExample = [200, 450, -400, 3000, -650, -130, 70, 1300]

///////////////////////////////////////
// The find Method
const firstWithdrawal = movementsExample.find((mov) => mov < 0)
console.log(movementsExample)
console.log(firstWithdrawal)
