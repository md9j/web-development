import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

var bandname = "";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);
app.use(generateBandName);

app.listen(port, () => {
  console.log(`It's me, port ${port}, I'm the listening port it's me`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");}
  );

app.post("/submit", (req, res) => {
  res.send(`<h1>Your Band Name is...</h1><br/><h2>${bandname}</h2>`);
});

function logger(req, res, next) {
  console.log("Request method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
};

function generateBandName(req, res, next) {
  console.log(req.body);
  bandname = req.body["street"] + req.body["pet"] + " " + req.body["verb"] + " 🤘";
  next();
};