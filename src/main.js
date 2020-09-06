const express = require("express");
const app = express();

//In node there is "http" and in express there is "app"

app.get("/",(req,res) => {
    const json = {
        id:1,
        name:"sumeet d",
    } 
  res.json(json);

})

// app.listen(3300);


app.get("/search",(req,res) => {
    const id = req.query.id;
    const name = req.query.name;

    const json = {
        id:2,
        name:"pratham",
    }

    res.json(json);
})

app.listen(3300);