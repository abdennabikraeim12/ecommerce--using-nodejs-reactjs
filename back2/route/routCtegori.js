const router = require('express').Router();
const categorieControler = require('../controler/ContCategorie');
const upload = require('../Midelwear/uplooadimage');


router.post('/',upload.single('photo'),categorieControler .createCategorie);
router.get('/all',categorieControler .getAll)
router.put('/update/:id',categorieControler .updatecateg)
router.put('/update/:id',upload.single('photo'),categorieControler.updatecateg) // photo hathi eli n7otouha fil postman mouch eli fil model (picture)

router.delete('/delete/:id',categorieControler .deleteCateg)
router.get('/findId/:id',categorieControler .findByidCat)
router.get('/findName',categorieControler .findNameCateg)

module.exports= router;