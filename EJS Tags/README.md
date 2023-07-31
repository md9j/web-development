**README: Express Server with EJS Templates**

This code demonstrates how to create a basic Express server using EJS templates for rendering dynamic HTML content. It includes the following features:

1. **Express Server**: The code sets up an Express application that listens on port 3000. It serves as a simple web server to handle incoming requests.

2. **EJS Template Rendering**: When a request is made to the root URL ("/"), the server renders an EJS template named "index.ejs" and passes it some data to display dynamic content.

3. **Dynamic Data**: The EJS template uses variables like `title`, `seconds`, `items`, and `htmlContent` to display dynamic content in the HTML response.

4. **Conditional Rendering**: The template uses EJS tags to conditionally display content based on the current second's value. If the second is even, it displays a list of `items`; otherwise, it shows a "No items to display" message.

5. **HTML Output**: The template also demonstrates using `<%- %>` tags to output raw HTML content from the `htmlContent` variable, allowing you to display HTML markup as is (unescaped).

To run the server:

1. Install the required dependencies with `npm install`.
2. Start the server with `npm start` or `node index.js`.
3. Access the server at `http://localhost:3000`.

---

**README: Express Server with Embedded JavaScript (EJS) Tags**

This code illustrates a simple HTML page using embedded JavaScript (EJS) tags for dynamic content and logic. It includes the following features:

1. **Basic HTML Structure**: The code consists of a standard HTML page with a title, header, and footer sections.

2. **EJS Tags for Dynamic Content**: EJS tags like `<%= %>`, `<%- %>`, and `<% %>` are used to inject dynamic data, display raw HTML, and execute JavaScript logic within the HTML page.

3. **Dynamic Data**: The template uses EJS tags to display dynamic content like `title`, `seconds`, `items`, and `htmlContent`.

4. **Conditional Logic**: The template uses EJS tags to conditionally display content based on the current second's value. If the second is even, it displays a list of `items`; otherwise, it shows a "No items to display" message.

5. **HTML Output**: The template demonstrates using `<%- %>` tags to output raw HTML content from the `htmlContent` variable, allowing you to display HTML markup as is (unescaped).