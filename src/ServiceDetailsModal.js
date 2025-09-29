import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import QuoteModal from './QuoteModal';

const ServiceDetailsModal = ({ isOpen, onClose, service }) => {
  const [quoteModal, setQuoteModal] = useState({ isOpen: false, service: '' });
  
  if (!isOpen || !service) return null;

  const serviceDetails = {
    "Residential Construction": {
      description: "Complete home construction from foundation to finishing with modern amenities and quality materials.",
      process: ["Site Survey & Planning", "Foundation Work", "Structure Building", "Interior Finishing", "Final Inspection"],
      timeline: "6-12 months depending on size",
      warranty: "5-year structural warranty",
      includes: ["Architectural Design", "Material Supply", "Labor & Equipment", "Quality Control", "Post-completion Support"]
    },
    "Commercial Building": {
      description: "Professional office buildings, shops, and commercial spaces with industry-standard specifications.",
      process: ["Commercial Planning", "Permits & Approvals", "Construction Phase", "Systems Installation", "Handover"],
      timeline: "12-24 months based on complexity",
      warranty: "3-year comprehensive warranty",
      includes: ["Commercial Design", "Fire Safety Systems", "HVAC Installation", "Electrical Systems", "Parking Facilities"]
    },
    "Home Renovation": {
      description: "Transform your existing home with modern upgrades, repairs, and aesthetic improvements.",
      process: ["Assessment & Planning", "Design Approval", "Demolition (if needed)", "Renovation Work", "Final Touches"],
      timeline: "2-4 months per project",
      warranty: "2-year renovation warranty",
      includes: ["Kitchen Remodeling", "Bathroom Upgrades", "Flooring Replacement", "Paint & Finishing", "Fixture Installation"]
    },
    "Interior Design": {
      description: "Beautiful and functional interior solutions for homes and offices with expert design consultation.",
      process: ["Consultation", "Design Concept", "Material Selection", "Implementation", "Styling & Setup"],
      timeline: "1-3 months completion",
      warranty: "1-year design warranty",
      includes: ["Space Planning", "Furniture Selection", "Lighting Design", "Color Consultation", "Decor Accessories"]
    },
    "Plumbing Services": {
      description: "Professional plumbing installation, repair, and maintenance services for residential and commercial properties.",
      process: ["Problem Assessment", "Solution Planning", "Parts Procurement", "Installation/Repair", "Testing & Cleanup"],
      timeline: "1-7 days per job",
      warranty: "6-month service warranty",
      includes: ["Pipe Installation", "Leak Repairs", "Bathroom Fittings", "Water Heater Setup", "Drainage Solutions"]
    },
    "Electrical Work": {
      description: "Safe and reliable electrical installation and repair services with certified electricians.",
      process: ["Safety Inspection", "Circuit Planning", "Installation Work", "Testing & Verification", "Safety Certification"],
      timeline: "1-5 days per project",
      warranty: "1-year electrical warranty",
      includes: ["Wiring Installation", "Panel Upgrades", "Lighting Fixtures", "Safety Inspections", "Emergency Repairs"]
    }
  };

  const details = serviceDetails[service.title] || serviceDetails["Residential Construction"];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{service.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes className="text-xl" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Service Overview</h3>
            <p className="text-gray-600">{details.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Timeline</h3>
              <p className="text-gray-600">{details.timeline}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Warranty</h3>
              <p className="text-gray-600">{details.warranty}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Our Process</h3>
            <div className="space-y-2">
              {details.process.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {details.includes.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setQuoteModal({ isOpen: true, service: service.title });
                  onClose();
                }}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book This Service
              </button>
              <button
                onClick={onClose}
                className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
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

export default ServiceDetailsModal;