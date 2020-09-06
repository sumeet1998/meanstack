let Promise = require("bluebird");
let mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config1 = require("./module1");

let addrecord = async() => {
    const connection = mysql.createConnection(config1.config);

    await connection.connectAsync();

    let sql = "insert into user (username,password,emailid,mobile) values (?,?,?,?)";
    let result = await connection.queryAsync(sql,[
        "rohan",
        "1234",
        "rohan@123",
        "1234567890",
    ]);

    await connection.endAsync();
    return result;
}

addrecord();