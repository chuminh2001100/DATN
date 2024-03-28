const express = require('express')
const router = express.Router();
const {getHome, getAcb, getSearch, getModel, getCreateMode, getHandleImage, getMap} = require('../controllers/homeController');
const {getLove, getDataImage} = require('../controllers/thanhController');
// define the about route
router.get('/about', (req, res) => {
  console.log(req.cookies);
  res.send('About birds')
})

router.get('/cookie/:id', (req, res) => {
  let data = `ChuVanMinh${req.params.id}`;
  res.cookie('user-name',data);
  res.send('Hello thanh minh');
})

router.get('/', getMap);
router.get('/home', getHome);
router.get('/tin', getAcb);
router.get('/search', getSearch);
router.post('/search', getSearch);
router.get('/model',getModel);
router.get('/createMode', getCreateMode);
router.get('/thanhminh', getLove);
router.post('/handleImage', getHandleImage);

module.exports = router;