//import orm.js into burger.js

//build code that will call the ORM functions using buger specific input for ORM

//export at the end 

var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(newBurger, cb) {
        orm.insertOne("burgers", "burger_name", "devoured", newBurger, false, function(res) {
            cb(res);
        });
    },
    updateOne: function(condition, burgerID, cb){
        orm.updateOne("burgers", "devoured", condition, "id", burgerID, function(res) {
            cb(res);
        });
    },
    deleteOne: function(burgerID, cb){
        orm.deleteOne("burgers", "id", burgerID, function(res){
            cb(res);
        });
    }
};

module.exports = burger;