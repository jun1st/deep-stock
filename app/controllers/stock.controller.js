const db = require("../models");

const Stock = db.Stock;

exports.getAll = async (req, res) => {
  const stocks = await Stock.findAll();
  if (stocks !== undefined) {
    res.send(stocks);
  } else {
    res.status(500).send({
      message: "Some error occurred while retrieving stocks",
    });
  }
};
