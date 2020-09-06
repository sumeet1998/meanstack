const fs = require("fs");

let readDemo = () => {
  try {
    const filePath = "src/text.txt";
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    console.log(fileContent);
    console.log("hello");
  } catch (err) {
    console.log("There is some problem", err.message);
  }
};

readDemo();

// let readDemoWithoutException = () => {
//   const filePath = "/Users/research/Desktop/teemp.txt";
//   const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

//   console.log(fileContent);
// };

// readDemoWithException();