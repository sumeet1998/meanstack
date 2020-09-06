const Promise = require("bluebird");
const mysql = require("mysql");

// Promisifying the mysql module methods.
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


const config = 
    {
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "dac2020",
      }

let helloDatabase = async () => {
  const connection = mysql.createConnection(config);

  // connection open
  await connection.connectAsync(); // promise

  // let query
  let sql = "SELECT * FROM user where id=?";
  let results = await connection.queryAsync(sql,[2]);

  // close the connection
  connection.end();

  console.log(results);
  return results;
};

helloDatabase();