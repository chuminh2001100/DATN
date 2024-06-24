const express = require('express');
const {loginValidation, registryUserValidation} = require('../validate/auth.validate');
const router = express.Router();
const User = require("../models/user.model");
const {createJWT, authenticateToken} = require('../middleware/jwtaction');
const { validate } = require('express-validation');
const {getModel} = require('../controllers/homeController');
const {authUser, CreateUser, handleRegistryUser} = require('../controllers/authController');

router.post('/login', validate(loginValidation), createJWT, (req, res) => {
    let result = {};
    result.data = 'login success';
    result.token = req.accessToken;
    res.send(result);
});

router.get('/model', authenticateToken, async (req, res) => {
    let finalRes = {};
    finalRes.user = req.user;
    const user = await User.findById(req.user)
    if (!user) {
        return res.status(404).json({ message: USER_NOT_FOUND_ERR });
    }
    finalRes.infor = 'Access resoure successfully';
    console.log(req.user);
    res.send(finalRes);
});


router.post('/test', (req, res) => {
    let check = req.body;
    console.log("ket qua nhu nao y nhi");
    console.log("t muon conflict");
    console.log(check);
    res.send(check);
});

router.get('/registry',CreateUser);
router.post('/handleRegistryUser', validate(registryUserValidation),handleRegistryUser);
module.exports = router;
