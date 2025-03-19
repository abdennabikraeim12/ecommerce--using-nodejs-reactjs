const order = require('../model/modelOrder');


createOrder =(req,res)=>{
    
    order.create(req.body,err =>{
        if(err) return err.message
        else
        return res.status(201).json({
            message:'succes',
            data:newOrder,succes:true
        })
    })
},





getAll = async (req, res)=>{
    const list= await order .find({})
    res.status(200).json({
        message: 'list de order',
        data: list
    })
},
//updateorder : put
updateOrder = async (req,res)=>{

 
    const orderData = await order.findById(req.params.id).update(req.body);
    res.status(200).json({
        message: 'order update ',
        data: orderData
    })
},
deleteOrder = async (req,res)=>{
    myid = req.params.id;

    const deleteOrder = await order.findByIdAndDelete({ _id: myid})
    res.status(200).json({
        message: 'order deleted',
    })
},
findByidOrder = async (req,res)=>{
    myid2 = req.params.id;

    const findId2 = await order.findById({ _id: myid2})
    res.status(200).json({
        message: 'find  by id:',
        data: findId2
    })
},
findNameOrder = async (req,res)=>{
    myName2 = req.query.name;

    const findnom2 = await order.find({ name: myName2})
    res.status(200).json({
        message: 'find by name:',
        data: findnom2
    })
}


module.exports = {createOrder,getAll,updateOrder,deleteOrder,findByidOrder,findNameOrder };