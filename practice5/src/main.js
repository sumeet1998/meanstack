const http = require("http")   //inline module
const mod1 = require("./module1"); //local module



http.createServer( (req,res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const result = JSON.stringify(mod1.list);
    res.end(result);
}).listen(5600);

