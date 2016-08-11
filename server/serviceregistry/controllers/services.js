'use strict';

var http = require('http');

var services = {};

exports.find = (req, res) => {
  var name = req.param('name');

  if (services[name] != null && services[name].length != 0) {
    res.json({
      location: services[name].slice(-1)[0]
    });
  }
  else {
    res.json({
      message: "no service online"
    });
  }
};

exports.add = (req, res) => {
  // microservice
  // repond
  var name = req.body.name;
  var host = req.body.host;
  var port = req.body.port;
  var location = {
    "name": name,
    "host": host,
    "port": port
  }
  if (services[name] == null) {
    services[name] = [];
  }
  services[name].push(location);
  res.json({
    message: 'added services'
  });
};

exports.remove = (req, res) => {
  // microservice
  // repond
  var name = req.body.name;
  var location = req.body.location;
  //  services[name].push(location);
  res.json({
    message: 'added services'
  });
};



