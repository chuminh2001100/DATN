const express = require('express')
const router = express.Router();
const {getHome, getAcb, getSearch, getModel} = require('../controllers/homeController');

// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

router.get('/', getHome);
router.get('/home', getHome);
router.get('/tin', getAcb);

router.get('/search', getSearch);
router.post('/search', getSearch);
router.get('/model',getModel);
module.exports = router;