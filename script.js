// Modules -> are reusable piece of code that encapsulate implementations details.

// Usualy a standalone file, but it doesent have to be.


// IMPORT -> Dependencies, Export -> (Public api)

// Compose softwares: Modules are small building blocks that we put all together to build complex applications.
// Isolate Components: Modules can be developed in isolation without thinking about the entire code base.
// Abstract code: Implement low level code in modules and import these abstractions into other modules.
// Reuse code: Modules allow us to easily reuse the same code, even across multiple projects.

// ES6 Modules -> Modules are stored in files, exatly one module per file.

// ES6 Mules VS Scripts
// TOP-LEVEL VARIABLES: Scoped to module - Global
// Default mode: 'strict-mode' - "Sloppy mode"
// Top level this: 'Undefined' - Window
// HTML Linking: '<stript type="module">' - <script>
// File downloading: Asynchronous - Synchronous

// Modules are parsed in the top of the code, and hoisted, that means in the start of execution the engine read the entire module, and provide to us to use this piece of code.
// Modules are imported synchronously that means only after all the imported modules the main index.js will finaly will be executed as well.

// Possible thanks to top-level("static") imports, wich make imports known before executions;
// This make building and elimination possible.

// Modules in practice.
// Importing Module
// For import an entire module and the variables we need to declare wich variables and from we are getting
// import './shoppingCart.js'
// import { addToCart, tq, totalPrice as Price } from './shoppingCart.js' // When we use curly braces we are especifying wich variables we are getting and from the entire module, and the module itself.
console.log('Importing Module')
// // addToCart('bread',20)
// // console.log(tq, Price)

// // Heare we are saving all values and adding to ShoppingCart Object, and we can call all the values an method or an value.
// import * as ShoppingCart from './shoppingCart.js'
// console.log(typeof ShoppingCart)
// ShoppingCart.addToCart('bread', 5)
// console.log(ShoppingCart.totalPrice)

// When we import one value from export default we can give any name we want.

// Eerty thing is in curly braces is named exports, and wich arent in curly we can pass any name we want beacuse this are export default values!
import add, { cart } from './shoppingCart.js'
add('pizza', 2)
add('hamburger', 2)
add('esfirra', 2)

// Modules have a life conection the values will be iserted in the cart array and we can import heare in our code.
console.log(cart)

// The module pattern
const shoppingCart2 = (function() {
    const cart = []
    const shoppingCost = 10
    const totalPrice = 237
    const totalQuantity = 33

    const addToCart = function(product, quantity) {
        cart.push(product, quantity)
        console.log(`${quantity} ${product} added to cart! shipping cost is ${shoppingCost}`) // This variable cant be access outside the module, but we see the value if we return in a function.
    }

    const orderStock = function(product, quantity) {
        cart.push(product, quantity)
        console.log(`${quantity} ${product} ordered from supplyer!`)
    }

    return {
        addToCart, totalPrice, cart, totalQuantity // Heare we are exporting an object with all of these methods that i retruned.
    }
})();

shoppingCart2.addToCart('apple', 4)
shoppingCart2.addToCart('pizza', 2)

console.log(shoppingCart2.totalPrice)
