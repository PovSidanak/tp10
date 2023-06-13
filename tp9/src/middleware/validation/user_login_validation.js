const Joi= require('joi');

const LoginValidation=(data)=>{


const schema= Joi.object({
    EUID: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .require(),
    
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    

    
})
    return schema.validate(Joi.date)

}
module.exports. LoginValidation =  LoginValidation;