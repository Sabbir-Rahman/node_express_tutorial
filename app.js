const EventEmitter = require('events')

const customeEmitter = new EventEmitter()

//mutiple same event can be written 
//order matter
customeEmitter.on('response',(name,id)=>{
    console.log(`data recieved ${name} with id:${id}`)
})

customeEmitter.on('response',()=>{
    console.log(`some other thing`)
})


customeEmitter.emit('response','Sabbir',42)