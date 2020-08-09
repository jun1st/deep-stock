const db = require("../models");

const Stock = db.Stock;

exports.getAll = async (req, res) => {
  // const stocks = await Stock.findAll();
  const [stocks, metadata] = await db.sequelize.query(
    "SELECT s.* from stocks as s INNER JOIN stocks_hs300 as hs ON s.symbol = hs.code"
  );
  if (stocks !== undefined) {
    res.send(stocks);
  } else {
    res.status(500).send({
      message: "Some error occurred while retrieving stocks",
    });
  }
};
