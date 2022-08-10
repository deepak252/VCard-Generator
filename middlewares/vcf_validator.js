const validateVcf=(req,res,next)=>{
    let {firstName,phone,uid} = req.body;
    // uid,
//     firstName,
//     middleName,
//     lastName,
//     organisation, //business name
//     phone,
//     workPhone,
//     email,
//     url
    if (!firstName ||!phone||!uid){
        return res.status(400).json({
            "error":"Body must contain 'firstName', 'phone' & 'uid' (userId). Optional parameters - 'middleName','lastName','organisation','workPhone','email','url'."
        });
    }
    var phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    if (!phone.match(phoneRegex)){
        return res.status(400).json({
            "error": "Invalid phone number!"
        });
    }

    next();
}

module.exports = validateVcf;