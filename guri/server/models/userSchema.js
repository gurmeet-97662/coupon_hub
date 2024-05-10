const mongoose = require("mongoose");
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "BABAJAGANANTH"

const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Not Valid Email")
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 5
    },
    tokens:[
        {
            token:{
                type: String,
                required: true,
            }
        }
    ]
});


// hash password
userSchema.pre("save", async function (next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

// token generate
userSchema.methods.generateAuthtoken = async function(){
    try {
        let newtoken = jwt.sign({_id:this._id},SECRET_KEY,{

        })
      

    }catch(error){
        resizeBy.status(400).json(error);
    }
}

// creating model
const users = new mongoose.model("users", userSchema);
module.exports = users;