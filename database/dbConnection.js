'use strict';

const Sequelize = require('sequelize');
const process = require('process');
const { config } = require(__dirname + '/../config');
const db = {};

let sequelize;
let config_dev = config['dev'];

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config_dev.use_env_variable], config_dev);
} 
else {
  sequelize = new Sequelize({
    database: config_dev['database'],
    username: config_dev['username'],
    password: config_dev['password'],
    host: config_dev['host'],
    dialect: 'mysql',
  });
}


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
