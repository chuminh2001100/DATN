const express = require('express')
const router = express.Router();
const {getDataRef, setDataRef} = require('../controllers/CasterController');
router.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

router.post('/referenceData', setDataRef);
router.get('/getDataRef', getDataRef);

module.exports = router;