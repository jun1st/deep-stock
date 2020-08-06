module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "p@ssword",
  DB: "bit_stock",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 1,
    acquire: 30000,
    idle: 10000,
  },
};
