const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: [
    "http://localhost:8081",
    "http://192.168.3.30:8081",
    "http://api.666666.style",
    "https://api.666666.style",
  ],
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/stock.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
