require('dotenv').config()

const express =require('express')
const app =express()
const articles = [{title: 'exemple'}, {title: 'exemple2'}, {title: 'exemple3'}]
const bodyParser = require('body-parser')

app.set('port', process.env.PORT || 3001)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/articles', (req, res, next)=>{
    res.send(articles)
})

app.post('/articles', (req, res, next)=>{
    article = {title: req.body.title}
    articles.push(article)
    res.send(article)
})

app.get('/articles/:id', (req, res, next)=>{
    const id = req.params.id
    console.log('frtching:',id)
    res.send (articles[id])
})

app.delete('/articles/:id', (req, res, next)=>{
    const id = req.params.id
    console.log('deleting:',id)
    delete articles[id]
    res.send ({message: 'DELETED'})
})


app.listen(app.get('port'),()=>{
    console.log(`Web app available at http://127.0.0.1:${app.get('port')}`)
})

module.exports = app



// POST/articles
// GET/articles/:id
// GET/articles
// DELETE/articles/:id

