const mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
  database: "miniproject",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//todo: Create MySQL connection

module.exports = connection;
