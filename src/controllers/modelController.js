const VDT = require('../models/VDT');
const {multipleMongooseToObject, mongooseToObject} = require('../utils/mongoose')

function CreateModel(req, res){
    res.render('createModel');
}

async function editModel(req, res){
    try{
        const result = await VDT.findById(req.params.id);
        res.render('./beauty/update', { 
            course: mongooseToObject(result)
        });
    }
    catch (error) {
        // Xử lý lỗi nếu có
        console.log("fail edit model");
        console.error(error);
        res.status(400).json({error: error});
    }
}

async function updateModel(req, res){
    try{
        const result = await VDT.updateOne({ _id:  req.params.id}, req.body);
        res.redirect('/beauty/list');
    }
    catch (error) {
        // Xử lý lỗi nếu có
        console.log("fail update model");
        console.error(error);
        res.status(400).json({error: error});
    }
}

async function getlistModel(req, res){
    try {
        // Sử dụng await để đợi cho đến khi truy vấn hoàn tất
        const result = await VDT.find({});
        res.render('./beauty/list',{
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


module.exports = {CreateModel, getlistModel, updateModel, editModel};
