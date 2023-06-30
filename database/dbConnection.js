'use strict';

const Sequelize = require('sequelize');
const process = require('process');
const { config } = require(__dirname + '/../config');
const db = {};

let sequelize;
let config_tst = config['test'];

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config_tst.use_env_variable], config_tst);
} 
else {
  sequelize = new Sequelize({
    database: config_tst['database'],
    username: config_tst['username'],
    password: config_tst['password'],
    host: config_tst['host'],
    dialect: 'mysql',
  });
}


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
