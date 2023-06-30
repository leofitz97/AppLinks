
require('dotenv').config();
const {  development } = require('./config');


module.exports = {
    "dev": {
        PORT_DEV: process.env.NODE_PORT_DEV,
        NODE_DEV: process.env.NODE_ENV_DEV,
        APP_SECRET_DEV: process.env.APP_SECRET_DEV
    },
    "config": {
        dev: development
    }
}