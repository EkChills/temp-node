const http = require('http')

const server = http.createServer((req,res) => {
  console.log(req);
  if(req.url === '/') {
    res.end('welcome to our homepage')
    return
  }
  if(req.url === '/about') {
    res.end('our short history')
    return
  }
  res.end(`
  <h1>oops!</h1>
  <p>We cant seem to find the page you are looking for</p>
  <a href="/">back home</a>
  `)
})
server.listen(5000)