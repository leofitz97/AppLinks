require('dotenv').config();


module.exports = {
  "development": {
    "username": process.env.DB_USERNAME_DEV,
    "password": null,
    "database": process.env.DB_DATABASE_DEV,
    "host":     process.env.DB_HOST_DEV,
    "dialect": "mysql"
  },
}

