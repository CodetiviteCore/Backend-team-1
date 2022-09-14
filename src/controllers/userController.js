const services = require('../services')
const {userServices} = services

    async function signUp(req,res,next){
    try {
        const data = req.body
        const signUpUser = await userServices.signUpServices(data)
        res.status(201).json({
            status:'success',
            data: signUpUser,
        })
    } catch (error) {
        next(error)
    }  
    }
    module.exports = {
        signUp
    }