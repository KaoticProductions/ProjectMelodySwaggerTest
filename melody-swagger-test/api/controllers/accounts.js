var sql_helper = require('../helpers/sql_helper');

module.exports = {
  accounts: accounts
};

function accounts(req, res) {
  var query = "SELECT account_id FROM Accounts";
  sql_helper.GetPool().query(query,function(err, rows){
    if(err) {
      console.log(err);
      res.json({"error" : true, "message" : "Error executing MySQL query"});
    }
    else {
      res.json({"error" : false, "message" : "Success", "accountIds" : JSON.stringify(rows)});
    }
  });
}
