const express = require('express');
const app = express()

const people = require('./routes/people')
const login = require('./routes/auth')

// static assets 
app.use(express.static('./methods-public'))

//parse from data with urlencoded middleware
app.use(express.urlencoded({ extended: false}))

app.use(express.json())

//   /api/people/ routes
app.use('/api/people', people)

app.use('/api/login/',login)




app.listen(5000, ()=> {
    console.log('Server is listening on port 5000....')
})
