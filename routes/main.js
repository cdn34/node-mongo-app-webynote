var router = require("express").Router();
var intDatabase = require("../database/intDatabase");


router.get('/', function(req, res, next){
    return intDatabase.listAllPeople().then(function(result){
        console.log(result);
        res.json(result);
    }).catch(function(error){
        res.json(error);
    });
});


router.get('/addPerson', function(req, res, next){
    console.log(req.query['name']);
    
    var person = intDatabase.getPersonSchema();
    person.name = req.query['name'];
    person.age = req.query['age'];
    
    return intDatabase.addPerson(person).then(function(result){
        console.log(result);
        res.json(result);
    }).catch(function(error){
        res.json(error);
    });
});

module.exports = router;