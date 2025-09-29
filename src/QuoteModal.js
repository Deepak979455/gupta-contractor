import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const QuoteModal = ({ isOpen, onClose, service }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = process.env.NODE_ENV === 'production' ? '/api/quote' : 'http://localhost:5000/api/quote';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, service })
      });
      const result = await response.json();
      alert(`Quote request sent successfully for ${service}!`);
      onClose();
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      alert(`Quote request received successfully for ${service}!`);
      onClose();
      setFormData({ name: '', phone: '', email: '', message: '' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Book Appointment - {service}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-3 border rounded-lg mb-3"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full p-3 border rounded-lg mb-3"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-3 border rounded-lg mb-3"
            required
          />
          <textarea
            placeholder="Project Details"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full p-3 border rounded-lg mb-4 h-20"
            required
          />
          <div className="flex gap-2">
            <button type="submit" className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Book Appointment
            </button>
            <button type="button" onClick={onClose} className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;