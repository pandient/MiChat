'use strict';

var http = require('http');
var services = {};

exports.find = (req, res) => {
  // microservice
  // repond
  var name = req.body.name
  var ser = services[name];
  var max = ser.length;
  if(max == 0){
      res.json( {
         message: "no service online"
     });
  }
  res.json( {
    location: ser[max-1]
  });
};

exports.add = (req, res) => {
  // microservice
  // repond
  var name = req.body.name;
  var host = req.body.host;
  var port = req.body.port;
  services[name].push(location);
  res.json( {
    message: 'added services'
  });
};

exports.remove = (req, res) => {
  // microservice
  // repond
  var name = req.body.name;
  var location = req.body.location;
//  services[name].push(location);
  res.json( {
    message: 'added services'
  });
};



