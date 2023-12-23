const mongoose = require('mongoose');
const serverSelectionTimeoutMS = 5000;
const mongoURI = process.env.MONGO_DEV;
async function connect(){
    try{
        await mongoose.connect(mongoURI, {
            serverSelectionTimeoutMS
        });
        console.log('Connect successfully!!!');
    }
    catch(err){
        console.log('Connect failure!!!');
    }
}

module.exports = {connect};