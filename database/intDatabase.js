var Person = require("./models/person.js");


var getPersonSchema = function(){
    return Person.getPersonSchema();
}

var addPerson = function(person){
    return Person.addPerson(person);
};

var listAllPeople = function(){
    return Person.listAllPeople();
};

module.exports = {
    getPersonSchema : getPersonSchema,
    addPerson : addPerson,
    listAllPeople : listAllPeople
}