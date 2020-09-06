const fs = require("fs");
const promise = require("bluebird");

promise.promisifyAll(fs);

let readdemo = async() => {
    try{
    await fs.readFileAsync("src/Text.txt",{ encoding :"utf-8"});
    console.log(data);
    }
    catch(err) {
    console.log(err);
               };
};

readdemo();
