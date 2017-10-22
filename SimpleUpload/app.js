var express = require('express');
var cors = require('cors');
var multer = require('multer');
var bodyparser = require('body-parser');
var upload = multer({dest:'uploads/'});
var app = module.exports = express();
app.use(bodyparser.json());
app.use(cors());

app.use(express.static(__dirname +  '/public'));

app.post('/upload',upload.single('file') , function(req ,res){

    return res.json(req.file);

});




app.listen(4000,function(){
    console.log("Listening on Port 4000");
});

