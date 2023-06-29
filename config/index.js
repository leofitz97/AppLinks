

if (process.env.NODE_ENV!=='production') {
    require('dotenv').config();
}

module.exports = {
    PORT_DEV: process.env.NODE_PORT,
    NODE_ENV: process.env.NODE_ENV,
    USERNAME_DEV: process.env.USERNAME_DEV,
    PASSWORD_DEV: process.env.PASSWORD_DEV,
    DATABASE_DEV: process.env.DATABASE_DEV,
    HOST_DEV: process.env.HOST_DEV,
    DIALECT_DEV: process.env.DIALECT_DEV,
    APP_SECRET: process.env.APP_SECRET
}