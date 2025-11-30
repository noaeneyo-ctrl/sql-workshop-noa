const connection = require("../db/connection");

function deleteStudent(id) {
  console.log(id);
  console.log("in");
  let sql = "DELETE FROM student WHERE id=" + id;
  connection.query(sql, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
  });
}

module.exports = { deleteStudent };
