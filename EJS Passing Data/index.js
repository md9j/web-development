import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Set up middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Route handler for the root URL ("/")
app.get("/", (req, res) => {
  // Render the "index" view (EJS template)
  res.render("index");
});

// Route handler for the "/submit" URL with POST method
app.post("/submit", (req, res) => {
  // Log the request body to the console
  console.log(req.body);

  // Calculate the letter count by summing the lengths of first name and last name from the request body
  var letterCount = req.body["fName"].length + req.body["lName"].length;

  // Render the "index" view (EJS template) and pass the calculated letter count as data
  res.render("index", { letterCount: letterCount });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`It's me, port ${port}, I'm the listening port it's me`);
});
