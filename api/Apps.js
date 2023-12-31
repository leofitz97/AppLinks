const AppServices = require('../services/AppServices');
const auth = require('./middleware/auth');
const { validateCreateApp, validateUpdate } = require('./middleware/appValidations');


module.exports = (app)=>{

    const services = new AppServices();

    app.post('/apps/add', auth(), validateCreateApp(), async(req, res)=>{
        try {
            const { name, icon, url } = req.body;
            const token = await services.createApp({name:name, icon:icon, url:url});
            res.status(200).json({message:'app link has been created successfully!'});
        }catch(err){ 
            res.status(500).json({message:'an error occured creating app link!', error:'internal server error!'})
        }
    })

    app.get('/apps/:id', auth(), async(req, res)=>{
        try {
            const { id } = req.params;
            const data = await services.editApp(id);
            res.status(200).json({message:'success', data:data})
        }catch(err){
            res.status(500).json({message:'unable to fetch app data!', error:'internal server error!'})
        }
    })

    app.patch('/apps/:id', auth(), validateUpdate(), async(req, res)=>{
        try {
            const { id } = req.params;
            const { name } = req.body;
            await services.updateAppInfo({id:id, name:name});
            res.status(200).json({message:'app has been successfully updated!'})
        }catch(err){
            res.status(500).json({message:'unable to update app data!', error:'internal server error!'})
        }
    })

    app.delete('/apps/:id', auth(), async(req, res)=>{
        try {
            const { id } = req.params;
            await services.deleteApp(id);
            res.status(200).json({message:'app has been deleted successfully'})
        }catch(err){
            res.status(500).json({message:'an error occured deleting the app!', error:'internal server error!'})
        }
    })

    app.get('/apps', async(req, res)=>{
        try {
            const data = await services.viewAllApps();
            res.status(200).json({message:'success', data:data})
        }catch(err){ console.log(err)
            res.status(500).json({message:'an error occured fetching apps', error:'internal server error!'})
        }
    })
}

