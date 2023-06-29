const { authSchema } = require("../../utils");
const { STATUS_CODES } = require("../../utils/errors");


const validateSignin=()=>{
    return (req, res, next)=>{
        authSchema.validate({body: {
            email: req.body.email,
            password: req.body.password 
        }})
        .then(res=>{
            req.body = res.body;
            next();
        })
        .catch(err=>{
            res.status(STATUS_CODES.BAD_REQUEST).json({message:err.message, error:err.name})
        })
    }
}

module.exports = validateSignin;