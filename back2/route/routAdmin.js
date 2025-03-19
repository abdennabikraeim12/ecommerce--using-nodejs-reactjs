const router = require('express').Router();




const admin = require('../controler/contAdmin');
//const upload = require('../middelwares/uploadImage');


router.post('/create',admin.register)
router.get('/getall', admin.getAll)
router.put('/update/:id',admin.updateAdmin)
router.delete('/delete/:id',admin.deleteAdmin)
router.get('/findbyid/:id',admin.findAdminId) 

module.exports = router;