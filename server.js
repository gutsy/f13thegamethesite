var express = require('express');
var app = express();


app.get('/', function(req, res) {
	res.send('JASON IS COMING');
});

app.listen(3000);
console.log("Express started on port 3000, ya'll.");