const mongoose = require('mongoose');
const Schema = mongoose.Schema

const usersSchema = new Schema({
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,

    },
    role:{
    type:String,
    default:'basic',
    enum:['customer','vendor','supervisor']
    },
    
    accessToken:{
     type:String,   
    }
});
    

module.exports = 

module.exports = mongoose.model('users', usersSchema);
