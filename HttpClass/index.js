const http = require('http');

const server = http.createServer((req,res) => {
  res.end('HII how are you')
})


server.listen(8080,() => {
    console.log('server is started on port 8080')
})