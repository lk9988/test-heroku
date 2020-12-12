const express = require('express');
const app = express();

var PORT = process.env.PORT || 3001;
// process.env.PORT -> heroku port
// 3001 -> my localhost port

app.get('/', function (req, res) {
	// URL request
	res.send('Hello World');
});

app.listen(PORT, function () {});
