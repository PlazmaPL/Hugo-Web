const http = require("http")
var express = require("express");
var app = express();
var port = 9999
var hostname = 'localhost'
var fs = require('fs')


const body = require('body-parser');
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/post1', (req, res) => {
    console.log(req.body)
})


app.post('/post2', (req, res) => {
    console.log("Uma informação qualquer")
})

app.get('/get1', (req, res) => {
    console.log("Uma informação qualquer")
})

app.get('/Salvarlogin', (req, res) => {
    const conteudo = JSON.stringify(req.body)
    var filename = 'email.txt'

    try {
        fs.writeFileSync(filename, conteudo)
        console.log("Arquivo escrito com sucesso")
        const fileread=(fs.readFileSync(filename, 'utf-8'))
        console.log(fileread)
        console.log("Arquivo lido com sucesso")
    } catch (e) {
        console.error(e)
    }
})


app.listen(port, hostname, () => {
    console.log("Ouvindo na porta " + port)

})
