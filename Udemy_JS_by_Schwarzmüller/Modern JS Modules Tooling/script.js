// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js"
// import * as ShoppingCart from "./shoppingCart.js"

console.log("Importing mobule")
// addToCart("bread", 5)
// console.log(price, tq)
// ShoppingCart.addToCart("bread", 5)
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq)

import add, { cart } from "./shoppingCart.js"
add("pizza", 2)
add("bread", 5)
add("apple", 7)
console.log(cart)
