const mongoose = require('mongoose'); // Erase if already required
const userModel = require('./modelUser');



// Declare the Schema of the Mongo model
var customerSchema = new mongoose.Schema({
    
    picture:{
        type:String,
        required:false,
        
    },
    address:{
        type:String,
        required:true,
    },
    
});
userModel.discriminator('customer',customerSchema);
//Export the model
module.exports = mongoose.model('customer');