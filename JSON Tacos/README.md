# Recipe Selector with JSON Data

This is a simple web application built using Node.js and Express that allows users to select a taco recipe and view its details that are stored within a JSON file. Built for the purpose of practicing JSON data manipulation.

## Getting Started

1. Clone the repository to your local machine.
2. Install the required packages using the following command:

```bash
npm install
```

3. Start the server using the following command:

```bash
npm start
```

4. Open your web browser and go to `http://localhost:3000` to use the application.

## Project Structure

- `public/`: The public directory that contains all static files.
    - `styles/`: The directory that contains all stylesheets.
        - `fonts/`: The directory that contains all fonts.
            - `PistolGripPump.ttf`: The "Taco" font.
        - `images/`: The directory that contains all non-emoji based images.
            - `tacoShopWall.jpg`: The background image.
        - `main.css`: The stylesheet for the web application.
- `views/index.ejs`: The EJS template used to render the web page.
- `index.js`: The main server file that handles routing and serves the web application.
- `recipe.json`: JSON file containing the taco recipe data.

## How It Works

1. The user selects a taco protein (Chicken, Beef, or Fish) by clicking on the corresponding button.
2. The selected protein's recipe details are displayed on the page, including its name, price, and ingredients.

## Dependencies

- Express: Fast, unopinionated, minimalist web framework for Node.js.
- Body-Parser: Node.js body parsing middleware to parse incoming request bodies.
- fs: Node.js built-in module to interact with the file system.
- EJS: Embedded JavaScript templates for generating dynamic HTML.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```