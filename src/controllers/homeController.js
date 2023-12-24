const VDT = require('../models/VDT');
const Course = require('../models/Course');
const {multipleMongooseToObject} = require('../utils/mongoose')

const getHome = (req, res) =>{
    res.render('home');
}

const getAcb = (req, res) =>{
    res.render('acb');
}

const getSearch = (req, res) =>{
    console.log(req.body);
    res.render('search');
}

const getCreateMode = (req, res) =>{
    res.render('createModel');
}

const getHandleImage = async (req, res) =>{
    try{
        console.log(req.body);
        const vdt = new VDT(req.body);
        await vdt.save();
        res.render('createModel');
    }
    catch(error){
        console.log("fail get model");
        console.error(error);
        res.status(400).json({error: error});
    }
}

async function getModel(req, res){
    try {
        // Sử dụng await để đợi cho đến khi truy vấn hoàn tất
        const result = await VDT.find({});
        res.render('home',{
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

module.exports = {
    getHome, getAcb, getSearch, getModel, getCreateMode, getHandleImage
}