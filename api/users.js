const UserServices = require('../services/users');
const auth = require('./middleware/auth');
const validateSignin = require('./middleware/validateSign');


module.exports = (app)=>{

    const services = new UserServices();

    app.post('/signin', validateSignin(), async(req, res)=>{
        try {
            const { email, password } = req.body;
            
            const {token, data} = await services.SignIn({email:email, password:password});
            if (data){
                res.cookie('authcookie',token,{maxAge:1000*60*3,httpOnly:true});
                return res.status(200).json({ message:'Sign in success!', data:data});
            }
        }catch(err){ console.log(err)
            return res.status(404).send({message:'unable to sign in! incorrect email and password!', error:'account not found!'});
        }
    });

    // app.get('/get_users', auth(), async(req, res, next)=>{
    //     try {
    //         const data = await services.viewAllUsers();
    //         res.status(200).json({message: 'success', data:data});
    //     }catch(err){
    //         res.status(500).send('internal server error')
    //     }
    // })

    app.post('/add_user', auth(), async(req, res)=>{
        try {
            const { name, email, password } = req.body;
            const token = await services.SignUp({name:name, email:email, password:password});
            res.status(200).json({message:'account created successfully!', data:token});
        }catch(err){
            res.status(500).send('an error occured creating account!')
        }
    })

    // app.get('/user/:id', async(req, res)=>{
    //     try {
    //         const { id } = req.params;
    //         const data = await services.userDetails(id);
    //         console.log(data)
    //         res.status(200).json({message:'data fouind', data:data})
    //     }catch(err){
    //         res.status(500).json({message:'unable to fetch user data!', message:'internal server error!'})
    //     }
    // })

    
}