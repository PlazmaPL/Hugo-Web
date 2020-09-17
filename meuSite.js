const { response } = require("express");
const handlebars = require('express-handlebars')
var express = require("express");
const { send } = require("process");
var app = express();
app.listen(9999, () => {
    console.log("Server rodando em http://localhost:9999")
});

//conf Handlebars
app.engine('handlebars', Handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get("/", (req, res, next) => {
   res.send('Funciona lixo preto')
});

app.get("/produtos", (req, res, next) => {
    console.log(req.body)
    res.json(["Teclado","Mouse","Headset","Monitor","Gabinete"]);
});

app.get("/SalvarLogin", (req, res, next) => {
    console.log(req.params)
    res.status(200).send('ok')
    
});

app.post("/SalvarLogin", (req, res, next) => {
    console.log(req.params.login)
    res.status(200).send(req.params.login)
    
});
