import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Logo className="w-8 h-8" />
              <span className="text-xl font-bold">Gupta Contractor</span>
            </div>
            <p className="text-gray-300">
              Your trusted construction partner for quality building solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <a href="tel:+919794554972" className="block hover:text-white">📞 +91 9794554972</a>
              <a href="mailto:guptaconstructor@gmail.com?subject=Construction Service Inquiry&body=Hello Gupta Contractor,%0D%0A%0D%0AI am interested in your construction services. Please provide me with more information about:%0D%0A%0D%0A- Service needed:%0D%0A- Project location:%0D%0A- Timeline:%0D%0A- Budget range:%0D%0A%0D%0APlease contact me at your earliest convenience.%0D%0A%0D%0AThank you." className="block hover:text-white">✉️ guptaconstructor@gmail.com</a>
              <a href="https://wa.me/919794554972" target="_blank" rel="noopener noreferrer" className="block hover:text-white">💬 WhatsApp Chat</a>
              <p>📍 New Delhi, India</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-gray-300">
              <a href="/services" className="block hover:text-white">🏗️ Residential Construction</a>
              <a href="/services" className="block hover:text-white">🏢 Commercial Building</a>
              <a href="/services" className="block hover:text-white">🔨 Home Renovation</a>
              <a href="/services" className="block hover:text-white">🏠 Interior Design</a>
              <a href="/services" className="block hover:text-white">🔧 Plumbing Services</a>
              <a href="/services" className="block hover:text-white">⚡ Electrical Work</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; 2025 Gupta Contractor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
