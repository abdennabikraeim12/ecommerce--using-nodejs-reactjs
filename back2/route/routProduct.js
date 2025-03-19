const router = require('express').Router();
const productControler = require('../controler/ContProduct');
const upload = require('../Midelwear/uplooadimage');



//router.post('/create',uploadFile.array('photos'),productControler .createproduct);

router.post('/',upload.array('photo'),productControler.createproduct)
router.get('/all',productControler .getAll)
router.put('/update/:id',productControler .updateProduct)
router.delete('/delete/:id',productControler .deleteProduct)
router.get('/findbyid/:id',productControler .findByidproduct)
router.get('/findbyname',productControler .findNameProduct)

module.exports= router;