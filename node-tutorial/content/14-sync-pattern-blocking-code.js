const http = require('http')

const server = http.createServer((request,response)=>{
    if (request.url === '/'){
        response.end('Home page')
    }
    if (request.url === '/about') {
        for (let i=0;i<1000 ;i++){
            for (let j=0;j<1000;j++){
                console.log(`${i} ${j}`)
            }
        }
        response.end('About page')
    }
    response.end('Error page')

})

server.listen(5000, ()=> {
    console.log('Server listening on port 5000...')
})