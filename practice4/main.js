const mod1 = require("./module1");
const mod2 = require("./module2");

console.log(mod1.pi);

let result = mod1.sum(2,6);
console.log(result);

let o1 = mod2.sum(2,5);
let o2 = mod2.diff(15,4);
let o3 = mod2.multiply(15,4);
let o4 = mod2.divison(10,5);

console.log("sum is ",o1);
console.log("difference is ",o2);
console.log("multiplication is",o3);
console.log("divison is",o4);

console.log(o1,o2,o3,o4);
