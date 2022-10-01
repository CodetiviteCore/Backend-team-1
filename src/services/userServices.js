const userModel = require('../models/user')
const {ToolBox} = require('../utils')
const {createToken, hashPassword,comparePassword} = ToolBox
const bcrypt = require('bcrypt');


async function signInServices(data){
  //validate data (email and password)
  //using the email, check if user exists in the database
  // using the email, compare using  
  // 
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