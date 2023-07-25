import express from "express";
const app = express();
const port = 3000;

// run server is running with nodemon.
// test 5 different routes with Postman
// check status code 


app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/mj", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/mj", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/mj", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`It's me, port ${port}, I'm the listening port it's me`);
});
