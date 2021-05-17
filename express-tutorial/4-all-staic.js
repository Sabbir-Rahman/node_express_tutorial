const express = require('express')
const path = require('path')
const app = express()

//csetup static and middleware
app.use(express.static('./public'))

// app.get('/',(req,res)=> {
//     //connect the html file
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000, ()=> {
    console.log('Server is listening at port 5000....')
})

