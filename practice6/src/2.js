const fs = require("fs");
const promise = require("bluebird");

promise.promisifyAll(fs);

let readdemo = () => {
    let mpromise = fs.readFileAsync("src/Text.txt", {encoding:"utf-8" });
    console.log(mpromise);
    mpromise.then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
}

readdemo();