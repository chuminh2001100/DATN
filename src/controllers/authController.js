const userData = require('../models/UserData');
const VDT = require('../models/VDT');
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

function CreateUser(req, res){
    res.render('registryUser');
}

const handleRegistryUser = async (req, res) =>{
    try{
        console.log(req.body);
        const dataUser = new userData(req.body);
        await dataUser.save();
        res.redirect('../model');
    }
    catch(error){
        console.log("fail registry user");
        console.error(error);
        res.status(400).json({error: error});
    }
}
module.exports = {authUser, CreateUser, handleRegistryUser};
