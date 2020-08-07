module.exports = (app) => {
  const stocks = require("../controllers/stock.controller");

  var router = require("express").Router();

  router.get("/", stocks.getAll);

  app.use("/api/stocks", router);
};
