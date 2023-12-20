const mongoose = require('mongoose');
const serverSelectionTimeoutMS = 5000;
async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/minh_cv', {
            serverSelectionTimeoutMS
        });
        console.log('Connect successfully!!!');
    }
    catch(err){
        console.log('Connect failure!!!');
    }
}

module.exports = {connect};