import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

var weekend = false;

app.listen(port, () => {
    console.log(`It's me, port ${port}, I'm the listening port it's me`);
});

app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs", 
    {greeting: getGreeting(isWeekend)});
});

function isWeekend (req, res, next){
    const dayOfWeek = new Date().getDay();
    if(dayOfWeek === 0 || dayOfWeek === 6){
        weekend = true;
    }
    else{
        weekend = false;
    }
};

function getGreeting() {
    if(weekend){
        return "It's the weekend, go have FUN!";
    }
    else{
        return "It's a weekday, get back to WORK!";
    }
};