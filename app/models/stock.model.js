module.exports = (sequelize, Sequelize) => {
  const Stock = sequelize.define(
    "Stock",
    {
      tsCode: {
        field: "ts_code",
        type: Sequelize.STRING,
      },
      symbol: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      area: {
        type: Sequelize.STRING,
      },
      industry: {
        type: Sequelize.STRING,
      },
      market: {
        type: Sequelize.STRING,
      },
      listDate: {
        field: "list_date",
        type: Sequelize.STRING,
      },
    },
    {
      tableName: "stocks",
      createdAt: false,
      updatedAt: false,
    }
  );

  return Stock;
};
