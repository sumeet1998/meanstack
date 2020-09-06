const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./module1");

let sqlrecord = async (input) => {
    const connection = mysql.createConnection(config.db_config);

    await connection.connectAsync();

    let sql = "insert into (username,password,emailid,mobile) values (?,?,?,?)"; 
    let result = await connection.queryAsync(sql, [
        input.username,
        input.password,
        input.email,
        input.mobile,
    ]);

    await connection.endAsync();
    return result;
}

// sqlrecord(); this wrong 
module.exports = {
    sqlrecord
};