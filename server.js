const mysql = require("mysql2");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Ppinhead1951@",
    database: "election",
  },
  console.log("Connected to the election database.")
);

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

//default response for any other reqquest (not found)
app.use((req, res) => {
  res.status(404).end();
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
