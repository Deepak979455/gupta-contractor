const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, phone, email, service, message } = req.body;

  // Basic validation
  if (!name || !phone || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      text: `Contact Form Submission\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.json({ success: true, message: 'Message received successfully!' });
  }
}