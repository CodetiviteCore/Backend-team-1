const userModel = require('../models/user')
const {ToolBox} = require('../utils')
const {createToken, hashPassword} = ToolBox

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