const fs = require("fs");
const promise = require("bluebird");

promise.promisifyAll(fs);

let readfiledemo = () => {
    fs.readFileAsync("src/Text.txt", { encoding:"utf-8"})
    .then((data)=> {
        console.log(data);
                   })
}

readfiledemo();

let demoreadfile = async() =>
{
    await fs.readFileAsync("src/text1.txt", { encoding:"utf-8"}).then((data)=>{       //contain less no. of line text
        console.log(data);
    })
}

demoreadfile();