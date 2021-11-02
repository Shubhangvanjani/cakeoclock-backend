import express from 'express'
import { products } from './data.js';

const app =express();

app.get('/', (req, res) => {
  res.send('Server is ready')
})

app.get('/api/products', (req, res) => {
  res.send(products)
})

app.listen(3000, () => {
  console.log("Server running at: 3000" )
})