'use strict';


exports.login = (req, res) => {
  // return an id according to request params, else null
  res.json( {
    userid: 5
  });
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
