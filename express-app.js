const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const { appTestApis } = require('./api');

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


appTestApis(app);

module.exports = app;