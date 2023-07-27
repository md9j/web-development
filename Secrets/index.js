/*
 * File: index.js
 * Description: A simple Express server with routes for handling root and "/check" paths. The server uses body-parser middleware to parse incoming request bodies and two custom middleware functions - logger and passwordCheck. The passwordCheck middleware checks if the provided password matches a predefined value ("ILoveProgramming") and sets the userAuthorized flag accordingly, which controls access to a secret page.
 * Author: mj
 * Date: 26JUL2023
 */

// Import required modules
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

// Get the current directory name using Node.js's path and url modules
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// Flag to track user authorization status
var userAuthorized = false;

// Middleware to parse incoming request bodies as URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for logging request details
app.use(logger);

// Middleware for checking password and setting userAuthorized flag
app.use(passwordCheck);

// Route for handling the root path
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Route for handling the "/check" path
app.post("/check", (req, res) => {
    if (userAuthorized) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect("/");
    }
    //userAuthorized = false; // Uncomment this line if you want to reset user authorization after each request
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`It's me, port ${port}, I'm the listening port it's me`);
});

// Middleware function for logging request details
function logger(req, res, next) {
    console.log("Request Method: ", req.method);
    console.log("Request URL: ", req.url);
    console.log("Request Body: ", req.body);
    next();
}

// Middleware function for checking the password and setting userAuthorized flag
function passwordCheck(req, res, next) {
    const password = req.body["password"];
    if (password === "ShowMeTheSecrets") {
        userAuthorized = true;
    }
    next();
}
