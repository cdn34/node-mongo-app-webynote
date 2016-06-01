var express = require('express');
var app = express();
var http = require('http');
var compression = require('compression');

var mongoose = require('./database/mongoose');

app.use(compression());


mongoose.mongooseConnect();

//Configure routes
var main = require('./routes/main');

app.use('/', main);

http.createServer(app).listen(80);