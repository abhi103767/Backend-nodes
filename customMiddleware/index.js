

const express = require('express');
const app = express();


app.post('/', (req,res) => {
    res.send('hii welcome to homepage');
})


app.listen(8080,() => {
    console.log("Server is started")
})