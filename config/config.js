const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  }
);

module.exports = sequelize;