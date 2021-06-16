const path = require("path");
const http = require("http");
const express = require("express");
const fsPromises = require("fs").promises;

async function readJSON(path) {
  const data = await fsPromises
    .readFile(path, 'utf-8')
    .catch(err => console.error("Failed to read file", err));
  return JSON.parse(data.toString());
}

async function writeJSON(path, data) {
  data = JSON.stringify(data);
  await fsPromises
    .writeFile(path, data, 'utf-8')
    .catch(err => console.error("Failed to write file", err));
  return data;
}

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/famousNames", (req, res) => {
    readJSON('data/famousNames.json')
    .then(data => res.send(data))
    .catch(err => res.send('Soubor nebylo možné načíst', err));       
});

app.get("/api/geography", (req, res) => {
  readJSON('data/geography.json')
  .then(data => res.send(data))
  .catch(err => res.send('Soubor nebylo možné načíst', err));       
});

app.get("/api/cities", (req, res) => {
  readJSON('data/cities.json')
  .then(data => res.send(data))
  .catch(err => res.send('Soubor nebylo možné načíst', err));       
});


const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));