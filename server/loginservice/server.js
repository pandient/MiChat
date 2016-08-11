
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
const os = require('os');

var ifaces = os.networkInterfaces();
var hostIP;

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      //console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      //console.log(ifname, iface.address);
	  if (ifname.indexOf('Local') > -1) {
		hostIP = iface.address;
	  }
    }
    ++alias;
  });
});

var postData = querystring.stringify({
	"name": "loginservices",
	"host": hostIP,
	"port": "3002"
});
//options include hostname and port to service registry
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
	console.log("ok, i've told the service registry");
});

req.on('error', function(err) {
	console.log("problem with adding to service registry");
});
req.write(postData);
req.end();