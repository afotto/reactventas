const express = require('express');
const router = express.Router();
const controladorUser = require('../controller/userController');
const userValidation = require ('../middlewares/userValidate');
const uploadFile = require('../middlewares/multerMiddleware');


router.get('/login/', controladorUser.login);
router.post('/login/', controladorUser.loginProcess);

router.get('/register/', controladorUser.register);

// Procesar el registro
router.post('/register/', uploadFile.single('avatar'), userValidation, controladorUser.processRegister);


module.exports = router;