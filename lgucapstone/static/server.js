const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.json());

let otpStore = {};  // Temporary storage for OTPs

// Set up your email transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'stevendelosreyes123@gmail.com',
    pass: 'C@rldelos2001'
  }
});

// Route to send OTP
app.post('/send-otp', (req, res) => {
  const { email, first_name, last_name, password } = req.body;
  const otp = crypto.randomInt(100000, 999999).toString();  // Generate 6-digit OTP
  otpStore[email] = otp;  // Store OTP temporarily

  const mailOptions = {
    from: 'your_email@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ success: false, message: 'Failed to send OTP' });
    }
    res.json({ success: true });
  });
});

// Route to verify OTP
app.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;
  if (otpStore[email] === otp) {
    delete otpStore[email];  // Clear OTP after verification
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Invalid OTP' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
