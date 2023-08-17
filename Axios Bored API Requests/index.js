// imort required modules
import express, { response } from "express";
import bodyParser from "body-parser";
import axios from "axios";

// create a new express app
const app = express();
const port = 3000;

// use the express-static and body-parser middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// set the view engine to ejs
app.set("view engine", "ejs");

// root route
app.get("/", async (req, res) => {
  // make a get request to the bored api
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    console.log(result);
    res.render("index.ejs", { data: result, error: null });
  // catch any errors and log them to the console
  } catch (error) {
    console.error("Failed to make request:", error.message);
    redirect("/", { data: null, error: error.message });
  }
});

// post route
app.post("/", async (req, res) => {
  // log the request body to the console
  console.log(req.body);
  
  // make a get request to the bored api
  try {
    const type = req.body.type;
    const participants = req.body.participants;
    const response = await axios.get(`https://bored-api.appbrewery.com/filter?participants=${participants}&type=${type}`);
    const result = response.data[Math.floor(Math.random() * response.data.length)];
    console.log(result);
    res.render("index.ejs", { data: result, error: null });
  // catch any errors and log them to the console
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", { data: null, error: error.message});
  }
});

// listen on port 3000
app.listen(port, () => {
  console.log(`It's me, port ${port}, I'm the listening port it's me`);
});
