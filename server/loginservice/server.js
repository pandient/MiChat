
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');

//controller refs
const loginController = require('./controllers/login');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'jade');

//routes
app.get('/login', loginController.login);

app.listen(3002, "0.0.0.0", function() {
  console.log('listening on 3002')
})

app.get('/', function(req, res) {
  res.send('Hello World')
})

module.exports = app;
