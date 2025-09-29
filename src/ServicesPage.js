import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaHome, FaBuilding, FaHammer, FaPalette, FaWrench, FaBolt, FaSearch } from 'react-icons/fa';
import QuoteModal from './QuoteModal';
import ServiceDetailsModal from './ServiceDetailsModal';

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [quoteModal, setQuoteModal] = useState({ isOpen: false, service: '' });
  const [detailsModal, setDetailsModal] = useState({ isOpen: false, service: null });
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');
    if (searchParam) {
      setSearchTerm(searchParam);
    }
  }, [location]);

  const services = [
    {
      id: 1,
      title: "Residential Construction",
      category: "construction",
      price: "₹15,00,000+",
      duration: "6-12 months",
      description: "Complete home construction from foundation to finishing with modern amenities.",
      features: ["Foundation work", "Structural design", "Interior finishing", "Electrical & Plumbing"],
icon: <FaHome className="text-blue-600" />
    },
    {
      id: 2,
      title: "Commercial Building",
      category: "construction",
      price: "₹50,00,000+",
      duration: "12-24 months",
      description: "Office buildings, shops, and commercial spaces with professional standards.",
      features: ["Commercial design", "Fire safety systems", "HVAC installation", "Parking facilities"],
icon: <FaBuilding className="text-gray-600" />
    },
    {
      id: 3,
      title: "Home Renovation",
      category: "renovation",
      price: "₹2,00,000+",
      duration: "2-4 months",
      description: "Transform your existing home with modern upgrades and improvements.",
      features: ["Kitchen remodeling", "Bathroom upgrades", "Flooring replacement", "Paint & finishing"],
icon: <FaHammer className="text-orange-600" />
    },
    {
      id: 4,
      title: "Interior Design",
      category: "design",
      price: "₹1,50,000+",
      duration: "1-3 months",
      description: "Beautiful and functional interior solutions for homes and offices.",
      features: ["Space planning", "Furniture selection", "Lighting design", "Color consultation"],
icon: <FaPalette className="text-purple-600" />
    },
    {
      id: 5,
      title: "Plumbing Services",
      category: "maintenance",
      price: "₹5,000+",
      duration: "1-7 days",
      description: "Professional plumbing installation, repair, and maintenance services.",
      features: ["Pipe installation", "Leak repairs", "Bathroom fittings", "Water heater setup"],
icon: <FaWrench className="text-green-600" />
    },
    {
      id: 6,
      title: "Electrical Work",
      category: "maintenance",
      price: "₹8,000+",
      duration: "1-5 days",
      description: "Safe and reliable electrical installation and repair services.",
      features: ["Wiring installation", "Panel upgrades", "Lighting fixtures", "Safety inspections"],
icon: <FaBolt className="text-yellow-600" />
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'construction', name: 'Construction' },
    { id: 'renovation', name: 'Renovation' },
    { id: 'design', name: 'Design' },
    { id: 'maintenance', name: 'Maintenance' }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Professional construction and renovation solutions</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <FaSearch /> Search
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-blue-50 hover:to-orange-50 transition-all duration-300 cursor-pointer">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-3">{service.icon}</div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>💰 Starting from: {service.price}</span>
                    <span>⏱️ Duration: {service.duration}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => setQuoteModal({ isOpen: true, service: service.title })}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Book Appointment
                  </button>
                  <button 
                    onClick={() => setDetailsModal({ isOpen: true, service: service })}
                    className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
          </div>
        )}
      </div>
      
      <QuoteModal 
        isOpen={quoteModal.isOpen}
        onClose={() => setQuoteModal({ isOpen: false, service: '' })}
        service={quoteModal.service}
      />
      
      <ServiceDetailsModal 
        isOpen={detailsModal.isOpen}
        onClose={() => setDetailsModal({ isOpen: false, service: null })}
        service={detailsModal.service}
      />
    </div>
  );
};

export default ServicesPage;