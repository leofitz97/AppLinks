'use strict';

const Sequelize = require('sequelize');
const process = require('process');
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
    dialect: 'mysql',
    
  });
}


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
