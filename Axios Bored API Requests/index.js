import express, { response } from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    console.log(result);
    res.render("index.ejs", { data: result, error: null });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    redirect("/", { data: null, error: error.message });
  }
});

app.post("/", async (req, res) => {
  console.log(req.body);
  
  try {
    const type = req.body.type;
    const participants = req.body.participants;
    const response = await axios.get(`https://bored-api.appbrewery.com/filter?participants=${participants}&type=${type}`);
    const result = response.data[Math.floor(Math.random() * response.data.length)];
    console.log(result);
    res.render("index.ejs", { data: result, error: null });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", { data: null, error: error.message});
  }
});

app.listen(port, () => {
  console.log(`It's me, port ${port}, I'm the listening port it's me`);
});
