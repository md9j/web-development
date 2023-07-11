const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`It's me, port ${port}. I'm listening!`);
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/bmi.html");
})
app.post('/bmi.html', (req, res) => {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var bmiResult = (weight / (height * height)) * 703;

    res.send(`The calculated BMI: ${bmiResult}`);
})
