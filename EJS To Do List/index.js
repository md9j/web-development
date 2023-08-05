import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var tasks = [];

// Set the view engine to EJS
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse URL-encoded form data using bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`It's me, port ${port}, I'm the listening port it's me`);
});

// Route handlers
app.get("/", (req, res) => {
    res.render("index.ejs", { tasks });
});

// Add task to the list
app.post("/submitTask", (req, res) => {
    const { task, startTime, completeTime } = req.body;
    const newTask = { task, startTime, completeTime };
    tasks.push(newTask);

    // Render "index.ejs" view via '/'' route redirect, prevent duplicate tasks on refesh
    res.redirect("/");
    });

// Clear all tasks from the list
app.post("/clearTasks", (req, res) => {
    tasks = [];
    res.redirect("/");
});