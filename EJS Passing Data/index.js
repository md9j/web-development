import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("hello");
  res.render("index");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  var letterCount = req.body["fName"].length + req.body["lName"].length;
  res.render("index", { letterCount: letterCount });
});

app.listen(port, () => {
  console.log(`It's me, port ${port}, I'm the listening port it's me`);
});
