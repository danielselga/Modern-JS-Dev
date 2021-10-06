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

// Common JS -> Using in NODEjs
// Export
// export.addToCart = function(product, quantity) { // Work in NodeJs
//     cart.push(product, quantity)
//     console.log(`${quantity} ${product} added to cart! shipping cost is ${shoppingCost}`) // This variable cant be access outside the module, but we see the value if we return in a function.
// }

// Import
// const  {addToCart} = require('./shoppingCart.js')

// Imperative x Declarative Progamming.

// Imperative -> Programmer explain "How to do things", we explain the computer every single step it has to follow to achive a result.
// Exemple --> Step by Step reciep of cake
const arr = [2, 4, 6, 8]
const doubled = []
for(let i = 0; i < arr.length; i++) {
    doubled = arr[i] * 2
}

// Declarative -> Programmer tells "What to do", we simple describe the way the computer should achieve the result.
// The HOW (Step by Step instructions) gets abstracted away.
// Exemple -> Description of a cake.
const arr2 = [2, 4, 6, 8]
const doubled = arr.map(n => n * 2)

import { cloneDeep } from 'lodash' // We can simple use loadash because parcel understand where to get files.
// On dependancies in package.json we can see wich word we can use to import code from modules.

const nestObj = {
    teste: {
        batatinha: 'frita 123',
        numbers: [1,2,3,4,5,6],
        obj: {
            value1: true,
            value2: false
        },
        obj2: {
            obj3: {
                obj4: {
                    ola: 'meu nome é daniel'
                }
            }
        }
    }
}

const clonedObj = cloneDeep(nestObj)

nestObj.teste.obj.value1 = false

console.log(nestObj)
console.log(clonedObj)

if(module.hot) { // Prevent browser refresh statement.
    module.hot.accept()
}


// Refactoring bad code.

const budget = [
    { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
    { value: -45, description: 'Groceries 🥑', user: 'jonas' },
    { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
    { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
    { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
    { value: -20, description: 'Candy 🍭', user: 'matilda' },
    { value: -125, description: 'Toys 🚂', user: 'matilda' },
    { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
  ];
  
  const spendingLimits = {
    jonas: 1500,
    matilda: 100,
  };
  
  const addExpense = function (value, description, user) {
    if (!user) user = 'jonas';
    user = user.toLowerCase();
  
    let lim;
    if (spendingLimits[user]) {
      lim = spendingLimits[user];
    } else {
      lim = 0;
    }
  
    if (value <= lim) {
      budget.push({ value: -value, description: description, user: user });
    }
  };
  addExpense(10, 'Pizza 🍕');
  addExpense(100, 'Going to movies 🍿', 'Matilda');
  addExpense(200, 'Stuff', 'Jay');
  console.log(budget);
  
  const check = function () {
    for (const el of budget) {
      let lim;
      if (spendingLimits[el.user]) {
        lim = spendingLimits[el.user];
      } else {
        lim = 0;
      }
  
      if (el.value < -lim) {
        el.flag = 'limit';
      }
    }
  };
  check();
  
  console.log(budget);
  
  const bigExpenses = function (limit) {
    let output = '';
    for (const el of budget) {
      if (el.value <= -limit) {
        output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
      }
    }
    output = output.slice(0, -2); // Remove last '/ '
    console.log(output);
  };

//   bigExpenses(1000)
console.log('fodase')
>>>>>>> 10581653810d20512d844df43772504ac8486fde
