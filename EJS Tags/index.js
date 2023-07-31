import express from "express";
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set("view engine", "ejs");

// Route handler for the root URL ("/")
app.get("/", (req, res) => {
  // Data to be passed to the EJS template
  const data = {
    title: "EJS Tags",                                 // Title for the template
    seconds: new Date().getSeconds(),                  // Get the current seconds
    items: ["apple", "banana", "cherry"],              // Array of items to display
    htmlContent: "<strong>This is some strong text</strong>", // HTML content to display (will be escaped)
  };

  // Render the "index.ejs" template and pass the data
  res.render("index.ejs", data);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`It's me, port ${port}, I'm the listening port it's me`);
});
