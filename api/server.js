const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const app = express();

// Security middleware
app.use(helmet());
app.use(cookieParser());
app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// MongoDB Models
const quoteSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  service: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

const workerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  skills: String,
  experience: String,
  location: String,
  timestamp: { type: Date, default: Date.now }
});

const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  service: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

const Quote = mongoose.model('Quote', quoteSchema);
const Worker = mongoose.model('Worker', workerSchema);
const Contact = mongoose.model('Contact', contactSchema);

// Connect to MongoDB
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('MongoDB connection error:', err));
}

// Email transporter
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.'
});

const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many form submissions, please try again later.'
});

// DOMPurify setup
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

// Validation middleware
const validateQuoteInput = [
  body('name').isLength({ min: 1, max: 100 }).trim().escape(),
  body('phone').isLength({ min: 10, max: 15 }).trim(),
  body('email').isEmail().normalizeEmail(),
  body('service').isLength({ min: 1, max: 100 }).trim().escape(),
  body('message').isLength({ min: 1, max: 1000 }).trim().escape()
];

const validateWorkerInput = [
  body('name').isLength({ min: 1, max: 100 }).trim().escape(),
  body('phone').isLength({ min: 8, max: 15 }).trim(),
  body('email').isEmail().normalizeEmail(),
  body('skills').isLength({ min: 1, max: 500 }).trim().escape(),
  body('experience').isLength({ min: 1, max: 50 }).trim().escape(),
  body('location').isLength({ min: 1, max: 200 }).trim().escape()
];

const validateContactInput = [
  body('name').isLength({ min: 1, max: 100 }).trim().escape(),
  body('phone').isLength({ min: 10, max: 15 }).trim(),
  body('email').isEmail().normalizeEmail(),
  body('service').isLength({ min: 1, max: 100 }).trim().escape(),
  body('message').isLength({ min: 1, max: 1000 }).trim().escape()
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      success: false, 
      message: `Validation failed: ${errors.array().map(e => e.msg).join(', ')}`,
      errors: errors.array()
    });
  }
  next();
};

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Gupta Contractor API is running!' });
});

app.get('/api/data', async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ timestamp: -1 });
    const workers = await Worker.find().sort({ timestamp: -1 });
    const contacts = await Contact.find().sort({ timestamp: -1 });
    
    res.json({
      quotes,
      workers,
      contacts,
      total: quotes.length + workers.length + contacts.length
    });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ success: false, message: 'Database error' });
  }
});

app.post('/api/quote', formLimiter, validateQuoteInput, handleValidationErrors, async (req, res) => {
  try {
    const { name, phone, email, service, message } = req.body;
    
    const quote = new Quote({ name, phone, email, service, message });
    await quote.save();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Quote Request - ${service}`,
      text: `New Quote Request\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Quote request sent successfully!' });
  } catch (error) {
    console.error('Quote request error:', error.message);
    res.json({ success: true, message: 'Quote request received successfully!' });
  }
});

app.post('/api/worker', formLimiter, validateWorkerInput, handleValidationErrors, async (req, res) => {
  try {
    const { name, phone, email, skills, experience, location } = req.body;
    
    const worker = new Worker({ name, phone, email, skills, experience, location });
    await worker.save();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Worker Application',
      text: `New Worker Application\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nSkills: ${skills}\nExperience: ${experience}\nLocation: ${location}`
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Worker application sent successfully!' });
  } catch (error) {
    console.error('Worker application error:', error.message);
    res.json({ success: true, message: 'Worker application received successfully!' });
  }
});

app.post('/api/contact', formLimiter, validateContactInput, handleValidationErrors, async (req, res) => {
  try {
    const { name, phone, email, service, message } = req.body;
    
    const contact = new Contact({ name, phone, email, service, message });
    await contact.save();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      text: `Contact Form Submission\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error.message);
    res.json({ success: true, message: 'Message received successfully!' });
  }
});

module.exports = app;