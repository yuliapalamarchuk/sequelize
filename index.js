const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "real-estate-agency",
});

connection.query("SELECT * FROM staff WHERE id = 1", (err, result) => {
  if (err) {
    throw err;
  }
  console.log(result);

});

connection.execute(
  "SELECT * FROM secondary_flats WHERE price > ?",
  [6000000],
  function (err, results) {
    console.log(results);
  }
  
);

// const post = { name: "galina", birthday: "1998-03-02", city: "Rostov" };
// const query = connection.query(
//   "INSERT INTO users SET ?",
//   post,
//   function (error, results, fields) {
//     if (error) throw error;
//   }
// );
