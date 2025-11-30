const connection = require("../db/connection");

function addStudent(name, password, classroomid) {
  console.log(name);
  console.log("in");
  let sql =
    "INSERT INTO student (name, password ,classroom_id) VALUES (?, ?, ?)";
  connection.query(sql, [name, password, classroomid], (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
  });
}

module.exports = { addStudent };
