const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
fruitList = ['watermelon', 'banana', 'apple', 'cucumber', 'tomato']
veggieList = ['squash', 'broccoli', 'cauliflower', 'spinach']

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

app.get('/hello', (req, res) => {
  console.log('hello world!')
  res.send('hello world!')
})

app.get('/greet/:name', (req, res) => {
  res.send(`Why hello there, ${req.params.name}!`)
})

app.get(`/five`, (req, res) => {
  res.send([1,2,3,4,5])
})

app.get('/fruits', (req, res) => {
  res.send(fruitList)
})

app.get('/fruits/sort', (req, res) => {
  const sorted = fruitList.sort()
  res.send(sorted)
})

app.get('/fruits/:name', (req, res) => {
  const fruitName = req.params.name
  if (fruitList.includes(fruitName)) {
    res.json(fruitName)
  }
  else {
    res.send(`Fruit Not Found`)
  }
})

app.get('/veggies', (req, res) => {
  res.send(veggieList)
})

app.get('/veggies/:name', (req, res) => {
  const veggieName = req.params.name
  if (veggieList.includes(veggieName)) {
    res.json(veggieName)
  }
  else {
    res.send(`Vegetable Not Found`)
  }
})

