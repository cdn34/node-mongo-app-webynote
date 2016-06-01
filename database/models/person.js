'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var person = new Schema({
    name: String,
    age: Number
});

var PersonSchema = mongoose.model('person', person);

var getPersonSchema = function() {
  return new PersonSchema();
};


var addPerson = function(person){
    return new Promise(function(resolve, reject){
        person.save(function(err, doc){
            if(err)
                reject(err);
            
            resolve(doc);
        });  
    });
};

var listAllPeople = function(){
    return new Promise(function(resolve, reject){
        PersonSchema.find({}, function(err,doc){
            if(err)
                reject(err);
                
            resolve(doc);
        });
    });
}

module.exports = {
    getPersonSchema : getPersonSchema,
    addPerson : addPerson,
    listAllPeople :listAllPeople
}

