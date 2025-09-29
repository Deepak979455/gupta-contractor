const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

const testEmail = {
  from: `"Gupta Contractor TEST" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,
  subject: '🔥 TEST EMAIL - Check if this appears in inbox',
  html: `
    <h1>TEST EMAIL</h1>
    <p>If you see this email, the configuration is working!</p>
    <p>Time: ${new Date()}</p>
  `
};

transporter.sendMail(testEmail)
  .then(() => console.log('✅ Test email sent! Check your Gmail inbox, spam, and all mail folders.'))
  .catch(err => console.error('❌ Error:', err));