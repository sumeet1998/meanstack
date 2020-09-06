class Person 
{
    constructor()
    {
        console.log("I.am.A.consturctor");
    }

    getpersonname()
    {
        return "I am Sumeet";
    }

    getpersonadd()
    {
        return "Mumbai";
    }

    getpersondetail()
    {
        // if function is of same type use .this

        let person = this.getpersonname();
        let address = this.getpersonadd();

        return person+" from "+address;
    }

    static main()
    {
        let p = new Person();
        let detail = p.getpersondetail();
        console.log(detail);
    }
}

Person.main();