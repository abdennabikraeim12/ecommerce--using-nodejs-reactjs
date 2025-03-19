const Subcategorie = require('../model/modelsubCategori');
const CategoryPUSH = require("../model/modelCategori");



(createSBCategorie = async (req,res)=>{
  try {
    const newSubCategorie =new Subcategorie(req.body)
    await newSubCategorie.save();

    await CategoryPUSH.findByIdAndUpdate(req.body.category, { //category => MODEL subcategory
        $push: { subCategories: newSubCategorie }, //subCategories => MODEL category
      });



    res.status(201).json({
        message:'succes',
        data:newSubCategorie,succes:true
    })
  } catch(error){
    res.status(400).json({
        message:'succes',
        succes:false
    })
    console.log(error)
  }
    
}),
getAll = async (req, res)=>{
    const list= await Subcategorie .find().populate("category")
    res.status(200).json({
        message: 'list de Subcategorie',
        data: list
    })
},
//updateProf : put
updateSUBcateg = async (req,res)=>{
    const newDataSUBcateg = {
        name : req.body.name,
        description : req.body.description
        
    }
    const SBcategData = await Subcategorie.findById(req.params.id).update(newDataSUBcateg);
    res.status(200).json({
        message: 'Subcategorie  update ',
        data: SBcategData
    })
},
deleteSUBCateg = async (req,res)=>{
    myid = req.params.id;

    const dletEtd = await Subcategorie.findById({ _id: myid})

   await CategoryPUSH.findByIdAndUpdate(dletEtd.category,{
    $pull:{ subCategories:dletEtd._id},
   })
   
   await Subcategorie.deleteOne({
    dletEtd 
   })
   res.status(200).json({
    message: 'sbcategorie  deleted:',
})
   
},
findByidSBCat = async (req,res)=>{
    myid2 = req.params.id;

    const findId2 = await Subcategorie.findById({ _id: myid2})
    res.status(200).json({
        message: 'find  by id:',
        data: findId2
    })
},
findNameSUB = async (req,res)=>{
    myName2 = req.query.name;

    const findnom2 = await Subcategorie.find({ name: myName2})
    res.status(200).json({
        message: 'find by name:',
        data: findnom2
    })
}

module.exports = {createSBCategorie,getAll,updateSUBcateg,deleteSUBCateg,findByidSBCat,findNameSUB };



