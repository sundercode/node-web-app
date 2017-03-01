//let's use express!

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//stripe setup objects, new comment
const keyPublishable = "pk_test_jH3qu1971UqR7k2rRcx3aUjg"

const stripe = require("stripe")("sk_test_ItkQCYuA6uoAmmb6i2gyuzoR");

app.use(express.static(__dirname + '/src'));

app.set('port', (process.env.PORT || 5000));

app.get('/', (request, response) => {
  response.render('index.html')
})

app.get('/browse', (request, response) => {
  response.render('browse.html')
})

app.get('/about', (request, response) => {
  response.render('about.html')
})

app.get('/cart', (request, response) => {
  response.render('cart.html', {keyPublishable})
})

app.post('/charge', (request, response) => {
  let amount = 500;
  stripe.customers.create({
     email: request.body.stripeEmail,
    source: request.body.stripeToken
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Elise's Card charge - node.js",
         currency: "usd",
         customer: customer.id
    }))
    console.log("post received: %s %s", request.body.stripeEmail, request.body.stripeToken);
    response.redirect('/')
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
