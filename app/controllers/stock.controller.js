const db = require("../models");

const Stock = db.Stock;

exports.getAll = async (req, res) => {
  let type = req.query.type;
  let stocks = [];
  console.log(type);
  if (type === "hs300") {
    const [data, meta] = await db.sequelize.query(
      "SELECT s.ts_code, s.symbol, sd.open, sd.high, sd.low, sd.close, sd.pct_chg, sd.amount, s.name, s.area, s.industry FROM stocks_daily as sd INNER JOIN stocks as s on sd.ts_code = s.ts_code INNER JOIN stocks_hs300 as hs ON s.symbol = hs.code WHERE sd.trade_date='2020-08-07'"
    );

    stocks = data;
  } else if (type === "zz500") {
    const [data, meta] = await db.sequelize.query(
      "SELECT s.ts_code, s.symbol, sd.open, sd.high, sd.low, sd.close, sd.pct_chg, sd.amount, s.name, s.area, s.industry FROM stocks_daily as sd INNER JOIN stocks as s on sd.ts_code = s.ts_code INNER JOIN stocks_zz500 as hs ON s.symbol = hs.code WHERE sd.trade_date='2020-08-07'"
    );

    stocks = data;
  }

  if (stocks !== undefined) {
    res.send(stocks);
  } else {
    res.status(500).send({
      message: "Some error occurred while retrieving stocks",
    });
  }
};

exports.findOne = async (req, res) => {
  let path = req.path;
  console.log(path);
};
