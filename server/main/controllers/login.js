'use strict';
  var http = require('http');
 // var services = require('../services');
 
 //info for service registry
 var host = "10.0.9.30";
 var port = 3001;

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
	var req = http.request(options, cb);
	req.on('error', function(error) {
		console.log(error);
		callback({message: "error"})
	});
	req.end();
}

var findLoginService = function(callback, userName, password) {
	//need to look at service registry to services
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
			var loginService = JSON.parse(str);
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
  findLoginService(callback, userName, password);
};


