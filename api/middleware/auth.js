const jwt = require('jsonwebtoken');
const { BadRequestError, STATUS_CODES } = require('../../utils/errors');
const { APP_SECRET } = require('../../config');



const auth=()=>{
    return (req, res, next)=>{
        const authCookie = req.headers.cookie;
        if (authCookie){
            // let payload = authCookie.split("=")[1];
            jwt.verify(authCookie, APP_SECRET, (err, data)=>{
                if (err){ 
                    return res.status(STATUS_CODES.UN_AUTHORIZED).json({message:'request not authorized!', error:'not authorized'})
                }else {
                    req.user = data.user;
                    next();
                }
            }) 
        }else { 
            return res.status(STATUS_CODES.BAD_REQUEST).json({message:'unknown authorization, please sign in!', error:'bad request'})
        }
    }
}


module.exports = auth;