const OTP = require("../model/OTPSchema")

module.exports.OTPGeneration = (email) => {
    return new Promise(async(resolve, reject)=>{
        let generatedOTP = Math.floor(1000 + Math.random() * 9000);
        let exist =  await OTP.findOne({email: email})
        if(!exist) {
           await OTP.create({
                email: email,
                OTP: generatedOTP,
            })
            resolve(OTP)
        } else {
            resolve(exist.OTP)
        }
        reject(null)
    })
       
}


