var util 				    = require('util');
var mysql       		= require("mysql");

const PORT = 2021;

module.exports = {
  GetPool: GetPool
};

var connectionPool = mysql.createPool({
  connectionLimit   : 10,
  host            	: process.env.MELODY_DB_HOST,
  user            	: process.env.MELODY_DB_USER,
  port            	: process.env.MELODY_DB_PORT,
  password   	      : process.env.MELODY_DB_PASSWORD,
  database     	    : process.env.MELODY_DB_DATABASE
});

function GetPool() {
  return connectionPool;
}
