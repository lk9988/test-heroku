const express = require('express');
const app = express();

var PORT = process.env.PORT || 3001;
// process.env.PORT -> heroku port
// 3001 -> my localhost port

app.get('/', function (req, res) {
	// URL request
	res.send('Hello World');
});
app.get('/new', function (req, res) {
	// URL request
	res.send('Hello World new ');
});

app.listen(3001);
app.listen(PORT);
