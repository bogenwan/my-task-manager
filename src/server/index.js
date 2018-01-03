var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var projectRoutes = require('./projectRoutes.js');
var cors = require('cors');

var session = require('express-session');
var errorhandler = require('errorhandler');
var passport = require('passport');
var util = require('util');
var AsanaStrategy = require('passport-asana').Strategy;;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.use('/projects', projectRoutes);

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('listening at http://localhost:8080');
});
