module.exports = (sequelize, Sequelize) => {
  const StockDaily = sequelize.define(
    "StockDaily",
    {
      id: {
        field: "id",
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      tsCode: {
        field: "ts_code",
        type: Sequelize.STRING,
      },
      trade_date: {
        field: "trade_date",
        type: Sequelize.DATE,
      },
      open: {
        field: "open",
        type: Sequelize.DECIMAL,
      },
      high: {
        field: "high",
        type: Sequelize.DECIMAL,
      },
      low: {
        field: "low",
        type: Sequelize.DECIMAL,
      },
      close: {
        field: "close",
        type: Sequelize.DECIMAL,
      },
      pre_close: {
        field: "pre_close",
        type: Sequelize.DECIMAL,
      },
      vol: {
        field: "vol",
        type: Sequelize.DECIMAL,
      },
      amount: {
        field: "amount",
        type: Sequelize.DECIMAL,
      },
    },
    {
      tableName: "stocks_daily",
      createdAt: false,
      updatedAt: false,
    }
  );

  return StockDaily;
};
