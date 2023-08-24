import express from "express";
import { URLSearchParams, URL } from "url";
import axios from "axios";
import path from "path";
import { username, password, apiKey, bearerToken } from "./authorizationConfig.js";

const app = express();
const port = 3000;
const API_BASE_URL = "https://secrets-api.appbrewery.com/";

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index.ejs", { content: null, error: null});
});

app.get("/noAuth", async (req, res) => {

  const endpoint = "random";
  const url = new URL(endpoint, API_BASE_URL);

  axios.get(url.toString())

  .then((response) => {
    console.log(response.data);
    const responseData = response.data;
    res.render("index.ejs", { content: responseData, error: null});
  })
  .catch (error => {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", { content: null, error: error.message });
  });
});

app.get("/basicAuth", async (req, res) => {
    
      const endpoint = "all";
      const queryParams = { 
        page: 1,
        limit: 10,
      };
      const url = new URL(endpoint, API_BASE_URL);
      const params = new URLSearchParams(queryParams);
      const authHeader = `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`;

      url.search = params;

      axios.get(url.toString(), {
        headers: {
          Authorization: authHeader,
      }
      })
      .then((response) => {
        console.log(response.data);
        const responseData = response.data;
        res.render("index.ejs", { content: responseData, error: null});
        }) 
      .catch (error => {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", { content: null, error: error.message });
      });
});

app.get("/apiKey", async (req, res) => {
  const endpoint = "filter";
  const queryParams = { 
    score: 5,
    apiKey: apiKey,
  };
  const url = new URL(endpoint, API_BASE_URL);
  const params = new URLSearchParams(queryParams);
  const authHeader = `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`;

  url.search = params;

  axios.get(url.toString(), {
    headers: {
      Authorization: authHeader,
  }
  })
  .then((response) => {
    console.log(response.data);
    const responseData = response.data;
    res.render("index.ejs", { content: responseData, error: null});
    }) 
  .catch (error => {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", { content: null, error: error.message });
  });
});

app.get("/bearerToken", async (req, res) => {
  const id = 48;
  const endpoint = `secrets/${id}`;
  
  const url = new URL(endpoint, API_BASE_URL);
  const authHeader = `Bearer ${bearerToken}`;

  axios.get(url.toString(), {
    headers: {
      Authorization: authHeader,
  }
  })
  .then((response) => {
    console.log(response.data);
    const responseData = response.data;
    res.render("index.ejs", { content: responseData, error: null});
    }) 
  .catch (error => {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", { content: null, error: error.message });
  });
});

app.listen(port, () => {
    console.log(`It's me, port ${port}, I'm the listening port it's me`);
});
