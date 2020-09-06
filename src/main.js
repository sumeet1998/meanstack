let Promise = require("bluebird");
let mysql = require("mysql");
let express = require("express");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require("./module1");
let dbadd = require("./db.add");


let app = express();

app.get("/", async (req,res)=>{

    try{
    const Username = req.query.Username;
    const Password = req.query.Password;
    const Emailid = req.query.Emailid;
    const Mobile = req.query.Mobile;


   
        let connection = mysql.createConnection(config.db_config);

        await connection.connectAsync();

        let sql = "insert into user (username,password,emailid,mobile) values (?,?,?,?)";
        await connection.queryasync(sql,[Username,Password,Emailid,Mobile]);

        await connection.endAsync();

        const json = {message : "we are successful"};
        res.json(json);

    }catch(err){
        const json = {message:"failure"};
        res.json(json);
    }
});



app.get("/search",async(req,res)=>{

    try {
    const input = req.query;
    await dbadd.addrecord(input);

    const json = { message: "Success" };
    res.json(json);
  } catch (err) {
    const json = { message: "Failure" };
    res.json(json);
  }
});

app.listen(3300);