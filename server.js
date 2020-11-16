const express = require("express");

const app = express();
const port = 3600;

app.get("/api/passwords/wifi", (request, response) => {
  response.send("WIFI is ASJKHSDGPFJDS");
});

app.post("/api/passwords", (request, response) => {
  response.send("Under construction");
});

app.listen(port, () => {
  console.log(`PW4U API listening at http://localhost:${port}`);
});
