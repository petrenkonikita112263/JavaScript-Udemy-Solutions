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

///////////////////////////////////////
// The Module Pattern

const ShoppingCart2 = (function () {
    const cart = []
    const shippingCost = 10
    const totalPrice = 237
    const totalQuantity = 23

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity })
        console.log(
            `${quantity} ${product} added to cart (shipping cost = ${shippingCost})`
        )
    }

    const orderStock = function (product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier`)
    }

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    }
})()

ShoppingCart2.addToCart("pizza", 2)
ShoppingCart2.addToCart("bread", 5)
ShoppingCart2.addToCart("apple", 7)
console.log(ShoppingCart2)
console.log(ShoppingCart2.shippingCost)

///////////////////////////////////////
// Introduction to NPM
// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js"
import cloneDeep from "lodash-es"
const state = {
    cart: [
        { product: "bread", quantity: 5 },
        { product: "pizza", quantity: 5 },
    ],
    user: { loggedIn: true },
}
const stateClone = Object.assign({}, state)
const stateDeepClone = cloneDeep(state)

state.user.loggedIn = false
console.log(stateClone)

console.log(stateDeepClone)
