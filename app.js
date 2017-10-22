// Basic required import for NodeJS

var express = require('express');
var bodyparser = require('body-parser')
var cors = require('cors');

// Create an instance of express  for our app and instantiate bodyparser  and cors
var app = module.exports = express();
app.use(bodyparser.json());
app.use(cors());

//Get call to return json that format natural and unix date format
app.get('/:datval' , function(req,res){

var datval = req.params.datval;

//Options for Formation datevalue in natural date 

var dateFormatting = {
    year : 'numeric',
    month : 'long',
    day : 'numeric'
};

if(isNaN(datval)){

    var naturalDate = new Date(datval);
if(naturalDate == 'Invalid Date'){
    res.send({"Message": 'Invalid Date format'});
}
else{
    naturalDate = naturalDate.toLocaleDateString("en-us",dateFormatting);
    var unixDate = new Date(datval).getTime()/1000;
    res.json({Unix : unixDate , NaturalDate : naturalDate});
}

}


else
{
var unixDate = datval ;
var naturalDate = new Date(datval * 1000);
naturalDate = naturalDate.toLocaleDateString("en-us",dateFormatting);
 res.json({Unix : unixDate , NaturalDate : naturalDate});
}
})



app.listen(3000,function(){
    console.log("Its Working")
})
