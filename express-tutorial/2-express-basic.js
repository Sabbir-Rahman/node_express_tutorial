const express = require('express');
const app = express()

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

app.listen(5000, ()=>{
    console.log('Server is listening at port 5000')
})

app.get('/',(req,res)=>{
    res.status(200).send('Home Page')
})
app.get('/about',(reqq,res)=>{
    res.status(200).send('About')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource not found</h1>')
})
