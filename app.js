var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var usreencodedParser = bodyParser.urlencoded({extended : false});

app.use(usreencodedParser);
var mongoose = require('mongoose');
var User = require('./User');

mongoose.connect("mongodb://localhost:27017/demoDb",function(err,db){
    console.log("Connected...");
    db.close();
});

function InsertData() {
    console.log("In insert Data..");
    var user = User(dummyUser);
    user.save();
    console.log("Data Saved Successfully..");
}

app.get('/getUserdb',(req,res)=>{
    console.log("getUser.");
    User.find({},(err,docs)=>{
        if(err){ console.log('err',err)};
        res.status(200).json(docs);
    })
})
var dummyUser = {
    userid: 4,
    user_name: "Bina",
    user_emailid:"bina@gmail.com",
    password:"bina123",
    city:"Pune",
    mobile:"9422000689"
}


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

app.get('/getUserdb_byId/:Id',(req,res)=>{
    console.log('id -->',req.params.Id);
   
})