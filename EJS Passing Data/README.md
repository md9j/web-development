# Express Server with EJS Templates and URL-Encoded Form Data

This is a basic Express server that uses EJS templates to render dynamic HTML content and handles URL-encoded form data using the `body-parser` middleware.

## Requirements

- Node.js and npm should be installed on your system.

## Getting Started

1. Install the required dependencies using npm:

   ```
   npm install
   ```

2. Start the server:

   ```
   npm start
   ```

3. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).

## Features

- The server is set up using Express.js to handle incoming HTTP requests.
- The server uses the EJS templating engine to render dynamic HTML content.
- The `body-parser` middleware is used to parse URL-encoded form data.

## Code Overview

### index.js

- `import express from "express";`: Import the Express framework.
- `import bodyParser from "body-parser";`: Import the `body-parser` middleware.
- `const app = express();`: Create an instance of the Express application.
- `const port = 3000;`: Define the port number on which the server will listen.
- `app.use(bodyParser.urlencoded({ extended: true }));`: Set up middleware to parse URL-encoded form data.
- `app.set("view engine", "ejs");`: Set the view engine to EJS.
- `app.get("/", (req, res) => { ... });`: Handle the root URL ("/") with a GET request. It renders the "index" view (EJS template) with a "hello" message.
- `app.post("/submit", (req, res) => { ... });`: Handle the "/submit" URL with a POST request. It logs the form data to the console, calculates the letter count, and renders the "index" view (EJS template) with the `letterCount` data.

### index.ejs

- The EJS template that renders the HTML content.
- It uses conditional EJS tags (`<% %>`) to conditionally display the total letter count if available.
- The form allows users to enter their first name and last name, which are sent to the server on form submission.

## License

This project is licensed under the [ISC](LICENSE).

---