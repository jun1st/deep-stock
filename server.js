const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./app/models");

const Stock = db.Stock;

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const stocks = await Stock.findAll();
  res.json(stocks);
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
