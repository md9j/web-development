# PROcrasta-List

## Simple To Do List App

* This is a simple to do list app that allows users to add and delete items from a list. It is built using Node.js, Express, and EJS. It is an example of how to use EJS to generate dynamic HTML pages on the server.

* Lists are not persistant as there is no database. The list is stored in an array in the server's memory. This means that the list will be reset every time the server is restarted.

## File Structure

The repository is organized as follows:

- `index.js`: The main JavaScript file where the server and routes are defined.
- `public/`: This directory contains static assets like stylesheets and images.
    - `images/`: This directory contains image files.
        - 'jbex05Orange.png'
    - `styles/`: This directory contains CSS files.
        - `main.css`: The main stylesheet for the project.
- `views/`: This directory contains EJS view templates.
  - `index.ejs`: The main EJS view template for generating and displaying random names.
  - `partials/`: This directory contains reusable partial templates.
    - `footer.ejs`: Reusable footer partial.
    - `header.ejs`: Reusable header partial.
- `package-lock.json`: This is an automatically generated file that locks the versions of installed npm packages.
- `package.json`: This file contains metadata about the project and its dependencies.
- `README.md`: This is the main README file that provides information about the project.



The project structure is designed to organize the code and assets effectively. It follows common conventions for web development projects.
