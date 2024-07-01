const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: secure_configuration.EMAIL_USERNAME,
      pass: secure_configuration.PASSWORD
    }
});

const mailConfigurations = {
    from: 'chuminh2001100cv@gmail.com',
    to: 'chuminh2001100@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Hi! There, You know I am using the'
        + ' NodeJS Code along with NodeMailer '
        + 'to send this email.'
};  

transporter.sendMail(mailConfigurations, function(error, info){
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});

