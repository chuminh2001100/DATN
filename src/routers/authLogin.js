const express = require('express');
const {loginValidation, registryUserValidation} = require('../validate/auth.validate');
const router = express.Router();
const { validate } = require('express-validation');
const {authUser, CreateUser, handleRegistryUser} = require('../controllers/authController');

router.post('/login', validate(loginValidation), (req, res) => {
    console.log("Check login ok");
    console.log("student aboard");
    console.log("Mang lai gia tri");
    console.log("Nhanh moi day nay");
    console.log("Nhanh moi day nay 2333");
    console.log("Check branch");
    console.log("Phe loi mat");
    res.send('Dữ liệu hợp lệ');
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
