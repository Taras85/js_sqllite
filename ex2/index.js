const express =require('express')
const app = express()

app.get('/',(req, res) => {
    res.send('Hello, World express')
})

app.listen(3000,() =>{
    console.log ('Express web app on: http://localhost:3000')
})