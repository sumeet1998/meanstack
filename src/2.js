let Promise = require("bluebird");
let mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config1 = require("./module1");

let addrecord = async(user) => {
    const connection = mysql.createConnection(config1.config);

    await connection.connectAsync();

    let sql = "select * from user where password=?";
    let result = await connection.queryAsync(sql,["1234"]);

    await connection.endAsync();
    console.log(result);
    return result;
    
}

addrecord();