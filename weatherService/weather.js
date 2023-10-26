import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import ejs from 'ejs';
import dotenv from 'dotenv';
import fs from "fs";
import { URLSearchParams, URL } from "url";



dotenv.config();

const port = 3000;
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const OPENWEATHER_API_KEY_END = "&appid=" + OPENWEATHER_API_KEY;
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const app = express();
const pathToCountriesJSON = "data/countries.json";
const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/3.0/onecall";
const LOCATION_API_BASE_URL = "http://api.openweathermap.org/geo/1.0/";

let countryList = null;
let data = null;
let error = null;

// Set up body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up EJS as the view engine
app.use(express.static("public"));
app.set('view engine', 'ejs');

// Start the server
app.listen(port, () => {
  console.log('It\'s me, port ' + port + ' Hi! I\'m the listening port it\'s me!');
});

// Define a route that renders a form for the user to enter location
app.get('/', (req, res) => {
  console.log("home page!");
  res.render('weather', {countryList, GOOGLE_MAPS_API_KEY, data: data, error: error});
});

// Define a route that handles the form submission and makes a request to the weather API
app.post('/submit-form', async (req, res) => {
  const zipCode = req.body['zip-code'];
  const city = req.body.city;
  const countryCode = req.body.country;
  const minutely = req.body['by-the-minute'];
  const hourly = req.body.hourly;
  const daily = req.body.daily;
  const alerts = req.body.alerts;

  // endpoint with parameters for lat & long retrieval via zip/postal code and country code
  const locationEndpoint = "zip?zip=" + zipCode + "," + countryCode + OPENWEATHER_API_KEY_END;

  // url with endpoint and parameters
  const locationUrl = new URL(locationEndpoint, LOCATION_API_BASE_URL);

  // axios api request
  try {
    const latLonCoordinates = await getLatLonCoordinatesFromZip (zipCode, countryCode, locationUrl);
    const weatherData = await getWeatherDataFromLatLon (latLonCoordinates, WEATHER_API_BASE_URL, OPENWEATHER_API_KEY_END);

    res.render('weather', {countryList, GOOGLE_MAPS_API_KEY, data: weatherData.data, error: null });
  } 
  catch (error) {
    console.error("Failed to make request:", error.message);
    res.render('weather', {countryList, GOOGLE_MAPS_API_KEY, data: null, error: error.message });
  }
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

/* *** Processing data *** */

async function getLatLonCoordinatesFromZip (zipCode, countryCode, locationUrl) {
  const response = await axios.get(locationUrl.toString());
  const lat = response.data.lat;
  const lon = response.data.lon;
  const city = response.data.name;
  console.log("in get function");
  console.log(lat);
  console.log(lon);
  console.log(city);
  return { lat, lon, city };
}

async function getWeatherDataFromLatLon (latLonCoordinates, WEATHER_API_BASE_URL, OPENWEATHER_API_KEY_END) {
  const weatherEndpoint = "?lat=" + latLonCoordinates.lat + "&lon=" + latLonCoordinates.lon + "&units=imperial&exclude=minutely,hourly,daily"+ OPENWEATHER_API_KEY_END;
  const weatherUrl = new URL(weatherEndpoint, WEATHER_API_BASE_URL);
  console.log(WEATHER_API_BASE_URL);
  console.log(weatherUrl.toString());
  const response = await axios.get(weatherUrl.toString())
  response.data.city = latLonCoordinates.city;
  console.log(response.data);
  return response;
}