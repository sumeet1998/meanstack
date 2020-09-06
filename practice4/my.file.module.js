const fs= require("fs");
// const { encode } = require("punycode");
// const { DEFAULT_ENCODING } = require("crypto");

let readDemo = () => {
    
  console.log("read.a.file");

  const filepath = "C:\Users\Debadwar\Desktop\Nodejs\practice4\hello.txt"
  const filedata = fs.readFiles(filepath,{encoding : "utf-8"},(err,data) =>{
        console.log(filedata);
  }) 
};

module.exports = {readDemo};