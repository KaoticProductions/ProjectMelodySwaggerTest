var util 				    = require('util');
var mysql       		= require("mysql");

module.exports = {
  characters: characters
};

const PORT = 2021;

function characters(req, res) {
  var query = "SELECT * FROM Characters";

  var connection = mysql.createConnection({
    host            	: process.env.MELODY_DB_HOST,
    user            	: process.env.MELODY_DB_USER,
    port            	: process.env.MELODY_DB_PORT,
    password   	      : process.env.MELODY_DB_PASSWORD,
    database     	    : process.env.MELODY_DB_DATABASE
  });
  connection.connect();
  connection.query(query,function(err,rows){
    if(err) {
        res.json({"Error" : true, "Message" : "Error executing MySQL query"});
    }
    else {
        res.json({"Error" : false, "Message" : "Success", "Characters" : JSON.stringify(rows)});
    }
  });
  connection.end();
}
