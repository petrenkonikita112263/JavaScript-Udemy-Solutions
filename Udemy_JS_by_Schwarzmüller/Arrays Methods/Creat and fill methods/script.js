"use strict"

const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(new Array(1, 2, 3, 4, 5, 6, 7))

const x = new Array(7)
console.log(x)
console.log(x.map(() => 5))

x.fill(1, 3, 5)
console.log(x)

arr.fill(23, 4, 6)
console.log(arr)

const y = Array.from({ length: 7 }, () => 1)
console.log(y)

const z = Array.from({ length: 7 }, (_, i) => i + 1)
console.log(z)
