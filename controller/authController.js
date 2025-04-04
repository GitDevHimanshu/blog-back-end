const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const users = require('../model/signupSchema')
const OTP = require("../model/OTPSchema")
const nodemailer = require('../methods/nodeMailer')
const {OTPGeneration} = require('../methods/OTPGeneration')

module.exports.signupHandler = async(req, res)=>{
    try {
        let exist  = await users.findOne({email: req.body.email})
        if(!exist){
            let data = await users.create(req.body)
            res.status(200).json({message: "user created successfully"})
        } else {
            throw new Error("User already exist!");
        }
    } catch (error) {
        res.status(409).json({message: error.message})
    }    
}

module.exports.loginHandler = async(req, res)=>{
   let generatedOTP = await OTPGeneration(req.body.email)
   const status = await nodemailer.sendMail(req.body.email, generatedOTP);  
   if(status){
    let token = jwt.sign({ userid: uid }, process.env.JWTKey , {expiresIn: '1h'})
    res.cookie("jwt", token, { httpOnly: true, expires: new Date(Date.now() + 3600000) });
    res.status(200).json({message: "otp sent success"})
   }else{
    res.status(500).json({message: "internal server error"})
   }
}