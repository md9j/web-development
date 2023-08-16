import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const port = 3000;
const pathToJSON = "./recipe.json";

let recipeList = null; // Holds the parsed JSON data
let selectedRecipe = null; // Holds the selected recipe object

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { recipe: selectedRecipe }); // Renders the EJS template with the selected recipe
});

app.post("/recipe", (req, res) => {
  const targetID = req.body.choice; // Gets the selected recipe ID from the form
  selectedRecipe = recipeList.find(recipe => recipe.id === targetID); // Finds the selected recipe in the recipeList
  res.redirect("/"); // Redirects to the main page
});

app.listen(port, () => {
  console.log(`It's me, port ${port}, I'm the listening port it's me`);
});

// Read JSON data from file and parse it into recipeList
fs.readFile(pathToJSON, "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading the JSON file:", err);
    return;
  }
  try {
    recipeList = JSON.parse(jsonString); // Parse JSON data into the recipeList variable
    console.log("JSON parsing successful");
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});