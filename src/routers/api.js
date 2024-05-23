const express = require('express')
const router = express.Router();
const {getDataRef, setDataRef} = require('../controllers/CasterController');
const {getMap} = require('../controllers/homeController');
router.get('/user/:id', (req, res) => {
    console.log("Hay lam");
    console.log("ao that day");
    res.send(`User ID: ${req.params.id}`);
});

router.post('/referenceData', setDataRef);
router.get('/referenceData', getMap);
router.get('/getDataRef', getDataRef);

module.exports = router;
