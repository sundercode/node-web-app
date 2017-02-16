//let's use express!

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//stripe setup objects
const keyPublishable = "pk_test_jH3qu1971UqR7k2rRcx3aUjg"

const stripe = require("stripe")("sk_test_ItkQCYuA6uoAmmb6i2gyuzoR");
// var charge2 = stripe.charges.create({
//   amount: 1000,
//   currency: "usd",
//   description: "Example charge - card",
//   source: token,
// }, function(err, charge2) {
//   // asynchronously called
//   console.log(err)
// });

app.use(express.static(__dirname + '/src'));

app.set('port', (process.env.PORT || 5000));

app.get('/', (request, response) => {
  response.render('index.html')
})

app.get('/cart', (request, response) => {
  response.render('cart.html', {keyPublishable})
})

app.post("/charge", (request, response) => {
  let amount = 500;
  //console.log(response);
  stripe.customers.create({
     email: request.body.stripeEmail,
    source: request.body.stripeToken
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
         currency: "usd",
         customer: customer.id
    }))
  .then(charge => response.render('charge.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
