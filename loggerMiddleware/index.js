const { application } = require('express');
const { response } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan');



app.use( morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}))

app.get('/',(req,res) => {
    res.status(200).send('HIi welcome to hompage')
})



app.listen(8080,() => {
  console.log('server is started')
})