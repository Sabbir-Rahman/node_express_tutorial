const express = require('express');
const app = express()
const logger = require('./9-logger')


//req => middleware => res


app.get('/', logger,(req,res)=> {
    
    res.send('Home')
})

app.get('/api/products',logger,(req,res)=>{
    res.send('Products')
})

app.get('/api/items',logger,(req,res)=>{
    res.send('Items')
})

app.listen(5000, ()=> {
    console.log('Server is listening on port 5000....')
})
