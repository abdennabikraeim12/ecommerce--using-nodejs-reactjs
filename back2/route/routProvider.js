const router = require('express').Router();




const provider = require('../controler/contProvider');
//const upload = require('../middelwares/uploadImage');


router.post('/create',provider.register)
router.get('/getall', provider.getAll)
router.put('/update/:id',provider.updateProvider)
router.delete('/delete/:id',provider.deleteProvider)
router.get('/findbyid/:id',provider.findProviderId)

module.exports = router;