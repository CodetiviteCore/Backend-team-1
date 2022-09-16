const userModel = require('../models/user')
const {ToolBox} = require('../utils')
const {createToken, hashPassword} = ToolBox
const bcrypt = require('bcrypt');
async function hashpassword(data){
    return await bcrypt.hash(data, 10)
}

async function validatePassword(plainPassword, hashedPassword){
    return await bcrypt.compare(plainPassword, hashedPassword);
}


exports,signUp = async (req, res, next)=>{
    try{
        const{email, password, role} = req.body
        const hashedPassword = await hashPassword(data);
        const newUser = new user({email, password: hashedPassword, role:role || 'basic'})
        const accessToken = jwt.sign({userId: newUser._id}, process.env.JWT_SECRET,{
            expiresIn:"id"
        });
        newUser.accessToken = accessToken;
        await newUser.save();
        res.json({
            data:newUser,
            accessToken
        })
    }catch(error){
        next(error)
    }
}
async function signUpServices(data) {
    const { password } = data;
    data.password = hashPassword(password)
    
    const res = await userModel.create(data)
    await res.save();
    return res
    }

// const signUpServices = async() => {}
module.exports = {
    signUpServices:signUpServices}