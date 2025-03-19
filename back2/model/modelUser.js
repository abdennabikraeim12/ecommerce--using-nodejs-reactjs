const mongoose = require('mongoose');

const baseOption = {// iritage 
    discriminatorkey: "itemtype",
    collection: "users"
    
};

const userSchema = new mongoose.Schema({
    
    
    
    name:{
      type: String,
      required: true
    },
    email:{
        type: String,
        required: true
      },
      pasword:{
        type: String,
        required: true
      },
      phone:{
        type: Number,
        required: true
      },
      verificationCode:{
        type: String,
        required: false
      },
      verified:{
        type: Boolean,
        default: false
      }
   

},baseOption,{timestamps:true})
module.exports = mongoose.model("user",userSchema);