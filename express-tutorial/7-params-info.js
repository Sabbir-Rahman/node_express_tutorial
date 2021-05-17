const express = require('express');
const app = express()
const {products} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page </h1><a href="/api/products">products')
})

app.get('/api/products',(req,res)=>{

    //make custom product json without the description
    const newProducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}
    })
    // res.json(products)
    res.json(newProducts)

})

app.get('/api/products/:productId', (req,res)=>{

    const {productId} = req.params;

    const singleProduct = products.find((product)=>product.id === Number(productId))

    if(!singleProduct){
        return res.status(404).send("product Does Not Exist")
    }

    return res.json(singleProduct)
})

app.get('/api/products/:productId/reviews/:reviewId', (req,res)=>{
    res.send('Hello World')
    console.log(req.params)
})

app.listen(5000, ()=> {
    console.log('Server is listening on port 5000....')
})
