const connection = require("../db/connection");

function updateTeacher(id, key, value) {
  console.log(`${id} ${key} ${value}`);
  console.log("in");
  let sql = `UPDATE teacher SET ${key}='${value}' WHERE id=${id}`;
  connection.query(sql, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
  });
}

module.exports = { updateTeacher };
