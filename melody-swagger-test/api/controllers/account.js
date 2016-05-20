var sql_helper = require('../helpers/sql_helper');

module.exports = {
  account: account
};

function account(req, res) {
  accountId = req.swagger.params.accountId.value;
  console.log(accountId);
  var query = "SELECT * FROM Accounts WHERE account_id = " + accountId;

  sql_helper.GetPool().query(query,function(err, rows){
    if(err) {
      console.log(err)
      res.json({"error" : true, "message" : "Error executing MySQL query"});
    }
    else {
      res.json({"error" : false, "message" : "Success", "accountPassword" : rows[0].account_password, "accountName" : rows[0].account_name});
    }
  });
}
