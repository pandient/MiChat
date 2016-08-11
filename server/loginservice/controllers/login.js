'use strict';


exports.login = (req, res) => {
  var userName = req.body.userName;
  var password = req.body.password;
  console.log("login from microservice");
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

exports.listOfRooms = (req, res) => {
  // look in db for list of rooms - hardcoded
  res.json( {
    roomList: [1, 2, 3, 4]
  });
};

exports.roomInfo = (req, res) => {
  // request contains roomId, look up in db for room info
  res.json( {
    roomName: "test"
  });
};


