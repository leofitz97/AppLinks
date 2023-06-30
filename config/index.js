
require('dotenv').config();
const {  test } = require('./config');


module.exports = {
    "test": {
        PORT_TST: process.env.NODE_PORT_TST,
        NODE_TST: process.env.NODE_ENV_TST,
        APP_SECRET_TST: process.env.APP_SECRET_TST
    },
    "config": {
        test: test
    }
}