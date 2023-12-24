const express = require('express')
const router = express.Router();
// router.use('/app', (req, res) => {
//     res.send("anh yeu em nhieu lam 569866");
//     console.log('anh yeu em nhieu lam');
// });
router.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});
module.exports = router;