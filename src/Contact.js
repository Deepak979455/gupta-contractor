import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaUser } from 'react-icons/fa';
import QuoteModal from './QuoteModal';

const Contact = () => {
  const [quoteModal, setQuoteModal] = useState({ isOpen: false, service: 'General Inquiry' });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch for your construction needs</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                  <FaPhone className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+919794554972" className="text-blue-600 hover:underline">
                    +91 9794554972
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="p-3 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                  <FaWhatsapp className="text-2xl text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <a href="https://wa.me/919794554972" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                    Chat with us
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="p-3 bg-orange-100 rounded-full group-hover:bg-orange-200 transition-colors">
                  <FaEnvelope className="text-2xl text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <button 
                    onClick={() => navigator.clipboard.writeText('guptaconstructor@gmail.com').then(() => alert('Email copied to clipboard!'))}
                    className="text-orange-600 hover:underline cursor-pointer"
                  >
                    guptaconstructor@gmail.com
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="p-3 bg-red-100 rounded-full group-hover:bg-red-200 transition-colors">
                  <FaMapMarkerAlt className="text-2xl text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600">New Delhi, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="p-3 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                  <FaClock className="text-2xl text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Working Hours</h3>
                  <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Send Message</h2>
            
            <form className="space-y-4" onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const data = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                service: formData.get('service'),
                message: formData.get('message')
              };
              try {
                const response = await fetch('/api/contact', {
                  method: 'POST',
                  headers: { 
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
                });
                const result = await response.json();
                if (result.success) {
                  alert('Message sent successfully!');
                  e.target.reset();
                } else {
                  console.log('Server response:', result);
                  alert(`Failed: ${result.message || 'Unknown error'}`);
                }
              } catch (error) {
                console.log('Network error:', error);
                alert(`Network error: ${error.message}`);
              }
            }}>
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Phone"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-service" className="block text-sm font-medium mb-2">Service Needed</label>
                <select id="contact-service" name="service" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Construction</option>
                  <option>Renovation</option>
                  <option>Interior Design</option>
                  <option>Plumbing</option>
                  <option>Electrical Work</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="4"
                  id="contact-message"
                  name="message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={() => setQuoteModal({ isOpen: true, service: 'General Inquiry' })}
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="tel:+919794554972"
              className="bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-3"
            >
              <FaPhone className="text-2xl" />
              <span className="text-lg font-semibold">Call Now</span>
            </a>
            <a
              href="https://wa.me/919794554972"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-3"
            >
              <FaWhatsapp className="text-2xl" />
              <span className="text-lg font-semibold">WhatsApp</span>
            </a>
            <button
              onClick={() => setQuoteModal({ isOpen: true, service: 'Emergency Service' })}
              className="bg-orange-600 text-white p-6 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-3"
            >
              <FaUser className="text-2xl" />
              <span className="text-lg font-semibold">Emergency</span>
            </button>
          </div>
        </div>
      </div>

      <QuoteModal 
        isOpen={quoteModal.isOpen}
        onClose={() => setQuoteModal({ isOpen: false, service: '' })}
        service={quoteModal.service}
      />
    </div>
  );
};

export default Contact;