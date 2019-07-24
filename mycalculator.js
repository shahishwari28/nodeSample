var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var usreencodedParser = bodyParser.urlencoded({extended : false});
app.use(usreencodedParser);

app.get('/',(req,res)=>{
    res.send('Hello Sohin!!');
})

app.get('/calci',(req,res)=>{
    res.sendFile(__dirname + "/" + "mycalci.html");
})



app.listen(5000);