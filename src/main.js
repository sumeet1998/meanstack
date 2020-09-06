const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");

app.use(express.json()); //parsing the request body of POST
app.use(cors()); // ajax request
app.use(express.urlencoded({ extended: true })); // BODY :: URL ENCODED
const upload = multer(); // BODY :: FORM DATA

const dbadd = require("./add.user");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/adduser", async (req, res) => {
  try {
    const input = req.query;

    await dbadd.addUser(input);

    res.json({ message: "success" });
  } catch (err) {
    res.sendStatus(500);
  }
});

app.post("/adduser", async (req, res) => {
  try {
    const input = req.body;

    await dbadd.addUser(input);

    res.json({ message: "success" });
  } catch (err) {
    res.sendStatus(500);
  }
});

app.post("/auth-user", async (req, res) => {
  try {
    const input = req.body;

    await dbadd.authenticateUser(input);
    res.json({ opr: true });
  } catch (err) {
    res.json({ opr: false });
  }
});

app.post("/sample", upload.none(), async (req, res) => {
  res.json(req.body);
});



app.listen(3000);