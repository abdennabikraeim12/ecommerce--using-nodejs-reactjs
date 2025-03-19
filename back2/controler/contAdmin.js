const adminModel = require ('../model/modelAdmin');
var  nodemailer = require('nodemailer');
var bcrypt  = require('bcrypt');





const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "fd406b603a1bd8",
      pass: "6509a2f65b1813"
    }
  });

  const {randomBytes} = require("crypto");

  register = async (req, res) => {
    const salt = bcrypt.genSalt(10);
    const password_hash = await bcrypt.hashSync(
      req.body.pasword,
      parseInt(salt)
    );
    const admin = new adminModel({
      ...req.body,
      pasword: password_hash,
      verificationCode:randomBytes(6).toString("hex")
    });
    await admin.save(req.body, (err, item) => {
      if (err) {
        res.status(400).json({
          message: "error",
        });
      } else {
        transport.sendMail({
          from: '"Test Server" <test@example.com>',
          to: "kraeim@gmail.com",
          subject: "validation Test",
          text: "This is an email test customer: ",
          html: ` <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                <a href="${process.env.BASE_URL}/user/verify/${item.verificationCode}">verifier now</a>
            </body>
            </html>`
        });
        res.status(201).json({
          message: "success",
          success:true,
          data:item
        });
      }
    });
  },
  

getAll= async (req, res)=>{
    try{
        const list= await adminModel.find({})
    res.status(200).json({
        message: 'list des admins',
        data: list
    })
    }
    catch(error){
        res.status(400).json({
            message: 'error'
            
        });
        console.log(error)
    }
},

updateAdmin= async (req, res)=>{
    try{
    //req.body["picture"]=req.file.filename

    myid = req.params.id;
    const newData = req.body;
    

    const list= await adminModel.findById(req.params.id).update(newData)

    /* await subcategory.findByIdAndUpdate(req.body.subcategory, {
        $push: {
            product: list.id
        },
    }) */
    res.status(201).json({
        message: 'Admin updated',
        data: newData,success: true
    })
}
catch(error){
    res.status(400).json({
        message: 'error'
        
    });
    console.log(error)
}
},

deleteAdmin = async (req, res)=>{
    try{
    myid = req.params.id;

    const dlet= await adminModel.findByIdAndDelete( {_id : myid })
    /* await subcategory.findByIdAndUpdate(dlet.subcategory,{
        $pull: {
            product: dlet.id
        }, 
    })
    */
    res.status(200).json({
        message: 'Admin deleted',
        
    })
}
catch(error){
    res.status(400).json({
        message: 'error'
        
    });
    console.log(error)
}
},

 findAdminId = async (req,res) => {
    try{
    myid = req.params.id;
    const data= await adminModel.findById({_id : myid })
    res.status(201).json({
        message: 'Admin foundet',
        data: data,success: true
    })
}
catch(error){
    res.status(400).json({
        message: 'error'
        
    });
    console.log(error)
}
}
module.exports = {register,getAll,updateAdmin,deleteAdmin,findAdminId};