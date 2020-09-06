const fs = require("fs");
const promise = require("bluebird");



let readdemo = () => { 
        let path = "src/Text.txt"; 
        fs.readFile(path, { encoding : "utf-8"}, (err,data) => {
        console.log(data);
        });
};

 readdemo();


//  try {
//     let readdemo = () => { 
//         let path = "src/Text.txt"; 
//         fs.readFile(path, { encoding : "utf-8"}, (err,data) => {
//         console.log(data);
//         });
//     };
//  }catch(err)
//  {
//      console.log(err);
//  }