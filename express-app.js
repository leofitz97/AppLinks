const express = require('express');
const cors = require('cors');
const app = express();
const { userApis, appApis } = require('./api');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


userApis(app);
appApis(app);





module.exports = app;