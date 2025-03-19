const mongoose=require('mongoose');

const schemaSUBCateg = new mongoose.Schema({
    name :{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    //relation entre les table
    category:
        {
            type:mongoose.Types.ObjectId,
            ref:'categorie'
        },
        produit:[{
            type:mongoose.Types.ObjectId,
            ref:'product'
        }]
    
    
});

module.exports = mongoose.model('Subcategorie',schemaSUBCateg);