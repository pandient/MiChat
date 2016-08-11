


exports.sendMessage = (req, res) => {
  // microservice
  // repond
  res.json( {
    message: 'messagerecieved'
  });
};

exports.getMessages = (req, res) => {
  // microservice
  // repond
  res.json( {
    messages: ["1"]
  });
};

exports.listOfRooms = (req, res) => {
  // look in db for list of rooms - hardcoded
  res.json( {
    roomList: ["DDX","ZEMA","DM","Support","Data Delivery"]
  });
};