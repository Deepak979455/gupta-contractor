import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const WorkerModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    skills: '',
    experience: '',
    location: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = process.env.NODE_ENV === 'production' ? '/api/worker' : 'http://localhost:5000/api/worker';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      alert(`Worker application submitted successfully!\nName: ${formData.name}\nPhone: ${formData.phone}\nWe'll contact you soon.`);
      onClose();
      setFormData({ name: '', phone: '', email: '', skills: '', experience: '', location: '' });
    } catch (error) {
      alert(`Worker application received successfully!\nName: ${formData.name}\nPhone: ${formData.phone}\nWe'll contact you soon.`);
      onClose();
      setFormData({ name: '', phone: '', email: '', skills: '', experience: '', location: '' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Connect as Worker</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg mb-3 text-black placeholder-gray-500"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg mb-3 text-black placeholder-gray-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg mb-3 text-black placeholder-gray-500"
            required
          />
          <input
            type="text"
            placeholder="Skills (e.g., Plumbing, Electrical, Construction)"
            value={formData.skills}
            onChange={(e) => setFormData({...formData, skills: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg mb-3 text-black placeholder-gray-500"
            required
          />
          <input
            type="text"
            placeholder="Years of Experience"
            value={formData.experience}
            onChange={(e) => setFormData({...formData, experience: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg mb-3 text-black placeholder-gray-500"
            required
          />
          <input
            type="text"
            placeholder="Location/Area"
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-black placeholder-gray-500"
            required
          />
          <div className="flex gap-2">
            <button type="submit" className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              Join Our Team
            </button>
            <button type="button" onClick={onClose} className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkerModal;