const nodemailer = require('nodemailer');
const crypto = require('crypto');
const User = require('../models/userModel')


async function sendResetEmail(email, randomString) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });
    
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Password Reset Link',
    text: `Click on the following link to reset your password: https://password-reset-emnq.onrender.com/reset-password/${randomString}`
  };

  await transporter.sendMail(mailOptions);
}

async function requestresetpassword(req,res){
    const { email } = req.body;

    var user = await User.findOne({ email });
  
    if (!user) {
      return res.status(404).send('User not found');
    }
  
    var randomString = crypto.randomBytes(20).toString('hex');
  
    // Store the random string in DB for later verification
    user.randomString = randomString;
    await user.save();
  
    // Send email with the random string
    await sendResetEmail(email, randomString);
  
    res.status(200).send('Password reset link has been sent to your email');
}

async function resetPassword(req,res){
    
    var { randomString } = req.params;

    var user = await User.findOne({ randomString });
  
    if (!user) {
      return res.status(400).send('Invalid or expired link');
    }

    var { randomString } = req.params;
    var  { newPassword } = req.body;
  
    var user = await User.findOne({ randomString });
  
    if (!user) {
      return res.status(400).send('Invalid or expired link');
    }
  
    // Update the password and clear the random string
    user.password = newPassword;
    user.randomString = undefined; // Clear the random string
    await user.save();
  
    res.status(200).send('Password has been successfully reset');
}

module.exports={
    requestresetpassword,
    resetPassword
}