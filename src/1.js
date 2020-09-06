const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = {
    host     : "127.0.0.1",
  user     : "root",
  password : "",
  database : "dac2020",
};

let addrecord = async() => {
  let connection =  mysql.createConnection(config);

  await connection.connectAsync();

  let sql= "insert into user (username, password, emailid, mobile) values (?,?,?,?)";
  let addvalue = await connection.queryAsync(sql,[
    "prathamesh",
    "1234",
    "pratham@234",
    "9456473850",
  ])

  await connection.endAsync();
  return addvalue;
}

addrecord();