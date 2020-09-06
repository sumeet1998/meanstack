class Calculator 
{
    add(a,b)
    {
        return a+b;
    }

    substract(a,b)
    {
        return a-b;
    }   

    static main()
    {
        let c = new Calculator();
        let o1 = c.add(5,10);
        console.log("addition of two number is",o1);
    }
}
Calculator.main();