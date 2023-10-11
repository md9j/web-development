import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import ejs from 'ejs';
import dotenv from 'dotenv';
import fs from "fs";

dotenv.config();

const API_KEY = process.env.API_KEY;
const app = express();
const pathToCountriesJSON = "data/countries.json";

let countryList = null;

// Set up body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up EJS as the view engine
app.use(express.static("public"));
app.set('view engine', 'ejs');

// Define a route that renders a form for the user to enter location
app.get('/', (req, res) => {
  res.render('weather', {countryList});
});

// Define a route that handles the form submission and makes a request to the weather API
app.post('/', async (req, res) => {
  const { city } = req.body;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

  try {
    const response = await axios.get(url);
    const { main } = response.data;
    const temperature = main.temp;
    res.render('result', { city, temperature });
  } catch (error) {
    res.render('error');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Read JSON data from file and parse it into countryList
fs.readFile(pathToCountriesJSON, "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading the JSON file:", err);
    return;
  }
  try {
    countryList = JSON.parse(jsonString); // Parse JSON data into the countryList variable
    console.log("JSON parsing successful");
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});