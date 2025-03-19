const route = require("express").Router()
const cart=require('../controler/contCart')
route.post('/:clientId/add/:productId', cart.addToCart)
route.get('/:client',cart.getCartByClient)
module.exports = route