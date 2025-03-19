const categorie = require('../model/modelCategori');

/*
createCategorie =(req,res)=>{
    const newCategorie ={
        name : req.body.name,
        description : req.body.description
    }
    categorie.create(newCategorie,err =>{
        if(err) return err.message
        else
        return res.status(201).json({
            message:'succes',
            data:newCategorie,succes:true
        })
    })
},
*/



//app just for find name

(createCategorie = async (req,res)=>{
    try{
         //debut code dimportation dun seul image
    req.body["picture"]=req.file.filename
    //fin code dimportation dun seul image
    
        const newcat = new categorie(req.body);
        await newcat.save();
        
        res.status(201).json({
            message: 'succes',
            data: newcat,
            success: true

    });
} catch (error){
    res.status(400).json({
        message: 'error',
        success:false + error 
});
console.log(error)
}
}),

getAll = async (req, res)=>{
    const list= await categorie .find({})
    res.status(200).json({
        message: 'list de categorie',
        data: list
    })
},
//updateProf : put
updatecateg = async (req,res)=>{

    //debut code dimportation dun seul image
    req.body["picture"]=req.file.filename
    //fin code dimportation dun seul image

    const newDatacateg = {
        name : req.body.name,
        description : req.body.description

    }
    const categoriData = await categorie.findById(req.params.id).update(newDatacateg);
    res.status(200).json({
        message: 'categori update ',
        data: categoriData
    })
},
deleteCateg = async (req,res)=>{
    myid = req.params.id;

    const dletcateg = await categorie.findByIdAndDelete({ _id: myid})
    res.status(200).json({
        message: 'categorie deleted',
    })
},
findByidCat = async (req,res)=>{
    myid2 = req.params.id;

    const findId2 = await categorie.findById({ _id: myid2})
    res.status(200).json({
        message: 'find  by id:',
        data: findId2
    })
},
findNameCateg = async (req,res)=>{
    myName2 = req.query.name;

    const findnom2 = await categorie.find({ name: myName2})
    res.status(200).json({
        message: 'find by name:',
        data: findnom2
    })
}


module.exports = {createCategorie,getAll,updatecateg,deleteCateg,findByidCat ,findNameCateg };

