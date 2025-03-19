const router = require('express').Router();




const customer = require('../controler/controlerCustomer');
const upload = require('../Midelwear/uplooadimage');


router.post('/',upload.single('picture'),customer.register)
router.get('/all', customer.getAll)
 router.put('/update/:id',upload.single('picture'),customer.updateCustomer)
router.delete('/delete/:id',customer.deleteCustomer)
router.get('/findId/:id',customer.findCustomerId) 

module.exports = router;