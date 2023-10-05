// Import express by requiring it at the top of index.js
const express = require('express');
//define a PORT constant variable
const PORT = process.env.PORT || 3001;
// Init an app instance below your initial imports
const app = express();
// bind the app to a port with app.listen() at the bottom of the file
app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  })

  app.get('/five', (req, res) => {
    // console.log([1, 2, 3, 4, 5])
    res.send([1, 2, 3, 4, 5])
  })

    // fruits
  const fruits = ['apple', 'kiwi', 'peach', 'cherry', 'plam']
  app.get('/fruits', (req, res) => {
    // console.log('apple', 'kiwi', 'peach', 'cherry', 'plam')
    res.send(fruits)
  })

   // Ex. http://localhost:3001/fruits/apple
  //%20 adds a space in http link
  
//   app.get('/fruits/:name', (request, response) => {
//     response.send({ 
//         fruit: `you are viewing the ${request.params.name} fruit` })
//   })

app.get('/veggies', (req, res) => {
    res.send([ "Carrot", "Broccoli", "Spinach", "corn", "Eggplant", "Lettuce", "Kale", "Onion", "Garlic"])
  })

   //http://localhost:3001/veggies/{vName}
  app.get('/veggies/:name', (request, response) => {
    response.send({ 
        veggies: `you are viewing the ${request.params.name} which is a veggie!` })
  })

  app.get('/fruits/sort', (req, res) => {
    fruits.sort();
    res.send(fruits)
  })

// The * used for a route will cover any route request made to our server, meaning that it will respond with this 404 message for any URL param chained on to http://localhost:3001
  app.get('*', (req, res) => {
    res.send('404 Not Found')
  })