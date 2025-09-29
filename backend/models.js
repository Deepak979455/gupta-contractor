const mongoose = require('mongoose');

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

module.exports = {
  Quote: mongoose.model('Quote', quoteSchema),
  Worker: mongoose.model('Worker', workerSchema),
  Contact: mongoose.model('Contact', contactSchema)
};