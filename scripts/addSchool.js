const connection = require("../db/connection");

function addSchool(schoolname) {
  const sql = "INSERT INTO school (name) VALUES (?)";
  connection.query(sql, [schoolname], (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
  });
}

module.exports = { addSchool };
