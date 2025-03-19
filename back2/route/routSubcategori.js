const router = require('express').Router();
const SUUBcategorieCont = require('../controler/ContSubcategorie');



router.post('/',SUUBcategorieCont.createSBCategorie);
router.get('/all',SUUBcategorieCont .getAll)
router.put('/update/:id',SUUBcategorieCont .updateSUBcateg)
router.delete('/delete/:id',SUUBcategorieCont .deleteSUBCateg)
router.get('/findbyid/:id',SUUBcategorieCont .findByidSBCat)
router.get('/findbyname',SUUBcategorieCont .findNameSUB )

module.exports= router;