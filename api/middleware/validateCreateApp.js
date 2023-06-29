const { createAppSchema } = require("../../utils");
const { STATUS_CODES } = require("../../utils/errors");


const validateCreateApp=()=>{
    return (req, res, next)=>{
        createAppSchema.validate({body: {
            name: req.body.name,
            icon: req.body.icon,
            url: req.body.url 
        }})
        .then(res=>{
            req.body = res.body;
            next();
        })
        .catch(err=>{ console.log({msg:err.message, name: err.name, type:err.type})
            res.status(STATUS_CODES.BAD_REQUEST).json({message:err.message, error:{name: err.name, type: err.type}})
        })
    }
    
}

module.exports = validateCreateApp;