const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const dbconfig = {
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "dac2020",
};

const addUser = async (input) => {
  const connection = mysql.createConnection(dbconfig);

  await connection.connectAsync();

  const sql =
    "INSERT INTO USER (username,password,emailid,mobile) VALUES (?, ?, ?, ?)";
  await connection.queryAsync(sql, [
    input.username,
    input.password,
    input.email,
    input.mobile,
  ]);

  await connection.endAsync();
};

let authenticateUser = async (input) => {
  const connection = mysql.createConnection(dbconfig);
  await connection.connectAsync();

  let sql = "SELECT * FROM USER WHERE username=? AND password=?";
  const results = await connection.queryAsync(sql, [
    input.username,
    input.password,
  ]);

  await connection.endAsync();

  if (results.length === 0) {
    throw new Error("Invalid Credentials");
  }
};

module.exports = { addUser,authenticateUser };