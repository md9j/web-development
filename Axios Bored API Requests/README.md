# Bored Outta My Gourd

A simple web application that suggests activities to do when you're bored. This application fetches activity suggestions from the Bored API and displays them on the webpage. Users can also filter activities based on their type and the number of participants.

## Getting Started

1. Clone this repository to your local machine.
2. Install the required dependencies using the following command:
npm install

sql
Copy code
3. Start the server by running:
npm start

The application will be accessible at `http://localhost:3000`.

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Fill out the form to select the type of activity and the number of participants.
3. Click the "Go" button to get a random activity suggestion that matches your criteria.

## Dependencies

- Express.js
- Body-parser
- Axios

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Features Highlight, Topics Covered, and Skills Demonstrated

- **API Integration:** Utilized the Axios library to make HTTP requests to the Bored API, fetching random activity suggestions and filtered activities.

- **Express.js Server:** Set up an Express.js server to handle both GET and POST requests, showcasing proficiency in back-end development.

- **Form Handling:** Implemented form handling to allow users to submit their preferences for activity type and number of participants.

- **Dynamic Rendering:** Dynamically rendered HTML content based on the data received from the API and user input, showcasing front-end manipulation skills.

- **Conditional Rendering:** Utilized conditional rendering in the EJS template to display either activity suggestions or error messages based on API responses.

- **Styling and CSS:** Applied custom styles to create an appealing and user-friendly interface, demonstrating front-end design skills.

- **Error Handling:** Gracefully handled errors on both client and server sides for a smoother user experience.

- **Project Structure:** Organized the project into separate files for different components (routes, views), highlighting good project organization practices.

- **Version Control:** Utilized Git and GitHub for version control, maintaining a clean commit history and enabling collaboration.

- **Documentation:** Provided in-code comments for clarity and added a detailed `README.md` to communicate project details effectively.

- **Responsive Design:** Designed the application to be responsive, ensuring a seamless experience across various devices and screen sizes.

- **Code Comments:** Added comments throughout the codebase to explain complex logic and functions, facilitating understanding for other developers.