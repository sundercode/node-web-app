//let's use express!

const express = require('express')
const app = express()

app.use(express.static(__dirname + '/src'));

app.set('port', (process.env.PORT || 5000));

app.get('/', (request, response) => {
  response.render('index.html')
})

app.get('/cart', (request, response) => {
  response.render('cart.html')
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
