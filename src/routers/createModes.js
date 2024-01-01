const express = require('express')
const router = express.Router();
const {CreateModel, getlistModel, updateModel, editModel} = require('../controllers/modelController');

router.get('/add', CreateModel);

router.get('/list', getlistModel);
router.get('/:id/edit', editModel);
router.put('/:id', updateModel);
module.exports = router;