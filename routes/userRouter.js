const express = require('express');
const router = express.Router();
const controladorUser = require('../controller/userController');


router.get('/login/', controladorUser.login);
router.post('/login/', controladorUser.loginProcess);

router.get('/register/', controladorUser.register);


module.exports = router;