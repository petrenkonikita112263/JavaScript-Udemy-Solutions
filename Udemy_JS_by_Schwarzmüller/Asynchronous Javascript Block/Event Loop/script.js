"use strict"

console.log("Test start")
setTimeout(() => console.log("0 sec timer"), 0)
Promise.resolve("Resolve promise #1").then((response) => console.log(response))
Promise.resolve("Resolve promise #2").then((response) => {
    for (let index = 0; index < 1_000; index++) {}
    console.log(response)
})
console.log("Test end")
