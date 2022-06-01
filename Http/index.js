const http = require('http');

const server = http.createServer((req,res) => {

 console.log(req)
   if(req.url === '/') res.end('Welcome to homepage');
   if(req.url === '/products') res.end(JSON.stringify([1,2,3,4,4]))

   else res.end('404 ');
})
server.listen(8080)