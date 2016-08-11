
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');

//controller refs
const loginController = require('./controllers/login');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'jade');

//routes
app.get('/login', loginController.login);
app.get('/listofrooms', loginController.listOfRooms);
app.get('/roominfo', loginController.roomInfo);

app.listen(3002, "0.0.0.0", function() {
  console.log('listening on 3002')
})

app.get('/', function(req, res) {
  res.send('Hello World')
})

module.exports = app;

//register service to service registry sometime
const querystring = require('querystring');
const http = require("http");
var postData = querystring.stringify({
	"name": "loginservices",
	"host": "10.0.9.30",
	"port": "3002"
});
var options = {
	hostname: "10.0.9.30",
	port: 3001,
	method: "POST",
	path: "/add",
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': Buffer.byteLength(postData)
	}
};
var req = http.request(options, function(response) {
	console.log("ok, i've requested");
});

req.on('error', function(err) {
	console.log("problem with adding to service registry");
});
req.write(postData);
req.end();