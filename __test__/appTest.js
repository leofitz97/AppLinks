const express = require('express');
const api = require('./app_crud_test/appsApiTest');


module.exports = ()=>{
    const app = express();
    const cors = require('cors');

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    const app_ = api(app);

}
module.exports = app_;