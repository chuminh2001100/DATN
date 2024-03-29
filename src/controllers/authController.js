const user = require('../models/UserData');

async function authUser(req, res){
    try {
        console.log(`result: ${result}`);
    } catch (error) {
        // Xử lý lỗi nếu có
        console.log("fail get model");
        console.error(error);
        res.status(400).json({error: error});
    }
}

module.exports = {authUser};
