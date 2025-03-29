var {Router} = require('express');
var authController = require('../controller/authController');

var router = Router();

router.post('/signup', authController.signupHandler);
router.post('/login', authController.loginHandler);

module.exports = router;
