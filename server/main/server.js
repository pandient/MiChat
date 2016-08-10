
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');

const apiController = require('./controllers/api');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'jade');


app.get('/api', apiController.getApi);

app.listen(3001, function() {
  console.log('listening on 3000')
})

app.get('/', function(req, res) {
  res.send('Hello World')
})



module.exports = app;
