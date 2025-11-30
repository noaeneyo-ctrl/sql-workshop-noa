const connection = require("../db/connection");

function addTeacher(teachername, teacherpassword, teacheremail) {
  console.log(teacheremail);
  console.log("in");
  let sql = "INSERT INTO teacher (name, password ,email) VALUES (?, ?, ?)";
  connection.query(
    sql,
    [teachername, teacherpassword, teacheremail],
    (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
    }
  );
}

module.exports = { addTeacher };
