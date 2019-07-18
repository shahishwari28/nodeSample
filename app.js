var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var usreencodedParser = bodyParser.urlencoded({extended : false});

app.use(usreencodedParser);



app.get('/',(req,res)=>{
    res.send('Hello Wednesday!!');
})

app.get('/infopage',(req,res)=>{
    res.send('Its Info Page');
})
app.get('/index',(req,res)=>{
    res.sendFile(__dirname + "/" + "index.html");
})
app.post('/postUser',(req,res)=>{
    res.send(JSON.stringify(req.body));
})

app.get('/getUser',(req,res)=>{
    let data={
        first_name : req.query.first_name,
        last_name : req.query.last_name
    }
    res.send(JSON.stringify(data));
})

app.get('/readfile',(req,res)=>{
    let data = fs.readFileSync('input.txt');

    console.log(data.toString());
    console.log("Program Ended");
})
app.listen(5001);