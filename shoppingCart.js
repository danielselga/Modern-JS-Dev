// Exporting Module
console.log('Exporting Module')

// Variable are scoped in the current module, and we only can use heare. If we need to use them we need to exports.
const shippingCost = 10
export const cart = []

// If we want to export a single value we can write "Export infront of the declaration to export this value to other code."
// Export only work in top-level code.
export const addToCart = function(product, quantity) {
    cart.push(product, quantity)
    console.log(`${quantity} ${product} added to cart!`)
}

const totalPrice = 237
const totalQuantity = 23

export {totalPrice, totalQuantity as tq}

// Default Exports 
// We only use Default Exports when we want to export one thing per module.
export default function(product, quantity) {
    cart.push(product, quantity)
    console.log(`${quantity} ${product} added to cart!`)
}


