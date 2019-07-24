var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var bodyParser = require('body-parser');
var url = "mongodb://localhost:27017/";


var app = express();
var usreencodedParser = bodyParser.urlencoded({extended : false});
app.use(usreencodedParser);
app.use(bodyParser.json());
app.listen(5000);
var dbo;



app.get('/createcustomerdb',(req,res)=>{
    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        console.log("Database created!!");
        dbo = db.db("customerdb");
        dbo.createCollection("customers",function(err,res){
            if(err) throw err;
            console.log("Collection created!!")
            db.close();
        });
    });
})
app.get('/insertcustomerdb',(req,res)=>{
    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        dbo = db.db("customerdb");
        var myobj = { name: "Winpro", address: "Hinjewadi Phase-2" };
        dbo.collection("customers").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
})
app.get('/findfirstcustomerdb',(req,res)=>{
    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        dbo = db.db("customerdb");
        dbo.collection("customers").findOne({},function(err,result){
            if(err) throw err;
            console.log("Name-->"+result.name+" Address-->"+result.address);
            res.status(200).json(result);
            db.close();
        });
    });
})
app.get('/getallcustomerdb',(req,res)=>{
    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        dbo = db.db("customerdb");
        dbo.collection("customers").find({}).toArray(function(err,result){
            if(err) throw err;
            console.log(result);
            res.status(200).json(result);
            db.close();
        });
    });
})
app.get('/getallcustomername',(req,res)=>{
    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        dbo = db.db("customerdb");
        dbo.collection("customers").find({},{projection:{_id:0,address:1}}).toArray(function(err,docs){
            if(err) throw err;
            console.log(docs);
            res.status(200).json(docs);
            db.close();
        });
    });
})
app.get('/getcustomerbyquery',(req,res)=>{
    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        var query = {address:"Hinjewadi Phase-3"};
        dbo = db.db("customerdb");
        dbo.collection("customers").find(query).toArray(function(err,result){
            if(err) throw err;
            console.log(result);
            res.status(200).json(result);
            db.close();
        });
    });
})
app.get('/deletecustomer',(req,res)=>{
    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        var myquery = {address:"Hinjewadi Phase-1"};
        dbo = db.db("customerdb");
        dbo.collection("customers").deleteOne(myquery,function(err,obj){
            if(err) throw err;
            console.log("1 document deleted!");
            res.status(200).json(obj);
            db.close();
        });
    });
})
app.get('/updatecustomer',(req,res)=>{
    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        var myquery = { address: "Highway 37" };
        var newvalues = { $set: {name: "IBM", address: "Hinjewadi Phase-4" } };
        dbo = db.db("customerdb");
        dbo.collection("customers").updateOne(myquery,newvalues,function(err,obj){
            if(err) throw err;
            console.log("1 document updated!!");
            res.status(200).json(obj);
            db.connect();
        });
    });
})
