const router = require('express').Router();
const orderCont = require('../controler/contOrder');



router.post('/',orderCont.createOrder);
router.get('/all',orderCont .getAll)
router.put('/update/:id',orderCont .updateOrder)
router.delete('/delete/:id',orderCont .deleteOrder)
router.get('/findbyid/:id',orderCont .findByidOrder)
router.get('/findbyname',orderCont .findNameOrder )

module.exports= router;