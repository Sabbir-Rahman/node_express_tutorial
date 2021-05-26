const express = require('express');
const app = express()
const logger = require('./9-logger')


//req => middleware => res

<<<<<<< HEAD
app.use('/api',logger)
=======
app.use(logger)
>>>>>>> 61216257021257a40c667cee83d754cb10d71c0e

app.get('/',(req,res)=> {
    
    res.send('Home')
})

app.get('/api/products',(req,res)=>{
    res.send('Products')
})

app.get('/api/items',(req,res)=>{
    res.send('Items')
})

app.listen(5000, ()=> {
    console.log('Server is listening on port 5000....')
})
