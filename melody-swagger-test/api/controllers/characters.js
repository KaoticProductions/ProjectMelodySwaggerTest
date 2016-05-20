var sql_helper = require('../helpers/sql_helper');

module.exports = {
  characters: characters
};

function characters(req, res) {
  var query = "SELECT * FROM Characters";
  sql_helper.GetPool().query(query,function(err, rows){
    if(err) {
        console.log(err)
        res.json({"error" : true, "message" : "Error executing MySQL query"});
    }
    else {
        console.log(rows);
        res.json({"error" : false, "message" : "Success", "characters" : JSON.stringify(rows)});
    }
  });
}
