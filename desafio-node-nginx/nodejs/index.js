const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const { faker } = require("@faker-js/faker");
const mysql = require("mysql");
const connection = mysql.createConnection(config);
const createTable = `CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))`;
connection.query(createTable);
connection.end();

app.get("/", (req, res) => {
  const name = faker.name.fullName();
  const connection = mysql.createConnection(config);
  const insertName = `INSERT INTO people(name) values('${name}')`;
  connection.query(insertName);
  const getNames = `SELECT * FROM people`;
  connection.query(getNames, (error, results) => {
    const names = results.map((result) => result.name);
    const items = names.map((name) => `<li>${name}</li>`).join("");
    res.send(`<h1>Full Cycle Rocks!</h1><ul>${items}</ul>`);
  });
  connection.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
