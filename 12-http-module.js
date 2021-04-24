const http = require('http');

const server = http.createServer((request,response)=>{
    // console.log(request)
    // response.write('Welcome to our homepage')
    // response.end()
    if (request.url === '/'){
        response.end('Welcome to our homepage')
    }
    if(request.url === '/about'){
        response.end('Here is our short history')
    }
    response.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for </p>
    <a href="/">back homepage</a>
    `)
})

server.listen(5000)
