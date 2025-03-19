const customerModel = require ('../model/modelcustomer');
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
    //debut de criptage de password

    const salt = bcrypt.genSalt(10);
    const password_hash = await bcrypt.hashSync(
      req.body.pasword,
      parseInt(salt)
    );
 //fin de criptage de password

    const customer = new customerModel({
      ...req.body,
      pasword: password_hash,// password:$2b$10$wM/D/GAaIRE4AmtQUgCdauxG.Mp4pqlqDrjq6TuX0vpeT6cWT72R.

      verificationCode:randomBytes(6).toString("hex")//verificationCode:"3c8fabca709f"
    });
    await customer.save(req.body, (err, item) => {
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
        const list= await customerModel.find({})/* .populate("product") */
    res.status(200).json({
        message: 'list des customer',
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

updateCustomer= async (req, res)=>{
    try{
    req.body["picture"]=req.file.filename

    myid = req.params.id;
    const newData = req.body;
    

    const list= await customerModel.findById(req.params.id).update(newData)

    /* await subcategory.findByIdAndUpdate(req.body.subcategory, {
        $push: {
            product: list.id
        },
    }) */
    
    res.status(201).json({
        message: 'customer updated',
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

deleteCustomer = async (req, res)=>{
    try{
    myid = req.params.id;

    const dlet= await customerModel.findByIdAndDelete( {_id : myid })
    /* await subcategory.findByIdAndUpdate(dlet.subcategory,{
        $pull: {
            product: dlet.id
        }, 
    })
    */
    res.status(200).json({
        message: 'customer deleted',
        
    })
}
catch(error){
    res.status(400).json({
        message: 'error'
        
    });
    console.log(error)
}
},

 findCustomerId = async (req,res) => {
    try{
    myid = req.params.id;
    const data= await customerModel.findById({_id : myid })
    res.status(201).json({
        message: 'Customer foundet',
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
module.exports = {register,getAll,updateCustomer,deleteCustomer,findCustomerId};