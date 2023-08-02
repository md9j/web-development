import express from "express";

const app = express();
const port = 3000;

// Set the view engine to EJS
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static("public"));

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`It's me, port ${port}, I'm the listening port it's me`);
});

// Route handlers for the different URLs
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});
