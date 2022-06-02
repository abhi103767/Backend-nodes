const express = require('express');

 const app = express();


 app.get('/', (req,res) => {
      res.end('get the')
 })


 app.get('/products', (req,res) => {
     res.send('All the products')
 })


 app.post('/products', (req,res) => {

res.send("Got the data");
     
 })


 app.listen(8080,() => {
     console.log('server is started on http//:localhost:8080')
 })
