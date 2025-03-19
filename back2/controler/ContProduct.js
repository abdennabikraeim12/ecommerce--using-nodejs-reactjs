const product = require('../model/modelProduct');

const subcategoryPUSH = require('../model/modelsubCategori');

//app just for find name

(createproduct= async (req, res) => {
  try {
    // debut code for plusier image
    req.body["galerie"] = 
      req.files?.length <= 0
        ? []
        : req.files.map(function (file) {
            return { name: file.filename, description: "description image " };
          });
    // fin code for plusier image

    const prod = new product(req.body);
    await prod.save();

    await subcategoryPUSH.findByIdAndUpdate(req.body.subcategory, { // voir ligne 39 in modelproduct
      $push: { produit: prod }, //prod voir ligne 15 in contproduit et produit voir modelsubcategorie ligne 18
    });

    res.status(201).json({
      message: "success",
      data: prod,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "error",
      success: false,
    });
    console.log(error);
  }
}),
/*
getAll = async (req, res)=>{
    const list= await product .find({})
    res.status(200).json({
        message: 'list de product',
        data: list
    })
},
*/
(getAll = async (req, res) => {
    try {
      const list = await product.find({}).populate(["subcategory","order"]);// ("subcategory" "order") voir ligne 43 et 74 in modelproduct
      res.status(200).json({
        message: "list des Product",
        data: list,
      });
    } catch (error) {
      res.status(400).json({
        message: "error",
      });
      console.log(error);
    }
  }),
//updateProf : put
/*
updateProduct = async (req,res)=>{
    const newProduct= {
        name : req.body.name,
        description : req.body.description

    }
    const ProductData = await product.findById(req.params.id).update(newProduct);
    res.status(200).json({
        message: 'product update ',
        data: ProductData
    })
},

*/
(updateProduct = async (req, res) => {
  try {
    myid = req.params.id;
    const newData = req.body;

    const list = await product.findById(req.params.id).update(newData);
    res.status(201).json({
      message: "Product updated",
      data: newData,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "error",
    });
    console.log(error);
  }
}),

/*
deleteProduct = async (req,res)=>{
    myid = req.params.id;

    const dletcateg = await product.findByIdAndDelete({ _id: myid})
    res.status(200).json({
        message: 'product deleted',
    })
},
*/
(deleteProduct = async (req, res) => {
  try {
    myid = req.params.id;

    const dlet = await product.findByIdAndDelete({ _id: myid });

    await subcategory.findByIdAndUpdate(dlet.subcategory,{
      //subcategory : ligne 39 in modelproduct
      $pull: {
        produit: dlet.id// produit voir ligne 18 in modele subcategorie
      },
  })

    res.status(200).json({
      message: "Product deleted",
    });
  } catch (error) {
    res.status(400).json({
      message: "error",
    });
    console.log(error);
  }
}),
/*
findByidproduct = async (req,res)=>{
    myid2 = req.params.id;

    const findId2 = await product.findById({ _id: myid2})
    res.status(200).json({
        message: 'find  by id:',
        data: findId2
    })
},
*/
(findByidproduct = async (req, res) => {
  try {
    myid = req.params.id;
    const data = await product.findById({ _id: myid }).populate({path:"subcategory",populate:{path:"produit"}});
    res.status(201).json({
      message: "Product foundet",
      data: data,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "error",
    });
    console.log(error);
  }
}),
/*
findNameProduct = async (req,res)=>{
    myName2 = req.query.name;

    const findnom2 = await product.find({ name: myName2})
    res.status(200).json({
        message: 'find by name:',
        data: findnom2
    })
}
*/
(findNameProduct = async (req, res) => {
  try {
    myname = req.query.name;
    const data = await product.find({ name: myname });
    res.status(201).json({
      message: "Product foundet",
      data: data,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "error",
    });
    console.log(error);
  }
});




module.exports = {createproduct,getAll,updateProduct,deleteProduct,findByidproduct,findNameProduct };