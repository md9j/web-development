import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import e from "express";

// establish server and database connection
const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "", // nope, get your own password
  port: 5433,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// variables to be referenced in multiple functions
var countryCode = "";
var country = "";
var countriesVisited = "";
var countries = [];

// home route to display visited countries currently entered in database
app.get("/", async (req, res) => {
  countriesVisited = await db.query("SELECT country_code FROM visited_countries");
  countries = countriesVisited.rows.map((country) => country.country_code);
  console.log("- " + "Visited Countries Current: " + countries);
  console.log("- " + "Length: ", countriesVisited.rows.length);
  res.render("index.ejs", { countries: countries, total: countriesVisited.rows.length, error: null,  });
});

// validate user entered input to search for
const validateCountryInput = (req, res, next) => {
  country = req.body.country;
  console.log("- " + country + " entered");
  if (!country) {
    res.status(400).send("Country name required");
  } else {
    next();
  }
};


// get country code from database if requested country exists
async function getCountryCode(req, res) {
    const countryCodeRequest = await db.query("SELECT country_code FROM countries WHERE country_name ILIKE '%' || $1 || '%'", [country]);
    countryCode = countryCodeRequest.rows[0].country_code;
    console.log("- Get " + countryCode + " found");
    return countryCode;
}

// add user entered country to database if it exists
app.post("/add", validateCountryInput, async (req, res) => {
  console.log("- " + "Request to Add: " + country);
  try {
    await getCountryCode(); 

    try{
      await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [countryCode]);
      console.log("- " + "Adding: " + country + ": " + countryCode);
      res.redirect("/");
      // failure to add country code
    } catch (error) {
      console.error("- " + error);
      res.render("index.ejs", { countries: countries, total: countriesVisited.rows.length, error: "Country has previously been added." });
    }
 //failure to find country code   
}catch (error) {
  console.error("- " + error);
  res.render("index.ejs", { countries: countries, total: countriesVisited.rows.length, error: "Country not recognized, check spelling and try again." });
}
});

// remove user entered country to database if in visited table
app.post("/remove", validateCountryInput, async (req, res) => {
  console.log("- " + "Request to remove: " + country);
  try {
    await getCountryCode(); 
    try {
      const countryInVisitedList = await db.query("SELECT country_code FROM visited_countries WHERE country_code = $1", [countryCode]);
      // failure to find country code in visited table
      if(countryInVisitedList.rows.length === 0){
        return error;
      }
      // country code found in visited table
      console.log("- " + "Removing: " + country + ": " + countryCode);
      await db.query("DELETE FROM visited_countries WHERE country_code = $1", [countryCode]);
      res.redirect("/");
      // failure to remove country code
    } catch (error) {
      console.error("- " + error);
      res.render("index.ejs", { countries: countries, total: countriesVisited.rows.length, error: "Country not found in visited list." });
    }
    // failure to find country code
  } catch (error) {
    console.error("- " + error);
    res.render("index.ejs", { countries: countries, total: countriesVisited.rows.length, error: "Country not recognized, check spelling and try again." });
  } 
});

// start server
app.listen(port, () => {
  console.log(`It's me, port ${port}, I'm the listening port it's me`);
});