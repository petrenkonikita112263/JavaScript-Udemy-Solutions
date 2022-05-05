"use strict"

const movementsExample = [200, 450, -400, 3000, -650, -130, 70, 1300]

// Strings
const owners = ["Jonas", "Zach", "Adam", "Martha"]
console.log(owners)
console.log(owners.sort())

// Numbers
console.log(movementsExample)
// console.log(movementsExample.sort())

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// ASC
movementsExample.sort((a, b) => {
    if (a > b) return 1
    if (b > a) return -1
})
console.log(movementsExample)

// DESC
movementsExample.sort((a, b) => {
    if (a > b) return -1
    if (b > a) return 1
})
console.log(movementsExample)
