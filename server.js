import express from 'express'
import { products } from './data.js';
import cors from 'cors'

const app =express();
app.use(cors())

app.get('/', (req, res) => {
  res.send('Server is ready')
})

app.get('/api/products', (req, res) => {
  res.send(products)
})

app.listen(3000, () => {
  console.log("Server running at: 3000" )
})