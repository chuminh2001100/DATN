const dataPosition = require('../models/dataPosition');


async function getDataRef(req, res){
    try {
        // Sử dụng await để đợi cho đến khi truy vấn hoàn tất
        let result = await dataPosition.find().sort({ createdAt: -1 }).limit(1);
        let result_2 = result[0].data;
        res.send(result_2);
        console.log(`result: ${result}`);
    } catch (error) {
        // Xử lý lỗi nếu có
        console.log("fail get model");
        console.error(error);
        res.status(400).json({error: error});
    }
}

const setDataRef = async (req, res) =>{
    try{
        console.log(req.body);
        let check_1 = req.body;
        const DataPosition = new dataPosition({data: check_1});
        await DataPosition.save();
        res.send('Save in database successful');
    }
    catch(error){
        console.log("fail get model");
        console.error(error);
        res.status(400).json({error: error});
    }
}

module.exports = {getDataRef, setDataRef};
