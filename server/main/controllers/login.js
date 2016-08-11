'use strict';
  var http = require('http');
 // var services = require('../services');
 var loginService = {};

var login = function(host, port, userName, password, callback){
	console.log(host + " " + port);
	var options = {
	  hostname: host,
	  path: "/login?userName=" + userName +"&password=" + password,
	  port: port
	};

	var cb = function(response) {
		var str = '';
		//another chunk of data has been recieved, so append it to `str`
		response.on('data', function (chunk) {
			str += chunk;
		});

		//the whole response has been recieved, so we just print it out here
		response.on('end', function () {
			console.log(str);
			callback(str);
		});
	}
	var req = http.request(options, cb).end();
}

var findLoginService = function(host, port, callback, userName, password) {
	host = host? host : "10.0.9.30";
	port = port? port : 3001;
	var options = {
	  hostname: host,
	  path: "/find?name=loginservices",
	  port: port
	};
	var cb = function(response) {
		var str = '';
		//another chunk of data has been recieved, so append it to `str`
		response.on('data', function (chunk) {
			str += chunk;
		});
		response.on('end', function() {
			loginService = JSON.parse(str);
			var location = loginService.location;
			console.log(loginService);
			login(location["host"], location["port"], userName, password, callback);
		});
	}
	var req = http.request(options, cb).end();
};

exports.login = (req, res) => {
  var userName = req.body.userName;
  var password = req.body.password;
  console.log(userName + "  "+ password);
  
  var callback = function(obj) {
	res.json(obj);
  };
  findLoginService(null, null, callback, userName, password);
};


