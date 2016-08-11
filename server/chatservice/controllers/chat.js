'use strict';

exports.sendMessage = (req, res) => {
  // microservice
  // repond
  res.json({
    message: 'messagerecieved'
  });
};

exports.getMessages = (req, res) => {
  // microservice
  // repond
  res.json({
    messages: ["1"]
  });
};