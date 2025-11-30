const connection = require("../db/connection");
const fs = require("fs");
const path = require("path");

/**
 * Creates database tables based on entity definitions in /entities directory
 */
async function createTables() {
  // TODO: Read all JSON files from the /entities directory
  // const filename = await getFiles();

  const filename = fs.readdirSync("./entities");

  const files = filename.filter((file) => {
    return file.includes(".json");
  });

  // TODO: For each entity file:
  //   1. Read and parse the JSON file
  //   2. Extract the table name from the filename (e.g., 'student.json' -> 'students')
  //   3. Convert the JSON structure to CREATE TABLE SQL statement
  //   4. Handle the field types and constraints (PRIMARY KEY, AUTO_INCREMENT, etc.)
  files.forEach((file) => {
    const nameOfFile = file.split(".")[0];
    fs.readFile(
      path.join(__dirname, "../entities", file),
      "utf8",
      (err, data) => {
        if (err) {
          return;
        }
        const tableData = JSON.parse(data);
        const keys = Object.keys(tableData);
        const values = Object.values(tableData);
        let sql = `CREATE TABLE ${nameOfFile}(`;
        for (let i = 0; i < keys.length - 1; i++) {
          sql = sql + ` ${keys[i]} ${values[i]},`;
        }
        sql = sql + ` ${keys[keys.length - 1]} ${values[keys.length - 1]})`;
        connection.query(sql, (err, res) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("tablle created");
        });
      }
    );
  });
}
// TODO: Execute each CREATE TABLE query using the connection
// Hint: Use connection.promise().query() for async/await or connection.query() for callbacks
// Hint: Add error handling for each query execution

// TODO: Close the connection after all tables are created
// Hint: Use connection.end()

// console.log("TODO: Implement table creation logic");

// Export the function
module.exports = { createTables };

// Uncomment the line below to run this script directly
// createTables();
