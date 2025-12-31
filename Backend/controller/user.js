const User = require('../models/user')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const usersignUp=async(req,res)=>{
    const {email,password}=req.body
    if(!email||!password){
        return res.status(400).json({message:"Email and password is required"})
    }
    let user =await User.findOne({email})
    if(user){
        return res.status(400).json({message:"Email alraedy Exist"})
    }
    const hashpwd = await bcrypt.hash(password,10)
    const newUser = await User.create({
        email,password:hashpwd,
    })
    let token = jwt.sign({email,id:newUser._id},process.env.SECRET_KEY)
    return res.status(200).json({token,newUser})
}
const userLogin=async(req,res)=>{
    const {email,password}=req.body
    if(!email||!password){
        return res.status(400).json({message:"Email and password is required"})
    }
    let newUser =await User.findOne({email})
    if(newUser && await bcrypt.compare(password,newUser.password)){
        let token = jwt.sign({email,id:newUser._id},process.env.SECRET_KEY)
        return res.status(200).json({token,newUser})
    }else{
        return res.status(400).json({message:"Invalid Credantials"})
    }
}
const getUser=async(req,res)=>{
    const newUser = await User.findById(req.params.id)
    res.json({email:newUser.email})
}

module.exports= {usersignUp,userLogin,getUser}