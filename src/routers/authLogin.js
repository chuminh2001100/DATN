const express = require('express');
const {loginValidation, registryUserValidation, verifyOTP} = require('../validate/auth.validate');
const router = express.Router();
const {createJWT, authenticateToken} = require('../middleware/jwtaction');
const { validate } = require('express-validation');
const {getModel} = require('../controllers/homeController');
const {redis} = require('../config/db/redis');
const {authUser, CreateUser, handleRegistryUser, VerifyOTPUser} = require('../controllers/authController');

router.post('/login', validate(loginValidation), createJWT, (req, res) => {
    let result = {};
    result.data = 'login success';
    result.token = req.accessToken;
    res.send(result);
});

router.get('/model', authenticateToken, (req, res) => {
    let finalRes = {};
    finalRes.user = req.user;
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
router.post('/handleRegistryUser', validate(registryUserValidation), handleRegistryUser);
router.post('/verifyOTP', validate(verifyOTP), VerifyOTPUser);
module.exports = router;