const dataPosition = require('../models/dataPosition');


async function getDataRef(req, res){
    try {
        // Sử dụng await để đợi cho đến khi truy vấn hoàn tất
        let result = await dataPosition.find().sort({ createdAt: -1 }).limit(1);
        // let result_2 = result[0].data;
        // res.send(result_2);
        // res.send(result[1].data);
        const concatenatedBuffer = Buffer.concat(result.map(doc => doc.data));
        res.type('application/octet-stream');
        res.send(concatenatedBuffer);
        console.log("Get data rtcm from database server successful");
        console.log(`result: ${result}`);
    } catch (error) {
        // Xử lý lỗi nếu có
        console.log("fetch data from database fail of http get data rtcm");
        console.error(error);
        res.status(400).json({error: error});
    }
}

const setDataRef = async (req, res) =>{
    try{
        console.log(req.body);
        let check_1 = req.body;
        let buf = Buffer.from(check_1);
        const DataPosition = new dataPosition({data: buf});
        await DataPosition.save();
        console.log("Save data rtcm in database successful");
        res.send('Save in database successful');
    }
    catch(error){
        console.log("fail get model");
        console.error(error);
        res.status(400).json({error: error});
    }
}

module.exports = {getDataRef, setDataRef};
