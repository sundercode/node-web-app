//let's use express!

const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/src'));

app.get('/', (request, response) => {
  response.render('index.html')
})

app.get('/cart', (request, response) => {
  response.render('cart.html')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
