const {products} = require('./data')
const express = require('express');
const app = express()

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

//query string
app.get('/api/v1/query',(req,res)=>{

    const { search, limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1){
        res.status(200).json({ success: true, data: []})
    }
    res.status(200).json(sortedProducts)
    console.log(req.query);
})


app.get('/api/products/:productId/reviews/:reviewId', (req,res)=>{
    res.send('Hello World')
    // console.log(req.params)
})