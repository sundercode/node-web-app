/*
cart.js

This is a script that is going to handle all the actions performed on this
page.

*/
const inventory = [
 {
   "SKU": "ITEM0001",
   "ITEM NAME": "Upload Your Own Image",
   "CATEGORY": "Just Because",
   "Primary Description": "",
   "Stripe SKU": "",
   "PRICE": 6.00,
 },
 {
   "SKU": "ITEM0002",
   "ITEM NAME": "How have you bean?",
   "CATEGORY": "Just Because",
   "Primary Description": "How have you bean? by Calli VanderWilde",
   "Stripe SKU": "sku_A7TPTR318KDgpH",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0003",
   "ITEM NAME": "Flowers",
   "CATEGORY": "Just Because",
   "Primary Description": "Flowers by Kelsey Malone",
   "Stripe SKU": "sku_A7TOS2l2LIE509",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0004",
   "ITEM NAME": "Toodle Loo Kangaroo",
   "CATEGORY": "Greetings ",
   "Primary Description": "Toodle Loo Kangaroo by Calli VanderWilde",
   "Stripe SKU": "sku_A7TNxIA8v8aEbb",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0005",
   "ITEM NAME": "See you soon racoon!",
   "CATEGORY": "Greetings ",
   "Primary Description": "See you soon Raccoon! by Calli VanderWilde",
   "Stripe SKU": "sku_A7TMR7WWxz4qpf",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0006",
   "ITEM NAME": "Thanks",
   "CATEGORY": "Thank You",
   "Primary Description": "Thanks by Calli VanderWilde",
   "Stripe SKU": "sku_A7TLGB1yM8KFQE",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0007",
   "ITEM NAME": "Hello, Guten Tag",
   "CATEGORY": "Greetings ",
   "Primary Description": "Hello, Guten Tag by Calli VanderWilde",
   "Stripe SKU": "sku_A7TKK0q4IVnqgN",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0008",
   "ITEM NAME": "Hello ",
   "CATEGORY": "Greetings ",
   "Primary Description": "Hello by Kelsey Malone",
   "Stripe SKU": "sku_A7TJ9OnWOsDLdr",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0009",
   "ITEM NAME": "I Love You (EKG)",
   "CATEGORY": "Love",
   "Primary Description": "I love you EKG by Calli VanderWilde",
   "Stripe SKU": "sku_A7TIiyikfY0CUN",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0010",
   "ITEM NAME": "(Heart) You",
   "CATEGORY": "Love",
   "Primary Description": "(Heart) you by Esti O' Connell",
   "Stripe SKU": "sku_A6jbv4n4240iNJ",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0011",
   "ITEM NAME": "B-Day",
   "CATEGORY": "Birthday",
   "Primary Description": "B-Day by Esti O' Connell",
   "Stripe SKU": "sku_A6jdzL6gXMnbFQ",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0012",
   "ITEM NAME": "Great Big Adventure",
   "CATEGORY": "Congratulations",
   "Primary Description": "Great Big Adventure by Katie Heitkemper",
   "Stripe SKU": "sku_A7THTmm9bKnexG",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0013",
   "ITEM NAME": "The World is Your Oyster",
   "CATEGORY": "Greetings ",
   "Primary Description": "The World is your Oyster by Katie Heitkemper",
   "Stripe SKU": "sku_A7TGgbmUaqyEV6",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0014",
   "ITEM NAME": "Congrats!",
   "CATEGORY": "Congratulations",
   "Primary Description": "Congrats! by Katie Heitkemper",
   "Stripe SKU": "sku_A7T6wWV3eApdmT",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0015",
   "ITEM NAME": "XOXO",
   "CATEGORY": "Love",
   "Primary Description": "XOXO by Katie Heitkemper",
   "Stripe SKU": "sku_A7T54fnX9NJva5",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0016",
   "ITEM NAME": "Thank You",
   "CATEGORY": "Thank You",
   "Primary Description": "Thank You by Katie Heitkemper",
   "Stripe SKU": "sku_A7T4TNs0lcJS1p",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0017",
   "ITEM NAME": "Nice to Sea You",
   "CATEGORY": "Greetings ",
   "Primary Description": "Design by Katie Heitkemper",
   "Stripe SKU": "sku_AD6cksSIeIgudv",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0018",
   "ITEM NAME": "Ride the Wave",
   "CATEGORY": "Just Because",
   "Primary Description": "Design by Katie Heitkemper",
   "Stripe SKU": "sku_AD6cGep1t5JLSp",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0019",
   "ITEM NAME": "Earn Your Peach",
   "CATEGORY": "Just Because",
   "Primary Description": "Design by Katie Heitkemper",
   "Stripe SKU": "sku_ACoqFUDrhVxG5C",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0020",
   "ITEM NAME": "Eat Cake",
   "CATEGORY": "Birthday",
   "Primary Description": "Design by Kelsey Malone",
   "Stripe SKU": "sku_ACosRPL9DQIn7S",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0021",
   "ITEM NAME": "We Are One",
   "CATEGORY": "Just Because",
   "Primary Description": "Design by Katie Heitkemper",
   "Stripe SKU": "sku_ACouy8Z7Yipwlw",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0022",
   "ITEM NAME": "hi",
   "CATEGORY": "Greetings ",
   "Primary Description": "Design by Katie Heitkemper",
   "Stripe SKU": "sku_ACovTHlyTVfzCr",
   "PRICE": 5.25,
 },
 {
   "SKU": "ITEM0023",
   "ITEM NAME": "Let's Party",
   "CATEGORY": "Birthday",
   "Primary Description": "Design by Katie Heitkemper",
   "Stripe SKU": "sku_ACox0Y8oDm7FBM",
   "PRICE": 5.25,
 }
]

var cart = JSON.parse(localStorage.getItem("Cart")) || [];

//this function finds the appropriate inventory name and adds it to the cart
//dialogs to prompt permanent checkout.

var totalPrice = 0;

function confirmCartAdd(){
    //this is where we want to display an alert on click confirming a cart add
    var success = document.createElement("div");
    success.className += "alert alert-success"
    success.innerHTML = "You have added to the cart!"

    var divContainer = document.getElementById("alert-box");
        divContainer.innerHTML = "";
        divContainer.appendChild(success);
}

function addOnClick(itemName) {
    //for every index in the inventory, find the one that matches the item name input
    var i;
    for (i = 0; i < inventory.length; i++ ) {
        if (inventory[i]["ITEM NAME"] === itemName) {
            //add this item to the cart
            cart.push(inventory[i]);
        }
    }
    localStorage.setItem("Cart", JSON.stringify(cart));
}


function myFunction() {
    alert("Added to cart!");
    localStorage.setItem('formData', JSON.stringify($('form').serializeArray()));
}

function getSum() {
  for (var i = 0; i < cart.length; i++){
      totalPrice += cart[i]["PRICE"];
  }
  if (totalPrice === 0 || cart.length == null){
      document.getElementById("cartTotal").innerHTML = "$0.00";
  }
  document.getElementById("cartTotal").innerHTML = "$" + parseFloat(totalPrice).toFixed(2);

  console.log(totalPrice);
}
