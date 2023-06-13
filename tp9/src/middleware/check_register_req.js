const {RegisterValidation}=require('./validation/user_login_validation')
function check_register(req,res,next){
    const data=req.body;
    const {error}= RegisterValidation(data);
    if(!isValid){return res.send(400).send(error.detail[0].message);}
    next()

}

module.exports.check_register=check_register;