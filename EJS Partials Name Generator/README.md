# EJS Code Snippets

This repository contains EJS code snippets that demonstrate the usage of EJS (Embedded JavaScript) templates for rendering dynamic content in web applications. EJS is a popular template engine for Node.js that allows you to generate HTML dynamically by embedding JavaScript code within your HTML templates.

## File Structure

The repository is organized as follows:

- `index.js`: The main JavaScript file where the server and routes are defined.
- `package-lock.json`: This is an automatically generated file that locks the versions of installed npm packages.
- `package.json`: This file contains metadata about the project and its dependencies.
- `public/`: This directory contains static assets like stylesheets and images.
  - `styles/`: This directory contains CSS files.
    - `main.css`: The main stylesheet for the project.
- `views/`: This directory contains EJS view templates.
  - `index.ejs`: The main EJS view template for generating and displaying random names.
  - `partials/`: This directory contains reusable partial templates.
    - `footer.ejs`: Reusable footer partial.
    - `header.ejs`: Reusable header partial.
- `README.md`: This is the main README file that provides information about the project.

The project structure is designed to organize the code and assets effectively. It follows common conventions for web development projects.


## Installation and Usage

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/md9j/ejs-code-snippets.git
   ```

2. Install the required dependencies using npm:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. Open your web browser and visit `http://localhost:3000` to see the generated random name. You can click the "Generate Name" button to generate a new random name.

## Code Explanation

### `index.ejs`

- The `index.ejs` view template displays a dynamic title based on the availability of `randomAdj` and `randomNoun` variables.
- It includes the `header.ejs` partial at the beginning and the `footer.ejs` partial at the end to provide consistent header and footer content across views.
- The view includes a form that, when submitted, triggers the generation of a new random name.

### `partials/header.ejs` and `partials/footer.ejs`

- These partial templates contain common header and footer content that is shared across different views.
- They are included in the `index.ejs` view using the `<%- include("partials/header.ejs") %>` and `<%- include("partials/footer.ejs") %>` directives.

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. The page displays a dynamic title based on whether `randomAdj` and `randomNoun` variables are available.
3. If the variables are available, a random name is displayed. If not, a message to generate a name is shown.
4. Click the "Generate Name" button to generate a new random name.

## Dependencies

- `express`: Used to create a web server and handle routes.
- `body-parser`: Used to parse URL-encoded form data.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---