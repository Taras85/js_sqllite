const EventEmitter = require('events').EventEmitter
const channel =new EventEmitter()

function message(){
    console.log('Welcome')
}


// channel.on('join',()=>{
//     console.log('Welcome')
// })

channel.on('join', message)

channel.emit("join")