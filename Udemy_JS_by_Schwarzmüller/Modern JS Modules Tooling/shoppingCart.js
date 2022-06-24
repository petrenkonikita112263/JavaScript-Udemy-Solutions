console.log("Export module")

const shoppingCart = 10
export const cart = []

export const addToCart = function (product, quantity) {
    cart.push({ product, quantity })
    console.log(
        `Product ${product} was added to the cart in quantity ${quantity}`
    )
}

const totalPrice = 237
const totalQuantity = 23

export { totalPrice, totalQuantity as tq }

export default function (product, quantity) {
    cart.push({ product, quantity })
    console.log(`${quantity} ${product} was added to cart`)
}
