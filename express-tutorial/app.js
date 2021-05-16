const http = require('http')

const server = http.createServer((req,res) =>{

    const url = req.url;
    
    //home page
    if (url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>Home Page</h1>')
        res.end()
    }
    //about page
    else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    // 404
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }
    console.log('User hit the server')
    console.log(req)
    
})

server.listen(5000)
