/*
cart.js

This is a script that is going to handle all the actions performed on this
page. We will be using angular to accommodate our need for a framework, and
eventually this page will be communicating with backend files probably built
through Node.js

*/
/*
cart.js

This is a script that is going to handle all the actions performed on this
page. We will be using angular to accommodate our need for a framework, and
eventually this page will be communicating with backend files probably built
through Node.js

*/
//cart data structure array, use the adds from inventory.js
//var _ = require('lodash');
var inventory = [
    {
        "name": "How Have You Bean?",
        "price": 5.25,
        "type": "Just Because"
    },
    {
        "name": "Flowers",
        "price": 5.25,
        "type": "Just Because"
    },
    {
        "name": "Toodle Loo Kangaroo",
        "price": 5.25,
        "type": "Greetings"
    },
    {
        "name": "See you soon Racoon!",
        "price": 5.25,
        "type": "Greetings"
    },
    {
        "name": "Thanks",
        "price": 5.25,
        "type": "Thank You"
    },
    {
        "name": "Hello, Guten Tag",
        "price": 5.25,
        "type": "Greetings"
    },
]

var cart = [];

//create "Add to Cart" button functionality, use lodash?
//if inventory[attr] =
function add(itemName) {
    if (inventory[itemName]) {
        cart.append(inventory[itemName]);
    }
}

console.log(add("How Have You Bean?"));
console.log(add("Flowers"));

//generate the table from what is in the cart. use lodash?
