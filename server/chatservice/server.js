
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');

const servicesController = require('./controllers/services');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'jade');

app.post('/sendMessage', chatController.sendMessage);
app.get('/getMessages', chatController.getMessages)

app.listen(3005, function() {
  console.log('chat registry listening on 3005')
})

app.get('/', function(req, res) {
  res.send('this is the chat registry listening')
})



module.exports = app;
