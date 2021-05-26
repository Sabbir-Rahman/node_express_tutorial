const express = require('express');
const app = express()
const morgan = require('morgan')
const logger = require('./9-logger')
const authorize = require('./11-authorize')


//req => middleware => res


app.use([logger, authorize])

// app.use('/api',logger)

app.use(morgan('tiny'))
app.get('/',(req,res)=> {
    console.log(req.user)
    res.send('Home')
})

app.get('/api/products',(req,res)=>{
    console.log(req.user)
    res.send('Products')
})

app.get('/api/items',(req,res)=>{
    console.log(req.user)
    res.send('Items')
})

app.listen(5000, ()=> {
    console.log('Server is listening on port 5000....')
})
