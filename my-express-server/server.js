const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`It's me, port ${port}. I'm listening!`);
})

app.get('/', (req, res) => {
    res.send("<h1>Hey, I'm awake!<h1>");
    console.log(req);
})
app.get('/contact', (req, res) => {
    res.send(`You got me here on good ol' port ${port}!  This is where you find me.`);
})
app.get('/bio', (req, res) => {
    res.send("I'm just a little server doing the best that I can");
})

app.get('/mood', (req, res) => {
    res.send("<h1>Ate without table<h1>");
})