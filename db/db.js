const { Sequelize } = require("sequelize");
const config = require("../config/config.js");
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE || config.development.database,
    process.env.MYSQL_USER || config.development.username,
    process.env.MYSQL_PASSWORD || config.development.password,
    {
      host: process.env.MYSQL_HOST || config.development.host,
      port: process.env.MYSQL_PORT || config.development.port,
      dialect: process.env.MYSQL_DIALECT || config.development.dialect,
      operatorAliases: false,
      pool: {
        max: 5, // maximum number of connection in pool
        min: 0, // minimum number of connection in pool
        acquire: 30000, // maximum time, in milliseconds, that a connection can be idle before being released
        idle: 10000 // maximum time, in milliseconds, that pool will try to get connection before throwing error
      }
    }
);

module.exports = sequelize.authenticate()
  .then((db) => {
    console.log('MYSQL connected')
    return db
  })