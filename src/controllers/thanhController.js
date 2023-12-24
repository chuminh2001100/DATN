const wife = require('../models/Wife');
const {multipleMongooseToObject} = require('../utils/mongoose')

async function getLove(req, res){
    try {
        // Sử dụng await để đợi cho đến khi truy vấn hoàn tất
        const result = await wife.find({});
        res.render('thanhminh',{
            course: multipleMongooseToObject(result)
        });
        // res.json(result);
        console.log(`result: ${result}`);
    } catch (error) {
        // Xử lý lỗi nếu có
        console.log("fail get model");
        console.error(error);
        res.status(400).json({error: error});
    }
}

const getDataImage = async (req, res) =>{
    try{
        console.log(req.body);
        const Wife = new wife(req.body);
        await Wife.save();
        res.redirect('/thanhminh');
    }
    catch(error){
        console.log("fail get model");
        console.error(error);
        res.status(400).json({error: error});
    }
}

module.exports = {getLove, getDataImage};
