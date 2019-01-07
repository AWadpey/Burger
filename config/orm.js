//create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()` 
// * `insertOne()` 
// * `updateOne()` 

// * Export the ORM object in `module.exports`.

var connection = require("../config/connection.js");
var mysql = require("mysql");

// function printQuestionMarks(num) {
//     var arr = [];

//     for (var i = 0; i < num; i++) {
//         arr.push("?");
//     }
//     return arr.toString();
// }

// function objToSql(ob) {
//     var arr = [];

//     for (var key in ob) {
//         var value = ob[key];
//         if (Object.hasOwnProperty.call(ob, key)) {
//             if (typeof value === "string" && value.indexOf(" ") >= 0) {
//                 value = "'" + value + "'";
//             }
//             arr.push(key + "=" + value);
//         }
//     }
//     return arr.toString();
// }

// var orm = {
//     all: function(tableInput, cb) {
//         var queryString = "SELECT * FROM " + tableInput + ";";
//         connection.query(queryString, [table], function(err, result) {
//             if (err) throw err;
        
//             cb(result);
//         });
//     },
//     create: function(table, cols, vals, cb) {
//         var queryString = "INSERT INTO " + table;

//         queryString += " (";
//         queryString += cols.toString();
//         queryString += ") ";
//         queryString += "VALUES (";
//         queryString += printQuestionMarks(vals.length);
//         queryString += ") ";

//         console.log(queryString);

//         connection.query(queryString, vals, function (err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         });
//     },
//     update: function(table, objColVals, condition, cb) {
//         var queryString = "UPDATE " + table;

//         queryString += " SET ";
//         queryString += objToSql(objColVals);
//         queryString += " WHERE ";
//         queryString += condition;

//         console.log(queryString);
//         connection.query(queryString, function(err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         });
//     },
//     delete: function(table, )
// };

// module.exports = orm;

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