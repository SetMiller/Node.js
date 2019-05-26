const http = require('http')
const server = http.createServer((req, res) => {
   res.writeHead(200, {
      'Content-Type': 'text/plain'
   })
   res.write('Hello http')
   res.end()
})

server.listen(8000)
console.log('listening on port 8000')