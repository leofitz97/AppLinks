const path = require('path');

module.exports = {
  "development": {
    "username": "root", 
    "password": null,
    // "database": "restfulApi_dev",
    "storage": path.join(__dirname, '..', 'appLinks.sql'),
    "host": "localhost",
    "dialect": "mysql",

  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "localhost",
    "dialect": "mysql",
    // storage: path.join(__dirname, '..', 'database_test.sqlite'),
  },
  // "production": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_production",
  //   "host": "localhost",
  //   "dialect": "mysql"
  // }
}

