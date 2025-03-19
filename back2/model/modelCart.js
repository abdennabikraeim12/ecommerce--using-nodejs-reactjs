const mongoose=require('mongoose');

const schemaCart = new mongoose.Schema({
   

    //relation entre les sub categorie
    products:[
        {
            type:mongoose.Types.ObjectId,
            ref:'product'// nom htha na5thouh men modeleproduct.js
        }
    ],
    client:
        {
            type:mongoose.Types.ObjectId,
            ref:'customer'// nom htha na5thouh men modelecustomer.js
        }
    
    
});

module.exports = mongoose.model('cart',schemaCart);