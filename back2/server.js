const express = require('express');
require('dotenv').config()// code dinportation
const connect = require('./conect/db');
const routeCategori = require('./route/routCtegori');
const routeSubCateg = require('./route/routSubcategori');
const routeProduct = require('./route/routProduct');
const routecustomer = require('./route/routCustomer' )
const routeprovider = require('./route/routProvider' )
const routeAdmin = require('./route/routAdmin' )
const routeAuth = require('./route/routAuth' )
const routCart = require('./route/routCart')
const routOrder = require('./route/routOrder')

const cors = require ('cors')

const app = express()
app.use(cors())

const port = process.env.port//code dinportation
app.use(express.json());
app.use('/categorie',routeCategori)
app.use('/Subcategorie',routeSubCateg)
app.use('/product',routeProduct)
app.use('/customer',routecustomer)
app.use('/provider',routeprovider)
app.use('/Admin',routeAdmin)
app.use('/user',routeAuth)
app.use('/cart',routCart)
app.use('/order',routOrder)

app.get('/getImage/:img', function(req,res){
    res.sendFile(__dirname + '/storages/' + req.params.img)
})
app.listen(port,function(){
    console.log(`App working on   http://localhost:${port}`)})