const {Router} = require('express');
const students = Router();

students.post('/create',(req,res) => {
    res.send('create')
})

students.get('/get',(req,res) => {
    res.send('get ')
})

students.put('/put' ,(req,res) => {
    res.send('updated')
})
students.delete('/delete',(req,res) => {
    res.send('deleted');
})

module.exports = students;



























