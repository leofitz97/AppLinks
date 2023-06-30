const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const { appTestApis } = require('./api');
const { validateCreateApp } = require('./api/middleware/appValidations');

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


appTestApis(app);



app.post('/test', validateCreateApp(), async(req, res)=>{
    try {
        const { name, icon, url } = req.body;
        res.status(200).json({message:'app link has been created successfully!'});
    }catch(err){
        res.status(500)
    }
})



module.exports = app;