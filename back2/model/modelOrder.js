const mongoose=require('mongoose');

const schemaOrder = new mongoose.Schema({
   priceTotal :{
        type: Number,
        required:true
    },
    quantityTotal:{
        type: Number,
        required:true
    },
    //relation entre les table
    customer:
        {
            type:mongoose.Types.ObjectId,
            ref:'customer'
        },
        products:[{
          product : {
            type:mongoose.Types.ObjectId,
            ref:'product'
          },
          price: {
            type:String,

          },
          qte:{
            type:String
          }

        }]
    
    
});

module.exports = mongoose.model('order',schemaOrder);