const express = require('express');
const router = express.Router();
const controladorHome = require('../controller/homeController');

router.get('/', controladorHome.show);

/*app.post('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});*/

module.exports = router;