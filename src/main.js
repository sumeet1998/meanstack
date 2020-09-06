let person = require("./person");
let employee = require("./employee");

class Main
{
    static main()
    {
        console.log("Hello there");

        let p = new person;
        let o1 = p.getname();
        console.log(o1);

        let e = new employee;
        let o2 = e.hello();
        console.log(o2);
    }
}
Main.main();