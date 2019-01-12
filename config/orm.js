var connection = require("../config/connection.js");

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols,val, cb) {
    var queryString = "INSERT INTO " + table + " ("+ cols +")" + " VALUES (" + "?)" ;
    
    console.log(queryString);

    connection.query(queryString, val, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
      console.log((result));
    });
  },
  
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table + " SET eat = " + objColVals + " WHERE " + condition ;

    
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
}

};


module.exports = orm;
