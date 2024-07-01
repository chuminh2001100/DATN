const userData = require('../models/UserData');
const VDT = require('../models/VDT');
const {redis} = require('../config/db/redis');
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
        let email = req.body.email;
        const existingUser = await userData.findOne({email});
        if (existingUser) {
            if (existingUser.statusUser === 'active') {
                return res.status(400).json({ message: 'Email already in use' });
            }
        }
        const dataUser = new userData({ 
            ...req.body,
            statusUser: 'pending'});
        await dataUser.save();
        OTP = await saveOTP();
        if (!OTP) {
            console.log(`Failed to create OTP`);
            res.status(500).json({ message: 'Server for User register fail'});
        }
        res.status(201).json({ message: 'User registered, please verify OTP' });
        // res.redirect('../model');
    }
    catch(error){
        console.log("fail registry user");
        console.error(error);
        res.status(400).json({error: error});
    }
}

const VerifyOTPUser = async (req, res) =>{
    try{
        console.log(req.body);
        let email = req.body.email;
        otp = await getOTP(email);
        if (!otp) {
            console.log(`Failed to retrieve OTP for ${email}`);
            res.status(400).json({ message: 'User register fail' });
        }
        optReq = req.body.otp;
        if(optReq ==  otp){
            const existingUser = await userData.findOne({email});
            if (existingUser) {
                existingUser.statusUser = 'active';
                await existingUser.save();
                console.log(`User ${email} status updated to active`);
            }
            else{
                res.status(400).json({ message: 'User not found' });
            }
        }
        res.status(201).json({ message: 'User registered, verified OTP successfully' });
        // res.redirect('../model');
    }
    catch(error){
        console.log("fail to verify user");
        console.error(error);
        res.status(400).json({error: error});
    }
}

async function saveOTP(email, expiration = 300) {
    const otp = generateOTP();
    try {
      await redis.set(`otp:${email}`, otp, 'EX', expiration);
      console.log(`OTP for ${email}: ${otp}`);
      return otp;
    } catch (error) {
      console.error('Error saving OTP:', error);
      throw error;
    }
  }
  

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

async function getOTP(email) {
    try {
        const otp = await redis.get(`otp:${email}`);
        if (otp) {
        console.log(`OTP for ${email}: ${otp}`);
        return otp;
        } else {
        console.log(`No OTP found for ${email}`);
        return null;
        }
    } catch (error) {
        console.error('Error retrieving OTP:', error);
        throw error;
    }
}


module.exports = {authUser, CreateUser, handleRegistryUser, VerifyOTPUser};