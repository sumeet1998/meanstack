let intro = async() => {
    console.log("Hello World");
    return "Hello India";
}

let mpromise = intro();
mpromise.then((data) =>
{
console.log(data);
});
mpromise.catch((err) => {
    console.log(err);
});