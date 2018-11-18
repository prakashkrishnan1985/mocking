var express = require('express');
var app = express();
app.use(express.static('public'));
var path = require("path");



    app.get('/*', function(req, res){
        console.log('Received a get request');
        var fileName = req.url;
        fileName = fileName.substring(1);
        res.statusCode = 200;
        res.sendFile(path.normalize(__dirname+"/../responses/"+fileName+".html"));
        
    });

    app.post('/*', function(req, res){
        console.log('Received a post request');
        var fileName = req.url;
        fileName = fileName.substring(1);
        res.statusCode = 201;
        res.sendFile(path.normalize(__dirname+"/../responses/"+fileName+".json"));
    })

    app.put('/*', function(req, res){
        console.log('Received a put request');
        var fileName = req.url;
        fileName = fileName.substring(1);
        res.statusCode = 201;
        res.sendFile(path.normalize(__dirname+"/../responses/"+fileName+".json"));
    })

    app.delete('/', function(req, res){
        console.log('Received a delete request');
        res.statusCode=200;
        res.body="body from delete";
        res.send('Hello from the other side of delete');
    })

    var server = app.listen(8081, function(){
        console.log('listening to port ' + server.address().address);
    })