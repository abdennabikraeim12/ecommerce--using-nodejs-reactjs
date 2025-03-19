const mongoose=require('mongoose');

const schemaCategorie = new mongoose.Schema({
    name :{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    picture:{
        type:String,
        
        
    },

    //relation entre les sub categorie
    subCategories:[
        {
            type:mongoose.Types.ObjectId,
            ref:'Subcategorie'
        }
    ]
    
});

module.exports = mongoose.model('categorie',schemaCategorie);