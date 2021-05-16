const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', {encoding: 'utf8'})

//by default 64kb
//last buffer = remainder
//highWaterMark = control size


stream.on('data', (result)=>{
    console.log(result)
    console.log(result.length)
})

stream.on('error', (err) => {
    console.log(err)
})