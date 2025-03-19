const mongoose = require('mongoose'); // Erase if already required
const userModel = require('./modelUser');



// Declare the Schema of the Mongo model
var adminSchema = new mongoose.Schema({
    
    
    
});
userModel.discriminator('admin',adminSchema);
//Export the model
module.exports = mongoose.model('admin');