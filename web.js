var express = require('express');
var fs = require('fs');
var buff = fs.readFileSync("index.html");
var app = express.createServer(express.logger());
var content = buff.toString()



app.get('/', function(request, response) {
    
    response.send(content);

});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
