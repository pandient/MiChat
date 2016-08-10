'use strict';


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
