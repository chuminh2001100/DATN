const express = require('express');
const {loginValidation} = require('../validate/auth.validate');
const router = express.Router();
const { validate } = require('express-validation');
const {authUser} = require('../controllers/authController');

router.post('/login', validate(loginValidation), (req, res) => {
    res.send('Dữ liệu hợp lệ');
});
module.exports = router;