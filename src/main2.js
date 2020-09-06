const promise = require("bluebird");

let helloworld = () => {
    for(let i=0;i<10;i++)
    {
        console.log("Hello world");
    }
}

let helloindia = () => {
    console.log("Hello india");
}

helloworld();
helloindia();