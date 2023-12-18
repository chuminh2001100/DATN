const mongoose = require('mongoose');
const serverSelectionTimeoutMS = 5000;
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/caster_dev', {
            serverSelectionTimeoutMS
        });
        console.log('Connect successfully!!!');
    }
    catch(err){
        console.log('Connect failure!!!');
    }
}

module.exports = {connect};