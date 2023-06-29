const { createAppSchema, updateAppSchema } = require("../../utils");
const { STATUS_CODES } = require("../../utils/errors");


module.exports.validateCreateApp=()=>{
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
        .catch(err=>{
            res.status(STATUS_CODES.BAD_REQUEST).json({message:err.message, error:{name: err.name, type: err.type}})
        })
    }
}



module.exports.validateUpdate=()=>{
    return (req, res, next)=>{
        updateAppSchema.validate({
        body: {name: req.body.name},
        params:{id: req.params.id}
        })
        .then(res=>{
            req.body = res.body;
            req.params = res.params;
            next();
        })
        .catch(err=>{
            res.status(STATUS_CODES.BAD_REQUEST).json({message:err.message, error:{name: err.name, type: err.type}})
        })
    }
    
}

