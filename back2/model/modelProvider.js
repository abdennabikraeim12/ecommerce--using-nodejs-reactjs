const mongoose = require('mongoose'); 
const userModel = require('./modelUser');



// Declare the Schema of the Mongo model
var providerSchema = new mongoose.Schema({
    
    
});
userModel.discriminator('provider',providerSchema);
//Export the model
module.exports = mongoose.model('provider');