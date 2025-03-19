const mongoose = require('mongoose');
const DB = process.env.MONGODB_URL// code 

mongoose.connect( DB)//folr for new database
.then(()=>{
    console.log('connected');
})
.catch((err)=>{
    console.log(err)
})
