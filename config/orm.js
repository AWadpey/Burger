//create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()` 
// * `insertOne()` 
// * `updateOne()` 

// * Export the ORM object in `module.exports`.

var connection = require("../config/connection.js");
var mysql = require("mysql");

var orm = {
    selectAll: function(table, cb){
        var query = 'SELECT * FROM ??';
        connection.query(query, [table], function(err, res){
            if(err) throw err;
            cb(res);
        });
    },
    insertOne: function(table, colOne, colTwo, valOne, valTwo, cb){
        var query = 'INSERT INTO ?? (??, ??) VALUES (?, ?)';
        var creates = [table, colOne, colTwo, valOne, valTwo];
        var string = mysql.format(query, creates);
        connection.query(string, function(err, res){
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function(table, colOne, valOne, colTwo, valTwo, cb){
        var query = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(query, [table, colOne, valOne, colTwo, valTwo], function(err, res){
            if (err) throw err;
            cb (res);
        });
    },
    deleteOne: function(table, colOne, valOne, cb){
        var query = 'DELETE FROM ?? WHERE ?? = ?';
        connection.query(query, [table, colOne, valOne], function(err, res){
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;