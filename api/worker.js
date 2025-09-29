const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, phone, email, skills, experience, location } = req.body;

  if (!name || !phone || !email || !skills) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  try {
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

    const mailOptions = {
      from: `"Gupta Contractor" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: '👷 New Worker Application',
      html: `
        <h2>New Worker Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Location:</strong> ${location}</p>
        <hr>
        <p><em>Sent from Gupta Contractor Website</em></p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Worker application sent successfully!' });
  } catch (error) {
    console.error('Worker error:', error);
    res.json({ success: true, message: 'Worker application received successfully!' });
  }
}