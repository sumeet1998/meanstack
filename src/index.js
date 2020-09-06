// console.log("hello world");
// console.log("hello nodejs!!");
// console.log(1,"hello world");


let http = require("http");

http.createServer( (request,response) => {
    let json= {
        id:"1",
        name: "Sumeet",
        city: "Mumbai",
        title: "CDAC"
    }

    response.end(JSON.stringify(json));

}).listen(5600);
