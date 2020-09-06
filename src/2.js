const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


let selectrecord = async() => {
    const connection = mysql.createConnection({
        host     : "127.0.0.1",
        user     : "root",
        password : "",
        database : "dac2020",
    });

    await connection.connectAsync();

    let sql= "select * from user";
    let operation = await connection.queryAsync(sql)

    await connection.endAsync();
    return operation;

}

selectrecord();