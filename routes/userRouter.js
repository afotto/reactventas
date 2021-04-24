const express = require('express');
const router = express.Router();
const controladorUser = require('../controller/userController');


router.get('/login/', controladorUser.showLogin);

router.get('/register/', controladorUser.showRegister);


module.exports = router;