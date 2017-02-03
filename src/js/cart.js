/*
cart.js

This is a script that is going to handle all the actions performed on this
page. We will be using angular to accommodate our need for a framework, and
eventually this page will be communicating with backend files probably built
through Node.js

*/

//we will most likely be splitting this up into several small components

//cover the functionality for the counter.
var counter = 1;
//find the count named element on the page
var countEl = document.getElementById("count");
function plus() {
    if (counter < 10) {
        counter += 1;
        count.value = counter;
    }
    else {
        var btn = document.getElementById("add");
        add.disabled = true;
    }
}

function minus() {
    var btn = document.getElementById("minus");
    if (counter >= 1) {
        counter-= 1;
        count.value = counter;
        minus.disabled = false;
    }
    else {
        minus.disabled = true;
    }
}
