var mongoose = require('mongoose');
var mongoUrl = "mongodb://localhost/new-app";

var mongooseConnect = function(){
    console.log('Mongoose started');
    mongoose.connect(mongoUrl);
}


module.exports = {
    mongooseConnect : mongooseConnect,
    mongoUrl : mongoUrl
};