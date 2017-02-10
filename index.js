//let's use express!

const express = require('express')
const app = express()

//stripe setup objects
const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;

const stripe = require("stripe")(keySecret);

app.use(express.static(__dirname + '/src'));

app.set('port', (process.env.PORT || 5000));

app.get('/', (request, response) => {
  response.render('index.html')
})

app.get('/cart', (request, response) => {
  response.render('cart.html', {keyPublishable})
})

app.post("/charge", (req, res) => {
  let amount = 500;

  stripe.customers.create({
     email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
         currency: "usd",
         customer: customer.id
    }))
  .then(charge => res.render("charge.html"));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
