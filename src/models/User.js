const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    username: {
      type:String,
      required: [true,'Username is required!'],
      minLength:[2,'Username is too short!'],
      match: [/^[A-Za-z0-9]+$/,'User name is alfabetically!'],
      unique: true
    },
    
    password: {
      type: String,
      required: [true,'Password is required'],
      
      validate: {
        validator: function(value) {
          return /^[A-Za-z0-9]+$/.test(value);
      },
      message: 'Invalid password characteres!'
    },
    minLength: [4,'Password is to short!']
  },
  email: {
      type: String,
      required: [true,'Email is required!'],
      minLength:[8,'Email is to short!']
  
  }
  });
  userSchema.virtual('repeatPassword')
  .set(function (value) {
    if(value !== this.password) {
        throw new Error('Password mismatch')
    }
})  
userSchema.pre('save', async function(){
    const hash = await bcrypt.hash(this.password,10)
    this.password = hash
  });

const User = mongoose.model("User", userSchema);

module.exports = User;