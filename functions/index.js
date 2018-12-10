const functions = require('firebase-functions');
var fs = require('fs');

const express = require('express');
const server = express();

// const restify = require('restify'); 
// const server = restify.createServer(); 


server.use(
    function crossOrigin(req, res, next){
        res.header("Access-Cintrol-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    }
);

//server.use(restify.plugins.bodyParser());

//server.get('/static/*', restify.plugins.serveStatic({
   //directory: __dirname,
   // default: __dirname + '/index.js'
//}));

server.post('/api/train',
    function(req, res, next){
    console.log(req.body);
    var train = req.body;
    // insertTrain(train);
    // res.sendStatus(200);
    // res.end();
    res.send(JSON.stringify(train));
    next();
});

server.get('/', function(req,res, next){ 
    console.log('/main.. was called'); 
    res.writeHead(200, {"Content-Type":"text/html"});
    file = fs.createReadStream('../public/index.html');
    file.pipe(res);
    return next();
}); 

server.get('/index.html', function(req, res, next){ 
    res.writeHead(200, {"Content-Type":"text/html"});
    file = fs.createReadStream('../public/index.html');
    file.pipe(res);
    return next();
}); 

server.get('/profile.html', function(req,res, next){ 
    console.log('/main.. was called'); 
    res.writeHead(200, {"Content-Type":"text/html"});
    file = fs.createReadStream('../public/profile.html');
    file.pipe(res);
    return next();
}); 

server.get('/indexStyle.css', function(req, res, next){ 
    res.writeHead(200, {"Content-Type":"text/css"});
    file = fs.createReadStream('../public/indexStyle.css');
    file.pipe(res);
    return next();
}); 

server.get('/profileStyle.css', function(req, res, next){ 
    res.writeHead(200, {"Content-Type":"text/css"});
    file = fs.createReadStream('../public/profileStyle.css');
    file.pipe(res);
    return next();
}); 

server.get('/main.js', function(req, res, next){ 
    res.writeHead(200, {"Content-Type":"text/js"});
    file = fs.createReadStream('../public/main.js');
    file.pipe(res);
    return next();
}); 


String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};


exports.server = functions.https.onRequest(server);

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "35.236.149.253",
  user: "root",
  password: "root",
});

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};

 function insertTrain(train) {
    con.connect(function (err) {
        if (err)
            throw err
        con.query('use train_schedule;', function (err, result, fields){ 
        if(err) 
            throw err;
    });
    //var values = Object.values(train);
    var sql =`INSERT INTO trains (${Object.keys(train).join(',')})` + 'VALUES (' + ' \' ' + 
    trains.train_number + ' \' '+ ',' + trains.homestation_id +')' ;
    console.log(sql);

    con.query(sql, function (err, result) {
        console.log(err);
        
    });
    })
    
}
// window.alert("OK!");