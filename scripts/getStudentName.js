const connection = require("../db/connection");

function getStudentName() {
  console.log("blaa2");
  console.log("in");
  let sql = `SELECT name FROM student`;
  connection.query(sql, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(res);
  });
}

module.exports = { getStudentName };
