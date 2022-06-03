const {Router} =  require('express');

const teacher = Router();

teacher.post('/create',(req,res) => {
    res.send('create');
 })
 
 teacher.get('/get',(req,res) => {
    res.send('get');
 })
 teacher.put('/update',(req,res) => {
   res.send('updated');
 })
 teacher.delete('/delete',(req,res) => {
    res.send('deleted');
 })
module.exports = teacher;
