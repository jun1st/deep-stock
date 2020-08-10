module.exports = (app) => {
  const stocks = require("../controllers/stock.controller");

  var router = require("express").Router();

  router.get("/", stocks.getAll);
  router.get("/:code", stocks.findOne);

  app.use("/api/stocks", router);
};
