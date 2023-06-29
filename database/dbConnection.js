'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/index.js');
const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize({
    database: config.DATABASE_DEV,
    username: config.USERNAME_DEV,
    password: null,
    host: config.HOST_DEV,
    dialect: config.DIALECT_DEV
  });
}


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
