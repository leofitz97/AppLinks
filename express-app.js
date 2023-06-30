const express = require('express');
const cors = require('cors');
const app = express();
const { appTestApis } = require('./api');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


appTestApis(app);

module.exports = app;