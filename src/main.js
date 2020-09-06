const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "dac2020",
};

let addRecord = async () => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  // LOGIC
  let sql =
    "INSERT INTO USER (username, password, emailid, mobile) VALUES (?, ?, ?, ?)";
  let operation = await connection.queryAsync(sql, [
    "Sumeet Debadwar",
    "12345",
    "sumeet@gmail.com",
    "3456789012",
  ]);

  await connection.endAsync();
  return operation;
};

addRecord();

