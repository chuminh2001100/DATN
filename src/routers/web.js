const express = require('express')
const router = express.Router();
const {getHome, getAcb} = require('../controllers/homeController');

// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

router.get('/', getHome);

router.get('/tin', getAcb);

module.exports = router;