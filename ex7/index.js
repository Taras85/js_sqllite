const http = require('http')
const fs = require('fs')

http.createServer((req, res)=>{
    getTitles(res)
}).listen(8000, '127.0.0.1')

function getTitles(res){
    fs.readFile('./titles.json', (err, data)=>{
        if (err){
            hadError(err, res)
        } else{
            getTemplate(JSON.parse(data.toString()), res)
        }
    })
}

function getTemplate(titles, res){
    fs.readFile('./index.html', (err, data)=>{
        if (err){
            hadError(err, res)
        } else {
            
            formatHtml(titles, data.toString(), res)
        }
    })
}

function formatHtml(titles, tmpl, res ){
    
    const html=tmpl.replace('%', titles.join('</li><li>'))
    res.writeHead(200, {'Content-Type':'texy/html'})
    res.end(html)
}

function hadError (err, res){
    console.error(err)
    res.end('Server ERROR')
}