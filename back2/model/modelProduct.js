const mongoose=require('mongoose');



const schemaGalery = new mongoose.Schema({
    name :{
        type: String,
        
    },
    description:{
        type: String,
    }
    })

const schemaProduct = new mongoose.Schema({
    name :{
        type: String,
        required:true
    },
    refProduct:{
        type: String,
        required:true
    },
  
   price:{
        type: Number,
        required:true
    },
    qte:{
        type: Number,
        required:true
    },
    priceTwo:{
type:Number,

    },
    galerie:[schemaGalery],// galerie haki t7oteha hya nafseha fil contrproduct(remarque 1)

    description:{
        type: String,
        required:true
    },
    subcategory:[{// ligne 39 in modelproduct
            type: mongoose.Types.ObjectId,
            ref:'Subcategorie'
        }],
        order:
            {
                type:mongoose.Types.ObjectId,
                ref:'order'// nom htha na5thouh men modeleorder.js
            }
        
    
});

module.exports = mongoose.model('product',schemaProduct);