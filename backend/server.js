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
const { Quote, Worker, Contact } = require('./models');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());
app.use(cookieParser());

// CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gupta-contractor')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes that should not be rate limited
app.get('/', (req, res) => {
  res.json({ message: 'Gupta Contractor Backend API is running!', endpoints: ['/api/quote', '/api/worker', '/api/contact', '/api/data'] });
});

// View all submitted data
app.get('/api/data', async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ timestamp: -1 });
    const workers = await Worker.find().sort({ timestamp: -1 });
    const contacts = await Contact.find().sort({ timestamp: -1 });
    
    console.log('📊 Data endpoint accessed');
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

// Rate limiting (skip /api/data)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.',
  skip: (req) => req.path === '/api/data' || req.path === '/'
});
app.use('/api/quote', limiter);
app.use('/api/worker', limiter);
app.use('/api/contact', limiter);

const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many form submissions, please try again later.'
});

// DOMPurify setup
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
};

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Test email connection
transporter.verify((error, success) => {
  if (error) {
    console.log('Email configuration error:', error);
    console.log('Server will continue but email functionality may not work');
  } else {
    console.log('Email server is ready to send messages');
  }
});

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
    console.log('Validation errors:', errors.array());
    return res.status(400).json({ 
      success: false, 
      message: `Validation failed: ${errors.array().map(e => e.msg).join(', ')}`,
      errors: errors.array()
    });
  }
  next();
};

app.post('/api/quote', formLimiter, validateQuoteInput, handleValidationErrors, async (req, res) => {
  try {
    const { name, phone, email, service, message } = req.body;
    
    // Store data in database
    const quote = new Quote({ name, phone, email, service, message });
    await quote.save();
    
    console.log('=== NEW QUOTE REQUEST ===');
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Service:', service);
    console.log('Message:', message);
    console.log('========================');
    
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
    
    // Store data in database
    const worker = new Worker({ name, phone, email, skills, experience, location });
    await worker.save();
    
    console.log('=== NEW WORKER APPLICATION ===');
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Skills:', skills);
    console.log('Experience:', experience);
    console.log('Location:', location);
    console.log('==============================');
    
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
  console.log('📧 Contact form request received:', req.body);
  try {
    const { name, phone, email, service, message } = req.body;
    
    // Store data in database
    const contact = new Contact({ name, phone, email, service, message });
    await contact.save();
    
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Service:', service);
    console.log('Message:', message);
    console.log('=====================================')
    
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

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Secure server running on port ${PORT}`);
});