require('dotenv').config();

module.exports = {
  "test": {
    "username": process.env.DB_USERNAME_TST,
    "password": null,
    "database": process.env.DB_DATABASE_TST,
    "host":     process.env.DB_HOST_TST,
    "dialect": "mysql"
  },
}

