'use strict';
  var http = require('http');
 // var services = require('../services');

var login = function(host, path , userName , Password){
var options = {
  host: host,
  path: path
};

callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
    return str;
  });
}

http.request(options, callback).end();
}

exports.login = (req, res) => {
  // microservice
  // repond
 
  var userName = req.body.userName;
  var password = req.body.password;
  console.log(userName + "  "+ password);
 // console.log(req);
  if(userName === 'admin' && password === 'password'){
    res.json( {
    userid: 'f3fsdf242f'
  });
  }else {
     res.json( {
    message: 'please specify valid credentials'
  });
  }
  
};


