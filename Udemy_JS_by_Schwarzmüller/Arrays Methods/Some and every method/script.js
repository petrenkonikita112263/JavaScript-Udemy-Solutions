"use strict"

const movementsExample = [200, 450, -400, 3000, -650, -130, 70, 1300]

console.log(movementsExample)
console.log(movementsExample.includes(-130))

const anyDeposits = movementsExample.some((mov) => mov > 0)
console.log(movementsExample.every((mov) => mov > 0))

const deposit = (mov) => mov > 0
console.log(movementsExample.some(deposit))
