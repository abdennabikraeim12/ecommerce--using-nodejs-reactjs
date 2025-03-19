const router = require('express').Router();




const controlerAuth = require('../controler/contAuth');


router.get('/verify/:verificationCode',controlerAuth.verifyEmail)
router.post('/login',controlerAuth.login)
router.get('/logout',controlerAuth.logout)



module.exports = router;