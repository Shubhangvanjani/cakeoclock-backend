import express from 'express'
import { products } from './data.js';
import cors from 'cors'

const app =express();
app.use(cors())

app.get('/', (req, res) => {
  res.send('Server is ready')
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((x) => x._id === req.params.id )
  if(product){
    res.send(product)
  }else{
    res.status(404).send({message:'Product not found'})
  }
})

app.get('/api/products', (req, res) => {
  res.send(products)
})

app.listen(3000, () => {
  console.log("Server running at: 3000" )
})