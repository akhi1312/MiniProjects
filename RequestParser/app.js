var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');


// Eary parsing for User Agent response

var useragent = require('express-useragent');

// Create an Instace of express app
var app = module.exports =express();
app.use(bodyparser.json());
app.use(cors());
app.use(useragent.express());

// Api url

var api ='/api/whoami';

app.get(api, function(req,res){
var language = req.acceptsLanguages();
var software = "OS " + req.useragent.os + " Browser " + req.useragent.browser  ;
var ipaddress =  req.ip;
console.log('100');

});

app.listen(3000 ,function(){

console.log('Header Parser is working');

});

