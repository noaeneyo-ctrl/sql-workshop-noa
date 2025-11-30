const connection = require("../db/connection");

function getSchoolAdmins() {
  console.log("blaa2");
  console.log("in");
  let sql = `select school.name AS school_name, admin.name AS admin_name 
FROM school
JOIN admin 
on school.id = admin.school_id
`;
  connection.query(sql, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(res);
  });
}

module.exports = { getSchoolAdmins };
